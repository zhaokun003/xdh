import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Friend from '../views/Friend.vue'
import Find from '../views/Find.vue'
import Me from '../views/Me.vue'
import Chatroom from '../views/Chatroom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    
    component: Home
  },{
    path: '/friend',
  
    component: Friend
  },{
    path: '/find',
   
    component: Find
  },{
    path: '/me',
    
    component: Me
  },{
    path: '/chatroom',
   
    component: Chatroom
  },


]

const router = new VueRouter({
  routes
})

export default router
