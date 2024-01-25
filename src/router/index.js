import ChatView from '@/views/ChatView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatView
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/AccountView.vue')
    }
  ]
})

export default router
