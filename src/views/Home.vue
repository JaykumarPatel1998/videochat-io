<template>
  <main>
    <h1>Experience the Web Rtc 🐱‍🏍</h1>
    <p>Connect, Communicate, Collaborate 📱💬🎥 with our app, where secure sign-ins meet seamless video chats!</p>
    <div v-if="user" id="welcome">
      <p>
        Welcome back <span>{{ user.displayName }}</span>
      </p>
      <button>
        <router-link to="/rooms">Join a room</router-link>
      </button>
    </div>
    <div v-if="!user" id="register">
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
export default {
  name: "Home",
  props: ["user"],
};
</script>

<style scoped>
main {
  text-align: center;
}
span {
  color: green;
  font-family: monospace;
  font-weight: 800;
}
h1 {
  font-size: 20px;
  margin-top: 1rem;
}
#register, #welcome {
  padding: 1rem;
}
button {
  background: green;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}
button:hover {
  opacity: 0.7;
  scale: 1.05;
}
button a {
  text-decoration: none;
  color: black;
}
</style>