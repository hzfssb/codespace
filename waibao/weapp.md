# 小程序外包
- 当下最流行的线上线下结合程序
    外卖app 移动时代的红利，手机

- 小程序 中小商家 扫码拿小程序  线下的实体店，立马线上化，软件化 o2o
  online to online 轻量化，不用安装

  # 汽车4s小程序开发  
  - 商业级别  

  - pages 概念
    -由页面构成
       -wxml等于 html html也是xml的一种 写结构 wexinxml 没有div， 只有view
       对象字面量  json 数据交换标准，xml是早于json的数据交换标准
       <reviewer>
        <name>但总</name>
        <age>18</age>
       </reviewer>
       {
        name:"但总",
        age:18
       }

      - wxss  css
      - js 交互-数据管理 Ajax 网络请求 ，向后端发送
      - json 配置文件
    - app.json
       app开头的都是全局的，是所有的页面共享的  

      
    -切图仔

    -数据驱动界面思想 MVVM
      - 可以在js里配置一个data区域 info
      <view class="bd">
      <text>{{info.model}}</text>
      <text>{{info.price}}</text>
      <image src="{{info.pic}}" mode=""/>
      {{数据绑定 占位符 info.name}}
      wxml 静态页面 模板
      data 模板数据
      页面= 模板 + 数据
      数据改变，模板会重新编译，显示新的页面

    - 优质项目开发思路
       -wxml有着html不具备的组件，image,swiper可以快速实现幻灯片
       看文档
       -css开发，将样式按照原子功能，封装，有利于未来项目的复用
         -当你发现在重复写样式的时候，
            white hero section
            一行或几行css形成一个功能模块
            .sub-header { 副标题
                font-size:;
                line-height:;
                font-family:;
            }      
