import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import myHome from '@/components/home/home'
import myContactUs from '@/components/contactUs/contactUs'
import myLogin from '@/components/login/login'
import myOrder from '@/components/myOrder/myOrder'

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: myContactUs
    },
    {
      path: '/login',
      name: 'login',
      component: myLogin
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
  ]
})
