const fs = require('fs');
/**
 * 字符串转成数组
 * 遍历数组，把=换成：
 * 把数组再次转成字符串，以\r\n分割
 */
fs.readFile('成绩.txt', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    data = data.replace(/=/g, '：');
    data = data.replace(/\s/g, '\r\n');
    fs.writeFile('成绩ok.txt', data, (err) => {
        if (err) return console.log(err);
        console.log('转换成功');
    });

})