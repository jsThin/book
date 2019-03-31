import Vue from 'vue'
import Router from 'vue-router'
import Home from '../component/Home'
import List from '../component/List'
import Collect from '../component/Collect'
import Add from '../component/Add'
import Detail from '../component/Detail'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        KeepAlive: true
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/detail/:bid',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
