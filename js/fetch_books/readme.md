# 全栈快速一览

- 前端 http 服务 html/css/js
    5501 web服务

- 后端 接口服务
    url 返回json数据
    3000 端口
- 前后端分离
    json-server 快速把后端数据server启动了
    - npm init -y 变成后端
    - npm i json-server  给个json文件就可以启动数据服务
       db.json 快速的伪造数据
    - package.json
        script
        "dev":"json-server -w db.json"    

- restful api  
    json-server遵守这个规则
    一切皆资源,url的设计规则
    资源展示的方式，restful api 遵守的
    GET  http://localhost:3000/posts   查
    GET  http://localhost:3000/posts/:id
    CRUD 
    post http://localhost:3000/posts  增
    delete http://localhost:3000/posts/3
    patch  改

    为第一篇文章添加一条评论
    -选择相应的请求方法 + 相关的资源路径 + 请求体（options)
    -设计url + 选择方法

    查评论 /posts/:pid/comments/:cid   某篇文章的某条评论s
