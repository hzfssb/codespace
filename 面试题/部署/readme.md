1.npm run build
开发阶段 测试阶段 上线阶段
浏览器只执行js css 我们需要把代码编译成最终文件
dist目录就是前端的要部署的文件目录
vite负责打包
- 将开发目录的index.html拷贝过来
- 首页需要的所有资源，比如：vue-router app.vue home.vue,根据依赖顺序打包成index.js文件
首页就可以运行
- 其他路由页面使用了路由懒加载，他们需要的资源会另外打包成单独的js文件
 - 首页只需要加载index.js和index.html，当路由切换的时候，异步加载相应的js,css文件这就是首屏加载特别快，懒加载的贡献
- dist目录下的文件都是静态资源，可以单独上线
相对于后端来说，只要交给nginx就可以上线
ngginx是高性能的web服务器，

## 服务器准备
1.购买一台服务器，获得公网ip,centos7
2.安装xshell连接服务器，根据宝塔给的centos7的安装教程安装,
获得宝塔远程操作的地址
3.宝塔降低了linux的使用难度，可视化的安装调试服务器
4.通过宝塔的文件上传功能，将dist目录下的静态资源上传到www/wwwroot目录下
5.nginx服务器启动

## 服务器代码（后端代码）
1.安装pm2(node的进程管理工具)
本地运行node index.js(太脆弱)
服务器情况复杂，出了错误，node进程就会挂掉(单线程，一个用户对应一个线程，整个网站都不能提供服务)
2.pm2可以帮我们管理node进程
pm2可以启动node进程，pm2启动的进程，如果挂了，pm2会自动重启
3.koa启用了cors服务器端跨域解决方案
4.nginx默认80端口，pm2默认3000端口
http://47.243.60.20 === http://47.243.60.20:80
ip地址对应我们网络上的一台主机，端口号对应一台主机的一个服务
80端口是默认的web服务端口，nginx服务器默认监听80端口，
