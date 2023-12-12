## vue 网易云音乐

- 界面
npm init vite 搭建了开发脚手架
-后台
  netsea

 前后端分离，端口不一样
-先进行npm换源，更快npm config set registry https://registry.npmmirror.com
- npm i -D 开发阶段，上线时不需要（在devDependencies里）npm i -D tailwindcss postcss autoprefixer
 -tailwindcss 60% css开发 原子化css开发
   - npx tailwindcss init -p 初始化工作
      npx 执行安装或未安装的包
   - 声明开发目录下所有层级中，.vue等格式文件支持tailwind   
   -引入tailwind.css
     可以使用tailwind 类名
   - 切页面
   -组件化思维
     -根组件 App.vue
     -layout 组件
        -Menu  
        -Header
  - vite.config.js 是 vite 工程化的配置文件
     - alias 短路径
      用@ -> ./src       
 - 企业级vue开发框架 element-plus pc版
   好多组件 
   vue 是渐进式的MVVM开发框架 开发模式
   element-plus 组件库 找到我们想要的组件  

   -在vite中写了一段让rlrment plus 自动引入的代码
   -通用组件
     /components/common/
     不属于特定的组件，极高的复用性 在项目中可以复用   
   -图标字体库
     -要用到哪些图标
        import {} from '@icon-park/vue-next'  