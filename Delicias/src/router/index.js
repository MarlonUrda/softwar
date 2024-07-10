import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import List from '@/views/List.vue'
import ProductView from '@/views/ProductView.vue'
import StoreView from '@/views/StoreView.vue'

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
      path: '/product/:id',
      name: 'ProductView',
      component: ProductView
    },
    {
      path: '/store/:storeName',
      name: 'StoreView',
      component: StoreView
    }
  ]
})

export default router
