import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catfacts',
    name: 'catfacts',
    component: () => import(/* webpackChunkName: "catfacts" */ '../views/Catfacts.vue')
  },
  {
    path: '/catquiz',
    name: 'catquiz',
    component: () => import(/* webpackChunkName: "catquiz" */ '../views/CatQuiz.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
