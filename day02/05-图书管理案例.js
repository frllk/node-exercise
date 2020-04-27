// 加载所需的模块
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
// 搭建服务器
const http = require('http');
const server = http.createServer();
server.listen(3006, () => console.log('图书管理案例接口服务启动了'));
server.on('request', (req, res) => {
    /**
     * 客户端都会发送什么类型的请求   请求的url
     * get/post
     */
    let method = req.method;
    let url = req.url;

    // 定义书籍 books.json的路径
    let filePath = path.join(__dirname, 'books.json');


    // 判断接口
    if (method === 'GET' && url === '/api/getbooks') {
        // 获取图书的接口
        // 读取文件内容并返回

        // 读取json文件，可以直接使用 require   *****   优化方法
        let data = require(filePath);
        console.log(data);//得到一个数组
        res.writeHead(200, {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({
            status: 200,
            msg: '获取图书成功',
            data: data
        }));
    } else if (method === 'POST' && url === '/api/addbook') {
        // 添加图书的接口
        let str = '';
        /**
         * 1 接收客户端提交的数据
         * 1.1 定义一个空字符串，一会儿把接收到的数据拼接到空字符串中
         * 1.2 注册req的data事件，用于接收客户端提交的数据
         * 当接收到客户端的提交的数据的时候，就会触发这个事件，形参chunk就是接收到的一部分的数据
         * 1.3 注册req的end事件，当完全接收到了客户端的数据之后，会触发
         * 
         * 2 保存到books.json中
         * 3.做出响应
         */
        req.on('data', (chunk) => {
            str += chunk;
        });
        req.on('end', () => {
            console.log(str);//得到完整的数据  
            //bookname = test & author=test & publisher=test
            let old = require(filePath);//得到原来的数据并转为数组
            let newbook = querystring.parse(str);
            newbook.id = Date.now();
            old.push(newbook);
            fs.writeFile(filePath, JSON.stringify(old), (err) => {
                if (err) return console.log(err);
                res.writeHead(200, {
                    'content-type': 'application/json;charset=utf-8',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(JSON.stringify({
                    status: 201,
                    msg: '添加图书成功'
                }));
            });


        });
    } else if (method === "GET" && url === '/api/delbook') {
        // 删除图书接口

    } else {
        // 请求有误，请求了一个不存在的资源
        res.writeHead(200, {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({
            status: 200,
            msg: '请求有误',
            data: null
        }));
    }
});