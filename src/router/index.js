import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Life from '../views/Life.vue'
import Community from '../views/Community.vue'
import Classification from '../views/Classification.vue'
import About from '../views/About.vue'
import Dtile from '../views/Dtile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/about',
    name: 'About',
    component:About,
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/Classification',
    name: 'Classification',
    component: Classification,
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/Community',
    name: 'Community',
    component:Community,
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/Life',
    name: 'Life',
    component:Life,
    meta: {
      keepAlive: true//导航栏在该页面显示
    },
  },
  {
    path: '/Dtile',
    name: 'Dtile',
    component:Dtile,
    meta: {
      keepAlive: false//导航栏在该页面显示
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
