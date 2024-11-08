import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:()=>import('../views/AboutView.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component:()=>import('../views/RoomsView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component:()=>import('../views/NewsView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component:()=>import('../views/BlogsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component:()=>import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('../views/LoginView.vue')
    },
    
  ]
})

export default router
