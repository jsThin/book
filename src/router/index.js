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
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
