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
      component: resolve=>require(['@/components/Homepage'],resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve=>require(['@/components/login'],resolve)
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: resolve=>require(['@/components/backstage/bg'],resolve),
      redirect:{name:'tutorial'},
      children: [
      {
        path: 'tutorial',
        name:'tutorial',
        component: resolve=>require(['@/components/backstage/tutorial/tutorial'],resolve)
      },
      {
        path: 'apply_program',
        name:'apply_program',
        component: resolve=>require(['@/components/backstage/apply/apply_program'],resolve)
      },
      {
        path: 'apply_other',
        name:'apply_other',
        component: resolve=>require(['@/components/backstage/apply/apply_other'],resolve)
      },
      {
        path: 'apply_personal',
        name:'apply_personal',
        component: resolve=>require(['@/components/backstage/apply/apply_personal'],resolve)
      },
      {
        path: 'approve',
        name:'approve',
        component: resolve=>require(['@/components/backstage/approve/approve'],resolve),
        children: [{
          path:'member_approve',
          name:'member_approve',
          component:resolve=>require(['@/components/backstage/approve/approves/member_approve'],resolve)
        },
        {
          path:'chairman_approve',
          name:'chairman_approve',
          component:resolve=>require(['@/components/backstage/approve/approves/chairman_approve'],resolve)
        },
        {
          path:'leader_approve',
          name:'leader_approve',
          component:resolve=>require(['@/components/backstage/approve/approves/leader_approve'],resolve)
        },
        {
          path:'secretary_approve',
          name:'secretary_approve',
          component:resolve=>require(['@/components/backstage/approve/approves/secretary_approve'],resolve)
        },
      ]
      },
      {
        path: 'myapplications',
        name:'myapplications',
        component: resolve=>require(['@/components/backstage/myapplications/myapplications'],resolve)
      }
    ]
    }
  ]
})
