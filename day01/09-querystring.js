const querystring = require('querystring');
let str = 'id=69194&bookname=红楼梦&author=aaa';
/**
 * 把查询字符串转成对象
 * 把对象转成查询字符串
 */
let obj = querystring.parse(str);
console.log(obj);

console.log(querystring.stringify(obj));