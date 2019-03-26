let http = require("http");
let fs = require("fs");
let url = require("url");

//导入文件
let sliders = require("./index.js");
// 获取轮播图  /sliders
http.createServer((req,res)=>{
    //设置响应头解决跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    //console.log(url.parse(req.url)); 

    let {pathname,query} = url.parse(req.url);
    //根据路由获取图片
    if (pathname === "/sliders") {
        res.setHeader("Content-Type","application/json;charset=utf8");
        res.end(JSON.stringify(sliders));
    }
}).listen(4000);