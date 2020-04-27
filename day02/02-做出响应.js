/**
 * 1.加载http模块
 * 2.创建server对象
 * 3.监听端口，开启服务器
 * 3.注册server的request事件，准备处理浏览器的请求
 */
const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('my server running'));
server.on('request', (req, res) => {
    // req request 请求，获取所有与请求相关的信息
    // res response 响应，做出响应以及设置和响应相关的内容

    // // 设置响应头
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // res.setHeader('Author', 'frllk');
    // // 设置响应状态码
    // res.statusCode = 404;

    // 综合性的设置响应状态码和响应头的方法
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8', 'Author': 'frllk' });
    // write方法，也可以设置响应体，但是没有做出响应的意思，只是单纯的设置响应体
    res.write('1234');
    res.write('5678');
    res.write('90');
    // 设置响应体   //做出响应
    res.end('hello，你的请求我收到了');
    // 做出响应之后，不能再有其他代码。
});