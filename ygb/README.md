# 易管宝云之家APP轻应用-测试

## 技术栈

- 依赖环境 Node.js 及 NPM 安装器
  
- 项目框架

  项目主要基于 Vue + Vue-Router + Vuex + Webpack 框架搭建，使用 Vue CLI 3 脚手架。
  
  参考：

  Vue 官网 https://cn.vuejs.org

  Vue-Router 地址 https://router.vuejs.org/zh/

  Vuex 地址 https://vuex.vuejs.org/zh/ 

- 其他

  axios 基于 promise 的 HTTP 库 https://www.npmjs.com/package/axios

  register-service-worker pwa缓存 https://github.com/yyx990803/register-service-worker

  Mint UI 基于 Vue.js 的移动端组件库 https://mint-ui.github.io/docs/#/zh-cn2

  vue-photo-preview 基于 photoswipe 的 vue 图片预览插件 https://826327700.github.io/vue-photo-preview/

## 项目依赖安装
  ```bash
  npm install
  ```

## 本地调试
  ```bash
  npm run serve
  ```

## mock模拟
  ```bash
  npm run mock
  ```

## 代码构建及部署

- 构建代码

  ```bash
  npm run build
  ```

- 代码部署

  build后项目会生成一个 dist 文件目录，将该目录部署至生产环境即可。

## 项目大体结构

  ```bash
  .
  ├── mock # mock模拟数据，json文件
  ├── public # 前端静态资源目录（不编译）
  │   ├── css
  │   ├── img
  │   ├── js
  │   ├── favicon.ico # 网站头像（徽标）
  │   ├── index.html # 入口页面
  │   ├── manifest.json # 打包清单文件
  │   └── robots.txt # 搜索引擎收录情况描述
  ├── src # 项目主要代码
  │   ├── api # api 对接后端接口存放文件
  │   ├── assets # 前端资源目录（会编译）
  │   ├── components # 子组件目录
  │   ├── store # 状态管理文件目录
  │   ├── utils # 一些公共js方法存放目录
  │   ├── views # 页面视图文件，主要对应路由
  │   ├── App.vue # 主组件
  │   ├── main.js # 项目构建主入口
  │   ├── registerServiceWorker.js # pwa 缓存
  │   └── router.js # 路由配置文件
  ├── .browserslistrc # 浏览器兼容情况
  ├── .eslintrc.js # eslint 配置文件
  ├── .gitignore.js # git 上传需要忽略的文件格式
  ├── babel.config.js # babel 构建配置文件
  ├── package-lock.json # 版本锁文件（npm 生成）
  ├── package.json # 依赖描述文件
  ├── postcss.config.js # 样式预编译配置
  ├── vue.config.js # 项目配置（手动创建）：包括webpack配置、mock配置等
  └── README.md # 说明文档
  ```

## 页面布局设计标准

- 基于 iPhone 6，7，8

- 1px = 1/50 rem

## 前端 iconfont cdn 地址

  前端 iconfont 文件采用第三方 cdn 储存，访问地址：http://www.iconfont.cn/ 。

  过程： 新建项目 ——> 将图标加入购物车 ——> 添加至项目 ——> 获取在线链接

  将最新的 css、js 的 cdn 地址引入 `./public/index.html` 文件中。

  两种主流引用：

  1. font-class引用（本质上是字体，不支持多色），步骤如下：

    第一步：拷贝项目下面生成的fontclass代码

    //at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
    
    第二步：挑选相应图标并获取类名，应用于页面
      
    <i class="iconfont icon-xxx"></i>

  2. symbol引用（本质上是svg集合，支持多色），步骤如下：

    第一步：拷贝项目下面生成的symbol代码

    //at.alicdn.com/t/font_8d5l8fzk5b87iudi.js

    第二步：加入通用css代码（引入一次就行）
    
    <style type="text/css">
      .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    </style>

    第三步：挑选相应图标并获取类名，应用于页面

    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-xxx"></use>
    </svg>
