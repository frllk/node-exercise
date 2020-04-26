/**
 * 使用node的模块，需要先加载模块
 * const fs=require('fs')
 * 调用模块的方法完成工作
 * fs.readFile()  fs.writeFile()
 */
const fs = require('fs');
fs.writeFile('1.txt', 'scvbnm,rtyuikw', (err) => {
    if (err) console.log(err);
    else
        console.log('写入成功');
});

