## 第1天

初识Node与内置模块（path、fs、querystring、http）

###  初始Node.js

![1587866896878](img\1587866896878.png)



![1587867826196](img\1587867826196.png)



### node使用，使用Node执行JS代码

#### REPL模式（了解）

```base
node
> 这里写js代码
Ctrl+c
Ctrl+c 退出
```

> 这个模式，只适合，执行一些简单的js代码

#### 终端使用node命令执行js文件（推荐）

- vscode打开代码文件夹
- 在文件上右键->在终端中打开
  - 好处是，终端中执行node命令的文件夹，已经定位好了，不用切换文件夹了
- 终端中，`node js文件`，回车



![1587881330484](img\1587881330484.png)



### 命令行中的快捷键

![1587871094137](img\1587871094137.png)

### Node内置模块

path、fs、querystring、http

- fs -- file system 文件系统
  - 读取文件夹
  - 读取文件
  - 创建文件
  - 写入文件
  - ...
- path
- querystring
- http
- ...

### 如何使用内置模块

- 加载模块
  - `const fs=require('fs')`
- 调用模块的方法
  - fs.readFile()
  - fs.writeFile()   
  - ...

### fs模块

- fs.readFile()	--- 异步读取文件
- fs.writeFile()    --- 异步写入文件
- fs.readdir()      --- 异步读取文件夹

### path模块

- path.join(__dirname,'文件名');
  - __dirname 是node内置的全局变量
  - __dirname表示当前js文件所在的路径（绝对路径）
- path.extname() ---找文件的后缀：了解
- path.basename()  ---找文件的文件名；了解 

### querystring

- querystring.parse();  --- 把查询字符串转成对象 
- querystring.stringify() --- 把对象转成查询字符串

![1587890608957](img\1587890608957.png)

## 第2天

http模块，模块化，npm使用

### http模块

#### 搭建服务器的步骤

- 导入http模块
- 创建 web 服务器实例
- 为服务器实例绑定 request 事件，监听客户端的请求
- 启动服务器

```js
/**
 * 导入http模块
 * 创建 web 服务器实例
 * 为服务器实例绑定 request 事件，监听客户端的请求
 * 启动服务器
 */
const http = require('http');
const server = http.createServer();
server.on('request', () => {
    // 处理客户端请求
    console.log('你的请求我收到了~~~')
});
server.listen(3000, () => {
    console.log('my server start work');
})
```

#### 使用http搭建服务器的问题

- 



#### URL的组成

http://www.xxx.com:3000/yyy/zzz?id=123

- 协议
  - http
  - https
- 主机地址（找到服务器）
  - 指向服务器的域名（localhost  永远指向自己的计算机）
  - 服务器的ip地址（127.0.0.1   永远指向自己的计算机）
- 端口
  - 区分服务器上的每个服务的
  - 可以通过 `netstat -on` 查看已经被占用的端口
- 文件路径（/api/getbooks   index.html  /a/b/c/xxx.html）
- 查询字符串部分（Get请求的参数  ）

#### 获取请求相关的信息

```js
// 注册请求事件，当客户端发来请求的时候，就会触发这个事件
server.on('request', (req, res) => {
    // 请求行、头、体
    // 请求行：请求方式  url
    // 请求头：...
    // 请求体：post方式才有请求体，请求体就是客户端提交的数据

    console.log(req.method);//请求方式：GET  POST
    console.log(req.url);//请求地址： /index.html  /   /api/getbooks
    /**
     * 请求的地址                           获取到的url
     * http://localhost:3000/index.html     index.html
     * http://localhost:3000                /
     * http://localhost:3000/api/getbooks   /api/getbooks
     */

    // 获取请求头  得到一个对象
    console.log(req.headers);

    // 设置响应头和状态码
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.end('你的请求我收到了~~~~~~~~~~');
});
```



#### 服务器做出响应

```js
/**
 * 1.加载http模块
 * 2.创建server对象
 * 3.监听端口，开启服务器
 * 3.注册server的request事件，准备处理浏览器的请求
 */
const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('my server running'));
server.on('request', (req, res) => {
    // req request 请求，获取所有与请求相关的信息
    // res response 响应，做出响应以及设置和响应相关的内容

    // // 设置响应头
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // res.setHeader('Author', 'frllk');
    // // 设置响应状态码
    // res.statusCode = 404;

    // 综合性的设置响应状态码和响应头的方法
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8', 'Author': 'frllk' });
    // write方法，也可以设置响应体，但是没有做出响应的意思，只是单纯的设置响应体
    res.write('1234');
    res.write('5678');
    res.write('90');
    // 设置响应体   //做出响应
    res.end('hello，你的请求我收到了');
    // 做出响应之后，不能再有其他代码。
});
```

#### 案例：图书管理案例

##### GET方式的接口

- 提供数据给客户端 （终极目标）
- 具体的获取书籍的接口
  - 读取books.json里面的内容
    - fs.readFile()  --- 读取结果是json格式
    - require()   ---   读取的结果是数组格式
  - 把读取的结果响应给客户端  --- 响应的结果，必须是json字符串格式
  - 遇到的问题
    - 解决跨域的问题   ---   设置响应头
    - 解决编码的问题   ---   设置响应头

##### POST方式的接口

- 接收并保存数据（终极目标）
- 如何接收POST请求体
  - 定义空字符串，比如str
  - 注册req的data事件，用于接收客户端提交的数据
  - 注册req的end事件，当完全接收到了客户端提交的数据，会触发这个事件
- 保存数据
- 做出响应

### npm初步使用

#### 介绍

npm（node package manager）node包管理器。

包是什么？包就是模块

npm这个工具，在安装node的时候，就已经安装到你的计算机了

命令行中执行：node -v 看到版本号，就说明安装成功了

#### 作用

npm作用：管理node模块的工具

- 下载并安装第三方的模块
- 卸载第三方模块
- 发布模块
- 删除已发布的模块
- ...

第三方模块：

- 非内置模块，安装完node，还不能使用的模块，需要从往上下载安装，才能使用的模块
- 第三方模块是个人、公司、组织编写的模块，发布到往上，供我们使用

> npm 就是一个管理（下载安装、卸载......）第三方模块的工具

#### 初始化

使用npm工具之前，必须先初始化

```bash
npm init -y
#或者
npm init  然后一路回车
# 初始化之后，会在文件夹中出现一个package.json文件
```

#### 安装卸载项目模块

下载安装第三方模块

```js
npm install 模块名
npm i 模块名
```

卸载第三方模块

```js
npm uninstall 模块名
npm un 模块名
```

#### 关于项目模块的说明

![1587974084334](img\1587974084334.png)

#### 演示



#### 全局模块

- 全局安装的模块，不能通过 `require()` 加载使用。
- 全局安装的模块，一般都是命令或者工具
- 安装方法，在安装模块的命令后面，加 `-g`

```bash
npm i 模块名 -g
#或者
npm i -g 模块名
```

- 卸载方法（也是多个  `-g`）

```bash
npm un 模块名 -g
```

- 全局安装的模块，在系统盘（c盘）
  -  通过命令`npm root -g` 可以查看全局安装路径

#### 全局安装nodemon模块

- 安装命令	

  ```bash
  npm i nodemon -g
  ```

- nodemon的作用：

  - 代替node命令，启动服务的，当更改代码之后，nodemon会自动帮我们重启服务

- 运行nodemon，如果报错如下：

- 解决办法是：

  - `管理员`方式，打开命令行窗口
  - 执行`set-ExecutionPolicy RemoteSigned;` 
  - 在出现的选项中，输入`A`，回车即可



#### 更改镜像源

镜像源，就是下载安装第三方模块的网站。

下载的第三方模块都是从国外的npm主站下载的，速度笔记慢

淘宝在国内对npm上的第三方模块做了一个备份，也就是说，我们可以从国内下载第三方模块。

除了淘宝外，还有很多镜像源。

简单的更改镜像源方法：

- 全局安装一个  `nrm`  的模块
  - nrm  用于管理镜像源
- 使用nrm
  - `nrm ls`通过这个命令，查看可用的镜像源
  - `nrm use taobao`，切换下载模块的网站为淘宝

![1587977826688](C:\Users\Yiim\AppData\Local\Temp\1587977826688.png)

### 模块化





## 第3天

express框架，写接口、路由

## 第4天

MySQL

## 第5天

MySQL、Promise

## 第6天

身份认证方式（cookie、session、jwt）

## 第7天

项目

## 第8天

项目

## 第9天

项目