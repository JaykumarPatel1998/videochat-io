<template>
  <main v-if="user">
    <h1>create a Room</h1>
    <div class="createroom">
      <input
        type="text"
        name="roomName"
        id="roomName"
        placeholder="room name"
        v-model="roomName"
        ref="roomName"
      />
      <button id="addroom" @click="handleAdd()">+</button>
    </div>

    <h1>Your Rooms</h1>
    <table>
      <thead>
        <tr>
          <th>room name</th>
          <th>join</th>
          <th>check in user</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody v-for="item in rooms" :key="item.id">
        <tr>
          <td>{{ item.name }}</td>
          <td title="join room">
            <router-link :to="`/chat/${user.uid}/${item.id}`"
              ><img class="icons" src="@\assets\svg\video-solid.svg" alt=""
            /></router-link>
          </td>
          <td title="users in room">
            <router-link :to="`/checkin/${user.uid}/${item.id}`"
              ><img class="icons" src="@\assets\svg\user-solid.svg" alt=""
            /></router-link>
          </td>
          <td title="delete room">
            <img
              @click="$emit('deleteRoom', item.id)"
              class="icons"
              src="@\assets\svg\trash-solid.svg"
              alt=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  </main>
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
export default {
  name: "Rooms",
  props: ["user", "rooms"],
  data() {
    return {
      roomName: null,
    };
  },
  methods: {
    handleAdd() {
      this.$emit("addRoom", this.roomName);
      this.roomName = null;
      this.$refs.roomName.focus();
    },
  },
};
</script>

<style scoped>
.createroom {
  margin-top: 1rem;
  margin-inline: auto;
  border: 1px dotted white;
  padding: 2rem;
  width: max-content;
}

main {
  text-align: center;
}
h1 {
  font-size: 20px;
  margin-top: 1rem;
}
button {
  background: green;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
}
button:hover {
  opacity: 0.7;
  scale: 1.05;
}
#roomName {
  padding: 0.4rem;
  outline: none;
  font-size: 1rem;
}
table {
  width: 50%;
  border-collapse: collapse;
  margin-inline: auto;
}
.icons {
  width: 30px;
  height: 30px;
  border: 1px solid rgb(29, 197, 88);
  padding: 5px;
  border-radius: 50%;
}
.icons:hover {
  opacity: 0.7;
  scale: 1.1;
}
table,
th,
td {
  border: 1px solid black;
  padding: 15px;
  text-align: center;
}

table th {
  background-color: #3b3c3b;
  color: white;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>