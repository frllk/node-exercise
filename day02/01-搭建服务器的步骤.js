/**
 * 1.导入http模块
 * 2.创建 web 服务器实例
 * 3.为服务器实例绑定 request 事件，监听客户端的请求
 * 4.启动服务器
 */
const http = require('http');
const server = http.createServer();
server.on('request', () => {
    // 处理客户端请求
    console.log('你的请求我收到了~~~')
});
server.listen(3000, () => {
    console.log('my server start work');
})