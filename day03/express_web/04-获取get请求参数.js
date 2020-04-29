const express = require('express');
const app = express();
app.listen(3006, () => console.log('启动了~~~~~~'));

/**
 * 参数：
 * 1.查询字符串形式     req.query
 * 2.动态参数(:id)      req.params
 */

app.get('/test', (req, res) => {

    console.log(req.query);// 使用req.query,可以获取到请求参数
    res.send('哈哈哈，收到请求了~');
});
app.get('/test/:id/:name/:age', (req, res) => {
    console.log(req.params);//获取动态请求参数
    res.send('获取动态参数演示');
})