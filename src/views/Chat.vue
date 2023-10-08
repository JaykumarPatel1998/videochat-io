<template>
  <div id="room-info" v-if="user">
    <h2 id="room-name">Room Name : {{ roomName }}</h2>
    <p id="room-owner">Room Owner: {{ hostDisplayName }}</p>
    <div
      id="security"
      v-if="(user !== null && user.uid == hostId) || amIApproved"
    >
      <div class="videos">
        <div>
          <video
            id="webcamVideo"
            ref="webcamvideo"
            autoplay
            playsinline
            controls
          ></video>
        </div>
        <div>
          <video
            id="remoteVideo"
            ref="remotevideo"
            autoplay
            playsinline
            controls
          ></video>
        </div>
      </div>
      <button
        id="call-btn"
        @click="doCall"
        ref="callbutton"
        disabled
      >
        Call
      </button>
      <button
        id="join-btn"
        @click="doAnswer"
        ref="answerbutton"
        disabled
      >
        Join
      </button>
      <button id="start-video-btn" ref="webcambutton" @click="startWebcam">
        Start Webcam
      </button>
      <button id="leave-btn" v-if="attendeeJoined" @click="doLeave">
        Leave
      </button>
      <h3>Pending Attendees:</h3>
      <ul
        class="attendees-list"
        v-for="attendee in attendees"
        :key="attendee.id"
      >
        <li>
          {{ attendee.displayName }}
          <button
            id="addButton"
            @click="toggleApproval(attendee.id)"
            v-if="user !== null && user.uid == hostId"
          >
            ✔️
          </button>
          <button
            id="kickButton"
            v-if="user !== null && user.uid == hostId"
            @click="deleteAttendee(attendee.id)"
          >
            ⛔
          </button>
        </li>
      </ul>
      <h3>Approved Attendees:</h3>
      <ul
        class="attendees-list"
        v-for="attendee in attendeesApproved"
        :key="attendee.id"
      >
        <li>
          {{ attendee.displayName }}
          <button
            v-if="user !== null && user.uid == hostId"
            @click="toggleApproval(attendee.id)"
          >
            ❌
          </button>
        </li>
      </ul>
    </div>

    <p id="join-request-status" v-else>
      Hi <b>{{ user.displayName }}</b
      >, Your join request is pending. The room owner will let you in soon.
    </p>
  </div>
  <div v-else>
    <p>Ohh! looks like you are not logged in</p>
    <button>
      <router-link to="/login">Login</router-link>
    </button>
    or
    <button>
      <router-link to="/register">Register</router-link>
    </button>
  </div>
</template>

<script>
import { collection, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { addAnswerCandidate, addOfferCandidate, createAnswerCandidate, createCallDoc, createOfferCandidate, deleteAttendee, getAnswerDoc, getCallDocById, getOfferDoc, setOffer, toggleApprove } from "../firestoreQueries";
export default {
  name: "Chat",
  data: function () {
    return {
      hostId: this.$route.params.hostId,
      roomId: this.$route.params.roomId,
      roomName: null,
      hostDisplayName: null,
      attendees: [],
      attendeesApproved: [],
      amIApproved: false,
      attendeeJoined: false,
      servers: {
        iceServers: [
          {
            urls: [
              "stun:stun1.l.google.com:19302",
              "stun:stun2.l.google.com:19302",
            ],
          },
        ],
        iceCandidatePoolSize: 10,
      },
      localStream: null,
      remoteStream: null,
      peerConnection: null,
    };
  },
  props: ["user"],
  methods: {
    deleteAttendee: async function (attendeeId) {
      if (this.user && this.user.uid == this.hostId) {
        await deleteAttendee(this.user.uid, this.roomId, attendeeId);
      }
    },
    toggleApproval: function (attendeeId) {
      if (this.user && this.user.uid == this.hostId) {
        toggleApprove(this.user.uid, this.roomId, attendeeId);
      }
    },
    startWebcam: async function () {
      //initializing the peer connection server as this is the entry point in the application.
      this.peerConnection = new RTCPeerConnection(this.servers);
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.remoteStream = new MediaStream();

      //push tracks from local stream to peer connection
      this.localStream.getTracks().forEach((track) => {
        this.peerConnection.addTrack(track, this.localStream);
      });

      //pull tracks from remote stream
      this.peerConnection.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          this.remoteStream.addTrack(track);
        });
      };

      this.$refs.webcamvideo.srcObject = this.localStream;
      this.$refs.remotevideo.srcObject = this.remoteStream;

      this.$refs.callbutton.disabled = false;
      this.$refs.answerbutton.disabled = false;
      this.$refs.webcambutton.disabled = true;
    },
    doCall: async function () {
      const callDoc = createCallDoc(this.hostId, this.roomId);
      const offerCandidates = createOfferCandidate(callDoc);
      const answerCandidates = createAnswerCandidate(callDoc);

      //get candidates for caller and save to db
      this.peerConnection.onicecandidate = (event) => {
        event.candidate &&
          addOfferCandidate(offerCandidates, event.candidate.toJSON());
      };

      //create offer
      const offerDescription = await this.peerConnection.createOffer();
      await this.peerConnection.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };

      await setOffer(callDoc, offer);

      onSnapshot(callDoc, (snapshot) => {
        const data = snapshot.data();
        if (!this.peerConnection.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          this.peerConnection.setRemoteDescription(answerDescription);
        }
      });

      //when answered add candidate to peer connection
      onSnapshot(answerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const candidate = new RTCIceCandidate(change.doc.data());
            this.peerConnection.addIceCandidate(candidate);
          }
        });
      });
    },
    doAnswer: async function () {
      const callDoc = getCallDocById(this.hostId, this.roomId);
      const answerCandidates = getAnswerDoc(callDoc);
      const offerCandidates = getOfferDoc(callDoc);

      this.peerConnection.onicecandidate = (event) => {
        event.candidate &&
          addAnswerCandidate(answerCandidates, event.candidate.toJSON());
      };

      const callData = (await getDoc(callDoc)).data();

      const offerDescription = callData.offer;
      await this.peerConnection.setRemoteDescription(
        new RTCSessionDescription(offerDescription)
      );

      const answerDescription = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answerDescription);

      const answer = {
        sdp: answerDescription.sdp,
        type: answerDescription.type,
      };

      await updateDoc(callDoc, { answer });

      onSnapshot(offerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            let data = change.doc.data();
            this.peerConnection.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    },
  },
  mounted: async function () {
    const userDoc = doc(collection(db, "users"), this.hostId);
    const roomsCollection = collection(userDoc, "rooms");
    const toBeFetchedRoomDoc = doc(roomsCollection, this.roomId);

    const snapshot = await getDoc(toBeFetchedRoomDoc);
    if (snapshot.exists()) {
      this.roomName = snapshot.data().name;
    } else {
      this.$router.replace("/");
    }
    let amCheckedIn = false;
    const attendeeCollection = collection(toBeFetchedRoomDoc, "attendees");
    onSnapshot(attendeeCollection, (attendeeSnapshot) => {
      const tempAttendeesPending = [];
      const tempAttendeesApproved = [];

      attendeeSnapshot.forEach((attendee) => {
        if (this.user.uid == attendee.id) {
          amCheckedIn = true;
        }

        if (this.hostId == attendee.id) {
          this.hostDisplayName = attendee.data().displayName;
        }

        if (attendee.data().approved) {
          if (this.user.uid == attendee.id) {
            this.amIApproved = true;
          }
          tempAttendeesApproved.push({
            id: attendee.id,
            displayName: attendee.data().displayName,
            approved: attendee.data().approved,
          });
        } else {
          if (this.user.uid == attendee.id) {
            this.amIApproved = false;
          }
          tempAttendeesPending.push({
            id: attendee.id,
            displayName: attendee.data().displayName,
            approved: attendee.data().approved,
          });
        }
      });
      this.attendees = tempAttendeesPending;
      this.attendeesApproved = tempAttendeesApproved;
      if (!amCheckedIn) {
        this.$router.push(`/checkin/${this.hostId}/${this.roomId}`);
      }
    });
  },
};
</script>

<style scoped>
#room-info {
  width: 80%;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

#room-info h2,
#room-info h3 {
  color: #c5c2c2;
}

#room-info p {
  color: #a09f9f;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: rgb(41, 41, 41);
  cursor: pointer;
  margin: 4px;
  background-color: rgb(127, 124, 124);
}

button:hover {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: rgb(46, 46, 46);
  cursor: pointer;
  margin: 4px;
  scale: 1.1;
}

#join-btn,
#call-btn,
#start-video-btn {
  background-color: #4caf50;
}

#leave-btn {
  background-color: #f44336;
}

.attendees-list {
  list-style-type: none;
}

b {
  font-weight: bold;
  color: rgb(19, 19, 19);
  background: #5b5b5b;
  padding: 2px;
  border-radius: 2px;
}

#webcamVideo {
  width: 300px;
  height: 200px;
}

#remoteVideo {
  width: 300px;
  height: 200px;
}
</style>