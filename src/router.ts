import { createWebHistory, createRouter, Router } from 'vue-router'

import Home from '@/pages/Home.vue'

/* catalog */
import Catalog from '@/pages/Catalog/Catalog.vue'
import Atvs from '@/pages/Catalog/Atvs.vue'
import Boats from '@/pages/Catalog/Boats.vue'
import Jetskis from '@/pages/Catalog/Jetskis.vue'
import Motorboats from '@/pages/Catalog/Motorboats.vue'
import AllTerrainVehicles from '@/pages/Catalog/AllTerrainVehicles.vue'
import Snowmobiles from '@/pages/Catalog/Snowmobiles.vue'
import Engines from '@/pages/Catalog/Engines.vue'
import SpareParts from '@/pages/Catalog/SpareParts.vue'

import Login from '@/pages/Auth/Login.vue'
import Register from '@/pages/Auth/Register.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Favorites from '@/pages/Profile/Favorites.vue'
import Cart from '@/pages/Cart.vue'
import Shops from '@/pages/Shops.vue'
import Actions from '@/pages/Actions.vue'
import Delivery from '@/pages/Delivery.vue'


// Readonly<RouteRecordRaw[]>
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Главная',
    component: Catalog,
    children: [
      {
        path: 'atvs',
        name: 'ATVs',
        component: Atvs,
      },
      {
        path: 'boats',
        name: 'Лодки',
        component: Boats,
      },
      {
        path: 'jet-skis',
        name: 'jet-skis',
        component: Jetskis,
      },
      {
        path: 'motorboats',
        name: 'motorboats',
        component: Motorboats,
      },
      {
        path: 'all-terrain-vehicles',
        name: 'all-terrain-vehicles',
        component: AllTerrainVehicles,
      },
      {
        path: 'snowmobiles',
        name: 'snowmobiles',
        component: Snowmobiles,
      },
      {
        path: 'engines',
        name: 'engines',
        component: Engines,
      },
      {
        path: 'spare-parts',
        name: 'spare-parts',
        component: SpareParts,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        path: 'favorites',
        name: 'favorites',
        component: Favorites,
      }
    ],
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/shops',
    name: 'shops',
    component: Shops
  },
  {
    path: '/actions',
    name: 'actions',
    component: Actions
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router