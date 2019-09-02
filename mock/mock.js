const Mock = require('mockjs')
Mock.mock('/news/index','get',{
    'list|5': [
        {
            'id|+1': 1,
            'name': '@cname',
            'point': '@integer(2,10)',
            'birthday': '@date',
            'pic': '@image',
            'title': '@title',
            'content': '@cword(100)',
            'ename': '@Last',
            'url' : '@url',
            'ip': '@ip',
            'email': '@email',
            'area': '@region',
            'adress': '@county'
        }
    ]
})
// console.log(JSON.stringify(data,null,2))
Mock.mock('/info/index','post',{
    'book|5': [
        {
            'id|+1': 1,
            'name|2-4': 'zs',
            'phone|11': '2',
            'point|155-200': 0,
            'money|300-400.2': 0,
            'price|100-200.1-4': 0,
            'isTrue|1': true,
            'default|1-2': true,
            'detail|1-3': {'id':1,'date':'2012-03-05','content':'jilu'},

        }
    ]
})