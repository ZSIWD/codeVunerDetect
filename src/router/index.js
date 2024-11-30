import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path:'/index',
          name:'/index',
          component: () => import('../views/IndexView.vue')
        },{
          path:'/detect',
          name:'detect',
          component: () => import('../views/VulnerDetectView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    
  ],
})

export default router
