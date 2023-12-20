# 路由
服务端用于描述路径（url）的

前端借鉴路由的称呼来描述，url和代码片段（组件）的映射关系

# 实现路由需解决的问题
如何修改url,使浏览器不刷新 +#  hash值
如何知道url变化了


# hash
在浏览器url后拼接#xxx 会被认为是hash值，而hash值的变更，是不会引起浏览器页面的刷新的


- 修改url的方式
1.a标签
2.浏览器的前进和后退
3.window.location
以上方式导致url变更，都会触发hashchange事件

# history
history 提供了一个pushState 方法，可以修改url且不引起页面刷新，提供了popstate
事件，仅当浏览器前进后退时生效