# vueH5Demo
用`Vue3+Vue-Cli+Vant3`构建一个适配750px设计稿的移动端H5项目
# 用`Vue3+Vue-Cli+Vant3`构建一个适配750px设计稿的移动端H5项目
## 前言
**如果需要用Vite封装，推荐看这篇，写得很好很详细：**
[【从入门到提桶】vue3.2 + vite + vant + pinia + ts 移动端 h5 项目新手实践 - 掘金 (juejin.cn)](https://juejin.cn/post/7134610733962100750)<br>
之前封装模板的时候，这篇文章给了很大帮助，也推荐给大家：[搭建一个vue-cli4+webpack移动端框架（开箱即用） - 掘金 (juejin.cn)](https://juejin.cn/post/6844904152389124103)

## 一.环境检查
`node、 npm 、vue 、vue-cli`安装教程：[最详细的vue安装教程_一只野生程序媛的博客-CSDN博客_vue安装](https://blog.csdn.net/Smile_Sunny521/article/details/89714388)

### 1.检查`node`版本

**node简介:**

- Node.js 就是运行在服务端的 JavaScript。

- Node.js 是一个基于 Chrome JavaScript 运行时建立的一个平台。

- Node.js 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。

参考文档：[Node.js 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/nodejs/nodejs-tutorial.html)

```c
node -v
```

### 2.检查npm版本

**npm简介：**`npm` 是 Node.js 标准的软件包管理器。

参考文档：[npm 包管理器简介 (nodejs.cn)](http://nodejs.cn/learn/an-introduction-to-the-npm-package-manager)

```
npm -v
```

### 3.检查vue版本

vue简介：`Vue` (发音为 /vjuː/，类似 `view`) 是一款用于构建用户界面的 JavaScript 框架。

参考文档：[简介 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/introduction.html)

```
npm list vue -g
```

### 4，检查Vue-Cli版本

**Vue CLI 简介**：Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统

参考文档：[Home | Vue CLI (vuejs.org)](https://cli.vuejs.org/zh/#起步)

```c
npm install -g @vue/cli //安装
vue -V	//版本查看
```

*注：Vue CLI 现已处于维护模式! 现在官方推荐使用 [`create-vue`](https://github.com/vuejs/create-vue) 来创建基于 [Vite](https://cn.vitejs.dev/) 的新项目。 另外请参考 [Vue 3 工具链指南](https://cn.vuejs.org/guide/scaling-up/tooling.html) 以了解最新的工具推荐。*


## 二.构建

### 1.创建项目Vue3

```c
vue create sdemo
```

![vueInit.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ce35ad4f2fe4ce58d8396cb81eb9117~tplv-k3u1fbpfcp-watermark.image?)

```
Manually select features
//自定义选项
```

很详细：[创建Vue3项目详细步骤 - 掘金 (juejin.cn)](https://juejin.cn/post/7125706061448740878)

## 三.配置

新建好的项目结构如下：


<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4430a7b0a9794357bfced61133839bcf~tplv-k3u1fbpfcp-watermark.image?" alt="demoDir.jpg" width="100%" />

### 1.引入`Vant`

`Vant`组件官方文档：[Vant 3 - 轻量、可靠的移动端组件库 (gitee.io)](https://vant-contrib.gitee.io/vant/#/zh-CN)

这是一个Vue3项目，安装方式如下：

```
npm i vant
```

按需引入所需组件，在文件`main.js`中添加，示例：

```javascript
import { NavBar,Tabbar, TabbarItem } from 'vant';
const app = createApp();
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
```

### 2.移动端适配

#### （1）安装`postcss-pxtorem`

作用：generates rem units from pixel units.（`px`转换为`rem`）

```
npm install postcss postcss-pxtorem --save-dev
```

参考：[postcss-pxtorem - npm (npmjs.com)](https://www.npmjs.com/package/postcss-pxtorem)

引入`postcss-pxtorem`

1. 新建文件`postcss.config.js`（与`package.json`同一目录下）
2. 适配750设计稿，且需适配`Vant`，`postcss.config.js`内容如下：

```js
// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};

```

参考：[进阶用法 - Vant 3 (gitee.io)](https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei)

#### （2）安装`amfe-flexible`

作用：Use [postcss-adaptive](https://www.npmjs.com/package/postcss-adaptive).（配置可伸缩布局方案）

```
npm i -S amfe-flexible
```

参考：[postcss-pxtorem - npm (npmjs.com)](https://www.npmjs.com/package/postcss-pxtorem)，[amfe-flexible - npm (npmjs.com)](https://www.npmjs.com/package/amfe-flexible)

引入`amfe-flexible`

```js
//main.js 中添加
import 'amfe-flexible/index.js'
```

#### （3）去除白边

在`App.vue`中添加`css`代码

```css
html,
body {
  margin:0 !important;
}
```

### 3.配置开发、生产、测试环境

#### （1）根目录新建`.env.dev .env.production .env.test`


![env.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2bc8de6743f84c089f062108b9051ba6~tplv-k3u1fbpfcp-watermark.image?)

```js
//.env.dev
NODE_ENV='development'
# must start with VUE_APP_
VUE_APP_ENV = 'development'
```

```js
//.env.production
NODE_ENV='production'
# must start with VUE_APP_
VUE_APP_ENV = 'production'
```

```js
//.env.test
NODE_ENV='test'
# must start with VUE_APP_
VUE_APP_ENV = 'test'
```



#### （2）在`src`文件夹里新建文件夹`config`

在`config`文件夹里新建`js`文件：env.development.js  env.production.js   env.test.js  index.js，分别对应开发、测试、生产、目录切换。

**建议所有生产测试开发不同的参数都写在前三个文件夹里。**

env.development.js / env.production.js  / env.test.js 文件内容如下：

```js
export const API = 'https://xxxx';
export const iv = 'xxxx';
export const PUBLIC_KEY = 'xxx';
```

index.js文件内容如下：

```js
const config = require('./env.' + process.env.VUE_APP_ENV)
module.exports = config
```

#### （3）新建命令

```json
 "scripts": {
    "serve": "vue-cli-service serve --mode dev",
    "build": "vue-cli-service build --mode production",//打生产包
    "build:dev": "vue-cli-service build --mode dev", //打测试包
  },
```



### 4.封装`axios`

`axios`详细文档：[起步 | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/docs/intro)

这两篇写得很好，推荐：

[前端架构带你 封装axios，一次封装终身受益「美团后端连连点赞」 - 掘金 (juejin.cn)](https://juejin.cn/post/7124573626161954823)

[十分钟封装一个好用的axios，省时又省力他不香吗 - 掘金 (juejin.cn)](https://juejin.cn/post/7090889657721815076)

#### （1）安装`axios`

```js
//安装指定版本
npm install axios@0.26.0 --save

//或者安装最新版
npm install axios
```

#### （2）封装请求函数

在`src`文件夹下新建文件夹`api`和文件夹`utils`，`api`文件夹下放不同的`js`文件，每个`js`文件里写不同模块的接口，`utils`文件夹下新建`request.js`

### 5.设置`eslint`忽略

根目录新建`.eslintignore`，文件里添加需要忽略的文件即可

```javascript
//举例
src/utils/request.js
```

### 6.调试打印

#### （1）开发环境配置`Vconsole`控制台

文档：[vConsole: 一个轻量、可拓展、针对手机网页的前端开发者调试面板 (gitee.com)](https://gitee.com/Tencent/vConsole)

```js
//安装
npm install vconsole
```

安装成功后在`main.js`中添加如下代码：

```js
//main.js
import Vconsole from 'vconsole';

if(process.env.VUE_APP_ENV === 'development'){//开发环境打开Vconsole
    new Vconsole()
}
```

#### （2）生产环境去除`console.log`

```js
//安装
npm install babel-plugin-transform-remove-console --save-dev
```

安装成功后在`babel.config.js`中添加如下代码：

```js
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {//生产环境去除console.log
	prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
		...prodPlugins
	]
}
```

### 7.配置路由

#### （1）配置路由守卫

很详细：[vue-router | 你该了解的路由守卫（导航守卫） - 掘金 (juejin.cn)](https://juejin.cn/post/7139932176141893669)

官方文档：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html

在`main.js`中添加如下代码

```js
//main.js
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
})
```

#### （2）配置路由缓存与动效

参考：[从 Vue2 迁移 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/migration/index.html#router-view-、-keep-alive-和-transition)

参考：[vue3中使用keep-alive - 掘金 (juejin.cn)](https://juejin.cn/post/6978772143748153381#heading-4)

参考：[用了很多动效，介绍 4个很 Nice 的 Vue 路由过渡动效！ - 掘金 (juejin.cn)](https://juejin.cn/post/6951540864787152927#heading-2)

`App.vue`添加如下代码：

```html
<template>
  <router-view v-slot="{ Component,route }">
    <!-- 使用任何自定义过渡和回退到 `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <!-- 最多缓存10个，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉 -->
      <keep-alive :max="10">
        <component :is="Component" :key="route.path" v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>

    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" :key="route.path" v-if="!$route.meta.keepAlive" />
    </transition>
  </router-view>
</template>
```

`assets`文件夹下新建文件夹`css`,`css`文件夹下新建`transition.scss`(保存路由切换样式)

`transition`参考文档:[过渡|维.js (vuejs.org)](https://vuejs.org/guide/built-ins/transition.html#transition-between-components)

在`App.vue`引入：

```css
@import url('./assets/css/transition.scss');
```

### 8.配置`vue.config.js`

`configureWebpack` 与 `chainWebpack` 本质上没有什么区别，只是前者配置 **简单方便**，后者可以 **更为细粒度地控制配置**

#### （1）配置热更新与Proxy代理

```js
 devServer: {
    hot: true, //配置热更新
    port: 8081, // 端口号
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://xxxx',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
```

#### （2）配置自动引入组件

这篇写得很好：[尤大推荐的神器unplugin-vue-components,解放双手!以后再也不用呆呆的手动引入(组件,ui(Element-ui)库,vue hooks等) - 掘金 (juejin.cn)](https://juejin.cn/post/7012446423367024676)

```
npm i unplugin-vue-components -D
```

#### （3）配置开发环境`sourceMap`

```js
configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
},
```

完整配置如下：

```js
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const NODE_ENV = process.env.NODE_ENV;
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: `dist/${NODE_ENV}`,
  publicPath: './',
  indexPath: 'index.html',
  productionSourceMap: process.env.NODE_ENV === 'development',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  // devServer: {
  //   hot: true //配置热更新
  // },
  devServer: {
    hot: true, //配置热更新
    port: 8081, // 端口号
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://xxxx',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
})
```

### 9.代码分析

`Vue-Cli`自带代码分析：[CLI 服务 | Vue CLI (vuejs.org)](https://cli.vuejs.org/zh/guide/cli-service.html#vue-cli-service-build)

```json
 "scripts": {
    "serve": "vue-cli-service serve --mode dev",
    "build": "vue-cli-service build --mode production",
    "build:dev": "vue-cli-service build --mode dev",
    "lint": "vue-cli-service lint",
    "build:report": "vue-cli-service build --report"
  },
```

### 10.封装常用函数

#### （1）安全获取随机数

```js
function getRandomInt(min, max) {//安全获取随机数 [min,max]闭区间    
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}
```

#### （2）获取连接后参数

```js
export function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```


