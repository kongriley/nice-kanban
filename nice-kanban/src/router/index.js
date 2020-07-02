import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, 
  {
    path: '/board',
    redirect: '/'
  },
  {
    path: '/board/:boardId',
    name: 'Board',
    component: () => import('../views/BoardPage.vue') // Change to edit board view
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/ErrorPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
