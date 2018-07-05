import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projets from '@/components/Projets'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
