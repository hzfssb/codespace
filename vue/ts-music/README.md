# typescript
让前端像java一样写大型项目
vue/react + typescript
-es6
弱类型还是没有，缺点容易出问题
let banners:[int] = [1,2,3]
-typescript 是js 的超集
- 给项目引入前端模型层
   -路由已经不是后端专利，前端也可有
   前端也可以有自己的模型（models），MVVM

 -  UI组件和数据管理的分离
   -store / components|views
   -pinia defineStore('todo', () => {
      return {
         state,
         ...actions

      }
   })  useTodosStore
       -vue ref 
       -这里是唯一请求axios 接口的地方
       -app.use(createPinia())全局挂载
       - 引入这个模块，执行useTodosStore 方法
       该方法执行两次
       const {  banners } = toRefs(useBannerStore());
        const { getBanners } = useBannerStore();

        - vue 项目开发设计模式
          -越复杂的，只要是流程，其实很简单，只需要一本说明书
          -ui组件 + 数据管理
          - 数据的流向，
            backend -> api ->store -> component

          -SPA 
          router -> views->components
          - APP = vue + vuerouter + pinia + ts
          - 写ui组件
            ElementPlus 熟悉  + views + common|components +
            tailwindcss + 组件设计艺术
         - App.vue 一个个组件慢慢搭
         <> defineProps   不要用ts