const path = require('path');
// 找字符串中，最后一个点及之后的字符
console.log(path.extname('index.html'));//.html
console.log(path.extname('ase.ewwwef'));//.ewwwef
console.log(path.extname('awe.s.se.eww.wef'));//.wef
// 找文件名
console.log(path.basename('index.html'));//.html
console.log(path.basename('awe/s/se/eww.wef?id=1'));//.wef
