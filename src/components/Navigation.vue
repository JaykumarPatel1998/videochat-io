<template>
  <header>
    <nav>
      <h1><router-link to="/">videoconnect.io</router-link><span v-if="user" id="userid">{{user.uid}}</span></h1>
      <ul class="nav-list">
        <li class="list-items"><router-link to="/">Home</router-link></li>
        <li class="list-items" v-if="!user"><router-link to="/login">Login</router-link></li>
        <li class="list-items" v-if="!user"><router-link to="/register">Register</router-link></li>
        <li class="list-items" v-if="user"><router-link to="/rooms">Rooms</router-link></li>
        <li class="list-items" v-if="user"><router-link to="/checkinclient">check in client</router-link></li>
        <li class="list-items" v-if="user"><button @click="$emit('logout')">Logout</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props:['user'],
  data() {
    return {
    }
  }
}
</script>

<style scoped>

nav {
  background: var(--color-background-soft);
  padding: 1rem;
  display: flex;
  flex-wrap: nowrap;
}

.nav-list {
  flex-grow: 1;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.nav-list li {
  list-style-type: none;
}

.nav-list li a {
  color: var(--color-text);
  text-decoration: none;
  opacity: 0.7;
}

.nav-list li a:hover {
  opacity: 1;
}

h1 {
  flex-grow: 1;
}

h1 a{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-heading);
}

button {
  cursor: pointer;

}

@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }
  h1 {
  align-self: center;
}
  .nav-list {
    flex-direction: column;
  }
}

#userid {
  font-size: 0.5rem;
  padding-left: 0.2rem;
}
</style>
