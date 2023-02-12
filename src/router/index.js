import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Registrar from '../views/RegistrarView.vue'
import ListaAutores from '../views/AutoresView.vue'
import BusquedaAutor from '../views/BuscarAutorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Registrar
  },
  {
    path: '/lista',
    name: 'lista',
    component: ListaAutores
  },
  {
    path: '/busqueda',
    name: 'busqueda',
    component: BusquedaAutor
  },
]

const router = new VueRouter({
  routes
})

export default router
