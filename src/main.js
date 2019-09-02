// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueQuillEditor from 'vue-quill-editor'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import '../static/UEditor/ueditor.config.js'
import '../static/UEditor/ueditor.all.min.js'
import '../static/UEditor/lang/zh-cn/zh-cn.js'
import '../static/UEditor/ueditor.parse.min.js'
require('../mock/mock.js')
import store from './vuex/store.js'
import 'iview/dist/styles/iview.css';
import iView from 'iview';
Vue.use(iView);
Vue.config.productionTip = false
//使用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueQuillEditor, /* { default global options } */)

// 导入 css
import 'vue-easytable/libs/themes-base/index.css'

// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'vue-easytable'

// 将组件注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
