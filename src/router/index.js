import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Title_Start01 from '@/components/Title_Start01'
import bg from '@/components/backstage/bg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      // component: HelloWorld,
      component: Title_Start01
    },
    {
      path: '/bg',
      name: 'bg',
      // component: HelloWorld,
      component: bg
    }
  ]
})
