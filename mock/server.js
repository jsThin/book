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
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    //获取路径 
    let {pathname,query} = url.parse(req.url,true);
    let id = query.id;
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
            //加载更多显示详情页
            let pageSize = 5; //定义每次加载的数量
            if(pathname === '/page') {
                //拿到前台传递的id
                let index = query.index || 0;
                let hasMore = true;
                read(function(books) {
                    let result = books.slice(index,index+pageSize);
                    //当本次请求的数据少于5条时，hasMore设置为false，发送给前台
                    if(result.length < index+pageSize) {
                        hasMore = false;
                    }
                    //发送hasMore及响应数据给前台,books为result的别名
                    res.end(JSON.stringify({hasMore,books:result}));
                });
            }
            //返回某本图书--detail
            if (pathname === '/book') {
                read(function(book) {
                    //book = book.filter(item => item.bookId === id)[0];
                    book = book.find(item => item.bookId === id);
                    if(!book) book = {};
                    res.end(JSON.stringify(book));
                });
            }
            break;
        case 'POST':
            let str2 = "";
            req.on("data",chunck=> {
                str2 += chunck; 
            });
            req.on("end",()=>{
                let book = JSON.parse(str2);
                read(function(books) {
                    //获取id值
                    book.bookId = books.length?books[books.length-1].bookId+1:1001;
                    books.push(book);
                    //写入文件
                    write(books,function() {
                        //向前端返回 
                        res.end(JSON.stringify(book));
                    });
                })
            });
            break;
        case 'PUT':
            let str = '';
            //获取前台发送的数据
            req.on("data",chunck => {
                str += chunck;
            });
            req.on('end',() => {
                //将前端数据转化为json类型
                let book = JSON.parse(str);
                read(function(books) {
                    //遍历books.json文件，如果找到与id匹配的项，
                    //则用前台发来的数据替换，否则返回数据本身
                    books = books.map(item => {
                        if (item.bookId === id) {
                            return book;
                        }
                        return item;
                    });
                    //将新的数据写入books.json文件
                    write(books,function() {
                        res.end(JSON.stringify({}));
                    })
                });
            });
            break;
        case 'DELETE':
            //读取文件原有资源
            read(function(books) {
                //根据id过滤删除的数据
                books = books.filter(item => item.bookId !== id);
                //数据重新写入文件中
                write(books,function() {
                    //删除成功后，遵循规范，向前端返回一个空对象（阮一峰 restful）
                    res.end(JSON.stringify({}));
                });
            });
            break;
    }
}).listen(4000);