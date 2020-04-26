/**
 * path --  路径
 * path.join(路径1，路径2...)   方法会把给出的路径拼接到一起
 */
const path = require('path');
// console.log(path.join('a', 'v', 'c'));
// console.log(path.join('a', '/b/', 'c'));
// console.log(path.join('a', '../b', 'c'));//b\c
// console.log(path.join('a', 'b', 'c', 't.html'));
// console.log(path.join('a', 'b', '../c', 't.html'));
console.log(__dirname);//node自带全局变量，表示当前js文件所在的绝对路径
// 拼接路径---------最常用的---------
console.log(path.join(__dirname, '成绩.txt'));