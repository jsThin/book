# vue-book

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 一、vue-cli 搭建项目结构
#### 安装  npm install -g @vue/cli
#### 运行  vue init webpack vue-book

## 二、配置基础文件
#### 导入reset.css、border.css等文件
#### 搭建页面架构，配置相关路由

## 三、Tab组件开发
#### 伸缩布局
#### 阿里矢量图标的使用

## 四、Header组件开发
#### 使用插槽，复用组件
#### 

## 五、轮播图
#### vue-awesome-swiper插件 v2.6.7
##### 注意：插件的使用，需要使用vue.use(插件)
#### 使用nodejs搭建mock数据接口 
```
http.createServer((req,res) => {
    //设置响应头解决跨域
    .....
    //导入资源
    let sliders = require('./index.js')
    //获取请求url
    let {pathname,query} = url.parse(req.url);
    //获取轮播图
    if(pathname === '/sliders') {
        res.end(JSON.stringify(sliders))
    }
}).listen(4000)
```
#### 在api中使用axios发送ajax请求获取数据
#### 组件父传子渲染视图
##### 在swiper组件的父组件home中调用api获取数据，传递个子组件


### 六、开发热门图书组件(home-hot)
#### 模拟数据 books.json
#### node fs模块读取文件数据(readFile())
```
function read(callback) {
    fs.readFile('./books.json','utf8',(err,data) => {
        if(err) {
            callback([]);
        }
        callback(JSON.parse(data));
    });
}
```
#### axios设置拦截器，返回res.data
```
axios.interceptors.response.use(function (res) {
    return res.data;
},function (error) {
    return Promise.reject(error);
});
```

### 七、图书列表页开发
#### header组件
#### node写数据接口
#### 写api
#### 前端渲染
#### axios发送delete请求删除图书
#### 删除数据思路
##### 后端---传递id，过滤数组，重新写入文件
##### 前端---过滤数组，或者重新发送请求请求数据()。。。。