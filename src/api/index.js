import axios from 'axios'
import {Toast} from 'mint-ui'
import router from '../router'
import store from '../vuex/store.js'

export let api = axios.create();

// api.defaults.baseURL = 'http://localhost:7001'
api.defaults.timeout = 4000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.common['Authorization'] = 'Bearer' + window.localStorage.getItem('token');

axios.interceptors.request.use(function(config) {
  store.commit('setLoading',true)
  return config;
}, function(error) {
  return Promise.reject(error);
})

//设置响应拦截器
api.interceptors.response.use(function (res) {
  store.commit('setLoading',false)
  return res
},function (error) {
    return Promise.reject(error)
})
