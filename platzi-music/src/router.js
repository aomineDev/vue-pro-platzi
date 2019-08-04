import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },
    {
      path: '/track/:id',
      name: 'track',
      component: () => import( './views/TrackDetail.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import( './views/practices/SignIn.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import( './views/practices/Computed.vue')
    },
    {
      path: '/watched',
      name: 'watched',
      component: () => import( './views/practices/Watched.vue')
    },
    {
      path: '/dom',
      name: 'dom',
      component: () => import( './views/practices/DOM.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import( './views/practices/Reactive.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import( './views/practices/slots/Slot.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import( './views/practices/Vuex.vue')
    }
  ]
})
