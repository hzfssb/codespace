import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component:() => import('@/views/Login.vue')
  },
  {
    //1 path: '/home/:user',
    //2 path: '/home',
    //3 path: '/home/:user',
    //  name:'home',
    path: '/home',
    component:() => import('@/views/Home.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
