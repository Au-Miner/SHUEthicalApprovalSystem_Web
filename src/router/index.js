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
import login from '@/components/login'
import appointment from '@/components/backstage/appointment/appointment'
import member_approve from '@/components/backstage/approve/approves/member_approve'
import chairman_approve from '@/components/backstage/approve/approves/chairman_approve'
import leader_approve from '@/components/backstage/approve/approves/leader_approve'
import secretary_approve from '@/components/backstage/approve/approves/secretary_approve'

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
      path: '/login',
      name: 'login',
      component: login
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
        component: approve,
        children: [{
          path:'member_approve',
          name:'member_approve',
          component:member_approve
        },
        {
          path:'chairman_approve',
          name:'chairman_approve',
          component:chairman_approve
        },
        {
          path:'leader_approve',
          name:'leader_approve',
          component:leader_approve
        },
        {
          path:'secretary_approve',
          name:'secretary_approve',
          component:secretary_approve
        },
      ]
      },
      {
        path: 'myapplications',
        name:'myapplications',
        component: myapplications
      },
      {
        path: 'appointment',
        name: 'appointment',
        component: appointment
      }
    ]
    }
  ]
})
