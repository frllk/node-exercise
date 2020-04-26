/**
 * 1.读取原始的 index.html
 * 2.找到css，保存到clock/index.css
 * 3.找到js，保存到clock/index.js
 * 4.把原始的 index.html 中 style替换成link
 * 5.把原来的 index.html 中 script替换成外链方式
 */
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
    if (err) return console.log(err);
    let cssArray = /<style>([\s\S]+)<\/style>/.exec(data);
    // 1.保存css代码
    fs.writeFile(path.join(__dirname, 'clock/index.css'), cssArray[1], (err) => {
        if (err) return console.log(err);
        console.lor('css保存成功');
    });

    // 2.保存js
    let jsArray = /<script>([\s\S]+)<\/script>/.exec(data);
    // 保存css代码
    fs.writeFile(path.join(__dirname, 'clock/index.js'), jsArray[1], (err) => {
        if (err) return console.log(err);
        console.log('js保存成功');
    });
    // 3.替换
    data = data.replace(/<style>([\s\S]+)<\/style>/, '<link rel="stylesheet" href="./index.css">');
    data = data.replace(/<script>([\s\S]+)<\/script>/, '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, 'clock/index.html'), data, (err) => {
        if (err) return console.log(err);
        console.log('html保存成功');
    });

})