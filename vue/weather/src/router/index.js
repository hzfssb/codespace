import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/home'

    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),

    }
  ]
  
  const router = createRouter({
    history: createWebHistory(), // 路由history模式， hash模式
    routes
  })
  
  export default router