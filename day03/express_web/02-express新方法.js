const express = require('express');
const path = require('path');
const app = express();
app.listen(3006, () => console.log('服务启动了~~~'));
/**
 * express 提供的新方法
 * send()   做出响应，参数是响应体，会自动JSON.stringify()
 * sendFile()   做出响应  参数是一个文件（绝对）路径，会自动读取文件的内容
 * json()   专门用于响应json数据的方法
 * jsonp()  
 * set()    和res.writeHead()一样 
 * 
 * 
 * 
 */
app.get('/test', (req, res) => {
    // res.send(); --- 做出响应，参数是响应体
    // res.send('hello，我是服务器');//会自动设置响应头
    // res.send(['aaa', 'bbb', 'ccc']);//  end() 会报错，只能是字符串，send()会自动JSON.stringify()

    // res.sendFile(path.join(__dirname, 'books.json'));

    // res.json({
    //     status: 0,
    //     message: '添加成功'
    // });
    res.set({
        'Author': 'frllk'
    });
    res.send('看看响应头');

});