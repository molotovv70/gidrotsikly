import { createWebHistory, createRouter, Router, RouteRecordRaw } from 'vue-router'

import Home from '@/pages/Home.vue'
import Catalog from '@/pages/Catalog.vue'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'home',
    component: () => Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => Catalog
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router