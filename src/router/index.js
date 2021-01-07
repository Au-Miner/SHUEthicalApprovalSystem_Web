import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import bg from '@/components/backstage/bg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/bg',
      name: 'bg',
      component: bg
    }
  ]
})
