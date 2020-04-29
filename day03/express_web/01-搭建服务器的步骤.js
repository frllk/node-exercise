/**
 * 1、加载express模块
 * 2、创建express服务器
 * 3、开启服务器
 * 4、监听浏览器请求并进行处理
 */
const express = require('express');
// app  application --- 应用
const app = express(); // const server=http.createServer();
app.listen(3006, () => console.log('服务启动了~~~~~'));
app.get('/api/getbooks', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('content-type', 'application/json;charset=utf-8');
    let data = require('./books');
    console.log(data);
    res.end(JSON.stringify(data));
});
app.post('/api/addbook', (req, res) => {

});
app.get('/api/delbook', (req, res) => {

});