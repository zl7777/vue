# day10

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



1.下载一个vue-router
2.新建一个router文件夹,在这个文件夹下边新建一个index.js(路由的配置文件)
- 引入vue
- 引入vue-router
- use注册路由
- 配置路由信息,routers:[{path:'/',component:''}]  
- 把配置的路由信息挂载到实例
- 抛出实例
3.在main.js里面,挂载路由实例
4.<router-view></router-view>//输出视图,他是vue-router的一个内置的组件,需要先注册一下vueRouter
    <router-link to='/'>首页</router-link>//跳转路由   必须有一个to属性,解析后默认是一个a标签
5.路由模式  通过mode:    hash模式(默认)  history模式   设置