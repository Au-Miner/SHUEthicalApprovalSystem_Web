import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import bg from '@/components/backstage/bg'
import tutorial from '@/components/backstage/tutorial/tutorial'
import approve from '@/components/backstage/approve/approve'
import apply_program from '@/components/backstage/apply/apply_program'
import apply_personal from '@/components/backstage/apply/apply_personal'
import apply_other from '@/components/backstage/apply/apply_other'
import myapplications from '@/components/backstage/myapplications/myapplications'

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
      redirect:{name:'tutorial'},
      children: [
      {
        path: 'tutorial',
        name:'tutorial',
        component: tutorial
      },
      {
        path: 'apply_program',
        name:'apply_other',
        component: apply_program
      },
      {
        path: 'apply_other',
        name:'apply_other',
        component: apply_other
      },
      {
        path: 'apply_personal',
        name:'apply_personal',
        component: apply_personal
      },
      {
        path: 'approve',
        name:'approve',
        component: approve
      },
      {
        path: 'myapplications',
        name:'myapplications',
        component: myapplications
      }
    ]
    }
  ]
})
