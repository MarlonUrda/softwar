import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import List from '@/views/List.vue'
import StoreView from '@/views/StoreView.vue'
import Construyendose from '@/views/Construyendose.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/shops',
      name: 'List',
      component: List
    },
    {
      path: '/store/:storeName',
      name: 'StoreView',
      component: StoreView
    },
    {
      path: '/construccion',
      name: 'Construyendose',
      component: Construyendose
    }
  ]
})

export default router
