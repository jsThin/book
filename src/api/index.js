import axios from 'axios';

//添加默认请求路径
axios.defaults.baseURL = 'http://localhost:4000';
//获取轮播图
export let getSliders = () => {
    //返回一个promise对象
    return axios.get('/sliders');
}
  
