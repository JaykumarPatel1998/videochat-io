<template>
  <main>
    <div v-if="user" id="checkIn">
      <h1>
        Check in <span>{{ roomName }}</span> room
      </h1>
      <p>
        display name :
        <input type="text" v-model="displayName" placeholder="cool user 🐱‍🏍" />
      </p>
      <button @click="handleCheckIn">check in</button>
    </div>
    <div v-else id="notFound">
      <p>Ohh! looks like you are not logged in</p>
      <button>
        <router-link to="/login">Login</router-link>
      </button>
      or
      <button>
        <router-link to="/register">Register</router-link>
      </button>
    </div>
  </main>
</template>

<script>
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
export default {
  name: "CheckIn",
  props: ["user"],
  data() {
    return {
      hostId: this.$route.params.hostId,
      displayName: null,
      roomName: null,
    };
  },
  methods: {
    handleCheckIn: function () {
      this.$emit("checkIn", {
        hostId: this.$route.params.hostId,
        roomId: this.$route.params.roomId,
        displayName: this.displayName,
      });
    },
  },
  mounted() {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        this.displayName = userInfo.displayName;
      }
    });

    const userDoc = doc(collection(db, "users"), this.$route.params.hostId);
    const roomsCollection = collection(userDoc, "rooms");
    const toBeFetchedRoomDoc = doc(roomsCollection, this.$route.params.roomId);

    getDoc(toBeFetchedRoomDoc).then((snapshot) => {
      if (snapshot.exists()) this.roomName = snapshot.data().name;
      else this.$router.replace("/");
    });
  },
};
</script>

<style scoped>
main {
  text-align: center;
  background: rgb(61, 61, 61);
  width: 50%;
  padding: 1rem;
  border-radius: 6px;
  margin-inline: auto;
  margin-top: 20px;
}
span {
  background: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
  font-family: monospace;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.2rem;
}
h1 {
  font-size: 20px;
  margin-top: 1rem;
}
#notFound,
#checkIn {
  padding: 1rem;
}
button {
  background: green;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 4px;
}
button:hover {
  opacity: 0.7;
  scale: 1.05;
}
button a {
  text-decoration: none;
  color: black;
}
input[type="text"] {
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  outline: none;
  background: rgb(44, 44, 44);
  border: none;
  color: aliceblue;
}
</style>