<template>
  <section id="login">
    <div class="login-container">
      <h2>Login Form</h2>
      <div class="error-message" v-if="error">Error: {{ error }}</div>
      <form @submit.prevent="login()">
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

        <input type="submit" value="Login" />
      </form>
    </div>
  </section>
</template>

<script>
import {authorize} from '../firebaseAuth.js'
export default {
  data: function () {
    return {
        email: null,
        password: null,
        error: null,
    };
  },
  methods: {
    login: async function() {
        const loginPayload = {
            email : this.email,
            password: this.password
        }
        const user = await authorize(loginPayload.email, loginPayload.password)
        if (!user) {
          this.error = 'Username or password incorrect!'
        } else {
          this.error = null
          this.$router.push('/rooms')
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

#login {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.login-container {
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.login-container input[type="email"],
.login-container input[type="password"] {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
}

.login-container input[type="submit"] {
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
