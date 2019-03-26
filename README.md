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

### 六、开发热门图书


