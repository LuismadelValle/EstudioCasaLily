import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import customerHomeView from '@/views/customerHomeView.vue'
import catalog from '@/views/catalog.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'customerView',
    component: customerHomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/catalog.vue')
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
