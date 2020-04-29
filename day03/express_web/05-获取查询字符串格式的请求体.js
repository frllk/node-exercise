const express = require('express');
const path = require('path');
const app = express();
app.listen(3006, () => console.log('服务启动了~~~'));
/**
 * 获取查询字符串格式的请求体
 * 1、查询字符串格式的请求体    req.body    使用之前需要配置app.use(express.urlencoded({ extended: false }));
 * 2、FormData格式的请求体  ---第三方模块 multer
 */
// 写接口之前，需要配置
app.use(express.urlencoded({ extended: false }));
app.post('/test', (req, res) => {
    // 使用express提供的 req.body来获取请求体
    let params = req.body;
    let data = require('./books');
    data = data.filter(item => item.id == params.id && item.bookname == params.bookname);
    res.send({
        status: 0,
        message: '获取信息成功',
        data
    });
});