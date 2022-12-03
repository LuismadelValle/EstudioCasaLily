import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import customerHomeView from '@/views/customerHomeView.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import NewPassword from '@/views/forgotPassword.vue'
import UserNoAdmin from '@/views/userNoAdmin.vue'
import Catalog from '@/views/catalog.vue'
import Service from '@/views/service.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Reserves from '@/views/reserve.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'customerView',
    component: customerHomeView
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
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: NewPassword
  },
  {
    path: '/catalog',
    name: 'Catalog',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/views/catalog.vue')
    component: Catalog
  },
  {
    path: '/mySession',
    name: 'UserSession',
    component: UserNoAdmin
  },
  {
    path: '/services',
    name: 'services',
    component: Service
  },
  {
    path: '/reserves',
    name: 'reserves',
    component: Reserves
  },
  {
    path: '*',
    name: 'NotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
