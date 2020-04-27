/**
 * 1.加载http模块
 * 2.创建server对象
 * 3.监听端口，开启服务器
 * 3.注册server的request事件，准备处理浏览器的请求
 */
const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('服务器开启了~~~~~'));
// 注册请求事件，当客户端发来请求的时候，就会触发这个事件
server.on('request', (req, res) => {
    // 请求行、头、体
    // 请求行：请求方式  url
    // 请求头：...
    // 请求体：post方式才有请求体，请求体就是客户端提交的数据

    console.log(req.method);//请求方式：GET  POST
    console.log(req.url);//请求地址： /index.html  /   /api/getbooks
    /**
     * 请求的地址                           获取到的url
     * http://localhost:3000/index.html     index.html
     * http://localhost:3000                /
     * http://localhost:3000/api/getbooks   /api/getbooks
     */

    // 获取请求头  得到一个对象
    console.log(req.headers);



    // 设置响应头和状态码
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.end('你的请求我收到了~~~~~~~~~~');
});