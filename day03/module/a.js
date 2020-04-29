// 封装 首字母大写
function ucfirst(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}
// 导出函数
module.exports = ucfirst;