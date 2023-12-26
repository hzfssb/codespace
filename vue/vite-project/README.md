# vue3 全家桶  MVVM
- vue 响应式组件开发
   -components
     - common
     -业务组件
   -views/pages
   -UI组件库 element-plus
   - vue-router
   前端有了路由
     SPA (单页应用)快，不需要传统的http request+response
     页面不会白一下
     缺点：SEO搜索引擎优化差一点
     -vuex/pinia   财务
      前端可以管理数据
      -确保数据流的正确性
       数据在组件里叫状态！
      - 将数据与组件剥离，ui组件更加单纯

- vue 项目 数据 从后端到页面显示  经过的所有流程和关键环节 
   todos     
  mysql/mongondb  db/todos table
  sql
  java/node 内存之中 MVC
  router 后端路由control
  res
  http  Get :3000/todos
  axios  http.js index.js getTodoList
  store actions -> mutations -> state
  组件 views/ ->props 传给子组件，确保子组件ui化
  UI Component + State + Router =SPA
  UI Component + State = App

- pinia
   -更简单
   store/todo.js  drfineStore  返回值命名 useTodoStore
   函数返回 state
   import { useTodoStore } from './store/todo.js'
   const { todos } = useTodoStore() //解构
   -更现代
    hooks编程 use开头

   - 将数据和组件分离 

