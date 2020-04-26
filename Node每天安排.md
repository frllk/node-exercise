## 第1天

初识Node与内置模块（path、fs、querystring、http）

###  初始Node.js

![1587866896878](C:\Users\Yiim\AppData\Local\Temp\1587866896878.png)



![1587867826196](C:\Users\Yiim\AppData\Local\Temp\1587867826196.png)



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



![1587881330484](C:\Users\Yiim\AppData\Local\Temp\1587881330484.png)



### 命令行中的快捷键

![1587871094137](C:\Users\Yiim\AppData\Local\Temp\1587871094137.png)

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

### querystring

- querystring.parse();  --- 把查询字符串转成对象 
- querystring.stringify() --- 把对象转成查询字符串



## 第2天

http模块，模块化，npm使用

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