<template>
  <section id="register">
    <div class="register-container">
      <h2>register Form</h2>
      <div class="error-message" v-if="error">Error: {{ error }}</div>
      <form @submit.prevent="register()">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          v-model="name"
        />
        <br />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          v-model="email"
        />
        <br />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          v-model="password"
        />
        <br />

        <input type="submit" value="register" />
      </form>
    </div>
  </section>
</template>

<script>
import {register} from '../firebaseAuth.js'
export default {
  data: function () {
    return {
        name: null,
        email: null,
        password: null,
        error: null,
    };
  },
  methods: {
    register: async function() {
        const registerPayload = {
            name: this.name,
            email : this.email,
            password: this.password
        }
        const user = await register( registerPayload.name, registerPayload.email, registerPayload.password)
        if (!user) {
          this.error = 'Something went wrong with registration!'
        } else {
          this.error = null
          this.$router.push('/')
        }
    }
  }
};
</script>


<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}

#register {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.register-container {
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.register-container input[type="email"],
.register-container input[type="text"],
.register-container input[type="password"] {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
}

.register-container input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

h2 {
  margin-bottom: 2rem;
  color: #4caf50;
}
</style>
