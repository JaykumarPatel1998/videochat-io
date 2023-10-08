import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Rooms from '../views/Rooms.vue'
import CheckIn from '../views/CheckIn.vue'
import CheckInClient from '../views/CheckInClient.vue'
import Chat from '../views/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/checkin/:hostId/:roomId',
      name: 'checkin',
      component: CheckIn
    },
    {
      path: '/checkinclient',
      name: 'checkinclient',
      component: CheckInClient
    },
    {
      path: '/chat/:hostId/:roomId',
      name: 'chat',
      component: Chat
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    },
  ]
})

export default router
