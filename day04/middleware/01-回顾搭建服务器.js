/**
 * 加载express
 * 创建app对象
 * 监听端口，开启服务
 * 【可选】配置
 * 编写接口
 *  get方式接口
 *  post方式接口
 */
const express = require('express');
const app = express();
app.listen(3006, () => console.log('服务器启动了~~~'));
// get
// post
