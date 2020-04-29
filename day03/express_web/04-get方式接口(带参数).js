const express = require('express');
const path = require('path');
const app = express();
app.listen(3006, () => console.log('服务启动了~~~'));

app.get('/test', (req, res) => {
    let data = require('./books');
    let query = req.query;
    data = data.filter(item => item.id == query.id && item.bookname == query.bookname);
    res.send({
        status: 200,
        message: '获取信息成功',
        data: data
    })
});
app.get('/test/:id', (req, res) => {
    let data = require(path.join(__dirname, 'books.json'));
    let params = req.params;
    data = data.filter(item => item.id == params.id);
    res.send({
        status: 200,
        message: '获取信息成功',
        data: data
    })
});

app.get('/test/:id/:bookname', (req, res) => {
    let data = require(path.join(__dirname, 'books.json'));
    let params = req.params;
    data = data.filter(item => item.id == params.id && item.bookname == params.bookname);
    res.send({
        status: 200,
        message: '获取信息成功',
        data: data
    });
});
app.get('/', (req, res) => {
    res.send('默认信息');
});
app.get('*', (req, res) => {
    res.send('请求了一个不存在的接口');
});