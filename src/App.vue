<template>
  <div>
    <navigation :user="user" @logout="logout" />
    <router-view :user="user" :rooms="rooms" @logout="logout" @addRoom="addRoom" @deleteRoom="deleteRoom" @checkIn="checkIn"/>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import Navigation from "./components/Navigation.vue";
import { auth, db } from "./firebase.js";
import { signout } from "./firebaseAuth.js";
import { addRoomsToUsers, deleteRoom, checkInUser } from "./firestoreQueries.js";
import { collection, doc, onSnapshot } from 'firebase/firestore';
export default {
  components: {
    Navigation,
  },

  data: function () {
    return {
      user: null,
      rooms: [],
    };
  },

  methods: {
    logout: async function() {
      await signout();
      this.user = null;
      this.$router.push("login");
    },
    addRoom: async function (payload) {
      await addRoomsToUsers(this.user.uid, payload);
    },
    deleteRoom: async function(payload) {
      await deleteRoom(this.user.uid, payload)
    },
    checkIn: async function(payload) {
      await checkInUser(this.user.uid, payload)
      this.$router.push(`/chat/${payload.hostId}/${payload.roomId}`)
    }
  },

  mounted() {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        this.user = userInfo;
        const userDoc = doc(collection(db, "users"), this.user.uid);
        const roomsCollection = collection(userDoc, "rooms");
        onSnapshot(roomsCollection, (snapshot) => {
          const snapData = [];
          snapshot.forEach((doc) => {
            snapData.push({
              id: doc.id,
              name: doc.data().name,
            });
          });
          this.rooms = snapData.sort((a,b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1
            } else {
              return 1
            }
          })
        });
      }
    });
  },

};
</script>

<style scoped>
</style>
