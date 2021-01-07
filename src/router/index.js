import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import bg from '@/components/backstage/bg'
import tutorial from '@/components/backstage/tutorial/tutorial'
import approve from '@/components/backstage/approve/approve'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: bg,
      children: [{
        path: 'tutorial',
        name:'tutorial',
        component: tutorial
      },
      {
        path: 'approve',
        name:'approve',
        component: approve
      }
    ]
    }
  ]
})
