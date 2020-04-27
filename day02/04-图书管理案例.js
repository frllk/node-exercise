// 加载所需的模块
const fs = require('fs');
const path = require('path');
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
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) return console.log(err);
            res.writeHead(200, {
                'content-type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            console.log(JSON.parse(data));
            let books = {
                status: 200,
                msg: '获取书籍成功',
                data: JSON.parse(data)//把内容转为数组，不然转为字符串的时候有换行符
            }
            res.end(JSON.stringify(books));
        });

    } else if (method === 'POST' && url === '/api/addbook') {
        // 添加图书的接口

    } else if (method === "GET" && url === '/api/delbook') {
        // 删除图书接口

    } else {
        // 请求有误，请求了一个不存在的资源

    }
});