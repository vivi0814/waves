import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import store from '../store'; 

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
      path: '/rooms/:id', // 使用 :id 作為路由參數
      name: 'roomsdetails',
      component: ()=>import('../views/RoomsDetailsView.vue')
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
    {
      path: '/orders',
      name: 'orders',
      component:()=>import('../views/OrdersView.vue'),
      meta: { requiresAuth: true }, // 添加 meta 屬性以標記需要登入
    },
    
  ]
});

// 全局導航守衛
router.beforeEach((to, from, next) => {
  // 檢查路由是否需要登入
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
    next({ name: 'login' }); // 重定向到登入頁面
  } else {
    next(); // 繼續導航
  }
});


export default router
