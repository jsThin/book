import axios from 'axios';

//添加默认请求路径
axios.defaults.baseURL = 'http://localhost:4000';
//设置响应拦截器 筛选返回data部分，简化后续操作
axios.interceptors.response.use(function (res) {
    return res.data;
},function (error) {
    return Promise.reject(error);
});
//获取轮播图
export let getSliders = () => {
    //返回一个promise对象
    return axios.get('/sliders');
}
//获取热门图书信息
export let getHotBooks = () => {
    return axios.get('/hot');
}
  
