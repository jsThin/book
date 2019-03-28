let http = require("http");
let fs = require("fs");
let url = require("url");
//导入js文件(轮播图)
let sliders = require("./index.js");

//封装方法，读取文件数据
function read(callback) {
    fs.readFile('./books.json','utf8',(err,data) => {
        if(err) {
            callback([]);
        }
        callback(JSON.parse(data));
    });
}
//封装方法，写文件
function write(data,callback) {
    //写入文件的格式为string
    fs.writeFile('./books.json',JSON.stringify(data),callback);
}

http.createServer((req,res)=>{
    //设置响应头解决跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    //获取路径 
    let {pathname,query} = url.parse(req.url,true);
    //判断是何种请求
    if(req.method === 'OPTIONS') return res.end("");
    switch(req.method) {
        case 'GET':
            //返回轮播图片
            if (pathname === "/sliders") {
                res.setHeader("Content-Type","application/json;charset=utf8");
                res.end(JSON.stringify(sliders));
            }
            //返回热门图书信息
            if (pathname === '/hot') {
                read(function(hotBooks) {
                    hotBooks = hotBooks.reverse().slice(0,5);
                    res.end(JSON.stringify(hotBooks));
                });
            }
            //返回所有图书信息
            if (pathname === '/allbooks') {
                read(function(books) {
                    //向前台发送数据
                    res.end(JSON.stringify(books));
                });
            }
            //返回某本图书--detail
            if (pathname === '/book') {
                read(function(book) {
                    //book = book.filter(item => item.bookId === query.id)[0];
                    book = book.find(item => item.bookId === query.id);
                    if(!book) book = {};
                    res.end(JSON.stringify(book));
                });
            }
            break;
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'DELETE':
            //读取文件原有资源
            read(function(books) {
                //根据id过滤删除的数据
                books = books.filter(item => item.bookId !== query.id);
                //数据重新写入文件中
                write(books,function() {
                    //删除成功后，遵循规范，向前端返回一个空对象（阮一峰 restful）
                    res.end(JSON.stringify({}));
                });
            });
            break;
    }
}).listen(4000);