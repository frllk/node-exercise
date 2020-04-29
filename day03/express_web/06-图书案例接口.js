// -------------------加载所需的模块-------------------
const express = require('express');
const path = require('path');
const fs = require('fs');
// -------------------搭建服务器-------------------
const app = express();
app.listen(3006, () => console.log('服务器启动了~~~~'));

// -------------------编写接口-------------------
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    next();
});


// 获取书籍的接口
app.get('/api/getbooks', (req, res) => {
    // res.set({
    //     'Access-Control-Allow-Origin': '*'
    // });

    res.json({
        status: 200,
        msg: '获取图书成功',
        data: require(path.join(__dirname, 'books.json'))
    });
});
// 添加书籍的接口
app.post('/api/addbook', (req, res) => {
    // 获取请求体
    let data = require(path.join(__dirname, 'books.json'));
    req.body.id = data[data.length - 1].id + 1;
    data.push(req.body);
    fs.writeFile(path.join(__dirname, 'books.json'), JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
            res.json({
                status: 201,
                msg: '添加图书失败',
            });
        } else {
            // res.set({
            //     'Access-Control-Allow-Origin': '*'
            // });
            res.send({
                status: 201,
                msg: '添加图书成功',
            });
        }
    });

});

// 删除书籍的接口
app.get('/api/delbook', (req, res) => {
    // res.set({
    //     'Access-Control-Allow-Origin': '*'
    // });

    let id = req.query.id;
    if (!id)
        res.send({
            status: 500,
            msg: '未指定要删除的图书Id',
        });

    let data = require(path.join(__dirname, 'books.json'));
    data = data.filter(item => item.id != id);//不要用===
    // console.log(data);
    fs.writeFile(path.join(__dirname, 'books.json'), JSON.stringify(data), (err) => {
        if (err) {
            // console.log(err);
            res.json({
                status: 201,
                msg: '删除图书失败',
            });
        } else {
            res.send({
                status: 200,
                msg: '删除图书成功',
            });
        }
    })
});
