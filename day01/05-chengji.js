const fs = require('fs');
const path = require('path');
/**
 * 字符串转成数组
 * 遍历数组，把=换成：
 * 把数组再次转成字符串，以\r\n分割
 */
fs.readFile(path.join(__dirname, '成绩.txt'), 'utf-8', (err, data) => {
    if (err) return console.log(err);
    let arr = data.split(' ');
    let newArr = [];
    arr.forEach(item => {
        newArr.push(item.replace('=', '：'));
    });
    console.log(newArr);
    let newStr = newArr.join('\r\n');
    fs.writeFile(path.join(__dirname, '成绩ok.txt'), newStr, (err) => {
        if (err) return console.log(err);
        console.log('写入成功');
    });

})