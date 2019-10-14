import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Produits from '@/components/Produits'
import Conseils from '@/components/Conseils'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/produits',
      name: 'Produits',
      component: Produits
    },
    {
      path: '/conseils',
      name: 'Conseils',
      component: Conseils
    },
  ]
})