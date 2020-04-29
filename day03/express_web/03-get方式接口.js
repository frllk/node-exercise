const express = require('express');
const app = express();
app.listen(3006, () => console.log('启动了~~~~~~'));
/**
 * 正常接口
 * 不写名称的接口 
 * 不存在的接口
 */
// app.get(接口地址，处理函数)
app.get('/test', (req, res) => {
    res.send('这是 test接口响应的结果');
});
// 如果请求的地址是http://localhost:3006
app.get('/', (req, res) => {
    res.send('默认接口');
});
// 其他不存在的接口
app.get('*', (req, res) => {
    res.send('sorry,你请求了一个不存在接口');
});