# react-cnode

### 项目说明

基于 react + react-router + redux + styled-components + ES6 的 React 版 cnode 社区

### Demo

 [Demo](http://xmit.coding.me/react-cnode)

### 项目截图

![screenshot_1](./screenshot/screenshot_01.jpg)
![screenshot_2](./screenshot/screenshot_02.jpg)
![screenshot_3](./screenshot/screenshot_03.jpg)
![screenshot_4](./screenshot/screenshot_04.jpg)

### 项目目录

```
src
├── App.js                            // 根组件
├── common                            // 公共组件
│   ├── auth                          // 鉴权组件
│   │   └── index.js
│   ├── errorPage                     // errorPage组件
│   │   ├── index.js
│   │   └── style.js
│   ├── footer                        // 底部导航组件
│   │   ├── index.js
│   │   └── style.js
│   ├── loading                       // loading组件
│   │   ├── index.js
│   │   └── style.js
│   └── topnav                        // 顶部导航组件
│       ├── index.js
│       └── style.js
├── index.js                          // 入口主文件
├── pages                             // 视图组件
│   ├── create                        // 添加帖子组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js     // 提交 action
│   │   │   ├── actionTypes.js        // 定义的 action types 常量
│   │   │   ├── index.js              // 处理数据
│   │   │   └── reducer.js            // 导出 actionCreators actionTypes reducer
│   │   └── style.js
│   ├── detail                        // 帖子详情组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js
│   │   │   ├── actionTypes.js
│   │   │   ├── index.js
│   │   │   └── reducer.js
│   │   └── style.js
│   ├── header                        // tab组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js
│   │   │   ├── actionTypes.js
│   │   │   ├── index.js
│   │   │   └── reducer.js
│   │   └── style.js
│   ├── login                         // 登录组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js
│   │   │   ├── actionTypes.js
│   │   │   ├── index.js
│   │   │   └── reducer.js
│   │   └── style.js
│   ├── message                       // 消息组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js
│   │   │   ├── actionTypes.js
│   │   │   ├── index.js
│   │   │   └── reducer.js
│   │   └── style.js
│   ├── mine                          // 个人中心组件
│   │   └── index.js
│   ├── replies                       // 回复帖子组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js
│   │   │   ├── actionTypes.js
│   │   │   ├── index.js
│   │   │   └── reducer.js
│   │   └── style.js
│   ├── topic                         // 帖子列表组件
│   │   ├── index.js
│   │   ├── store
│   │   │   ├── actionCreators.js
│   │   │   ├── actionTypes.js
│   │   │   ├── index.js
│   │   │   └── reducer.js
│   │   └── style.js
│   └── user                          // 用户详情组件
│       ├── index.js
│       ├── store
│       │   ├── actionCreators.js
│       │   ├── actionTypes.js
│       │   ├── index.js
│       │   └── reducer.js
│       └── style.js
├── serviceWorker.js
├── statics                           // 静态文件
│   ├── create.png
│   ├── home.png
│   ├── left.png
│   ├── message.png
│   └── mine.png
├── store                             // redux
│   ├── index.js                      // store
│   └── reducer.js                    // 导入各个组件的reducer并合成一个reducer
├── style.js                          // 全局样式
└── utils                             // 工具函数
    └── index.js                      // 格式化时间函数
```

### 功能

```
  - 登录功能
  - 列表分页，查看帖子详情
  - 发表帖子
  - 个人中心
  - 查看其它人的资料
  - 回复帖子、回复帖子下的某个人
```

### 构建应用

``` bash
# 安装依赖
npm install

# 热加载服务运行在 localhost:3000
npm start

# 打包项目（打包完成后项目会存放到build目录下）
npm run build
```
