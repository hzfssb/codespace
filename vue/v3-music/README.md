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