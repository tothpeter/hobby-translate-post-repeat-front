import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import LatestFeed from '@/components/dashboard/LatestFeed.vue'

import Session from '@/plugins/session.js'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard/latest-feed', component: LatestFeed },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/dashboard') && !Session.isAuthenticated()) {
    next('/login')
  }
  else next()
})

export default router
