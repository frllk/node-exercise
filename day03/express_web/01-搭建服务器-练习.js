/**
 * 1、加载express模块
 * 2、创建express服务器
 * 3、开启服务器
 * 4、监听浏览器请求并进行处理
 */
const express = require('express');
const app = express();
app.listen(3006, () => console.log('服务启动了~~~'));
app.get('/api/getbooks', (req, res) => {
    let data = require('./books');
    res.setHeader('content-type', 'application/json;charset=utf-8');
    res.end(JSON.stringify(data));
});