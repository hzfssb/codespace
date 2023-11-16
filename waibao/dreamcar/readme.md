- app和page的概念
  app 全局，和pages共享
    app.js共享 globalData
    app.wxss样式
    app.json 应用的配置
    globalData 如何来到page中
    const app = getApp()
    应用对象
    data 初始化占位符
    {
      data:{
        user{}
      }
    }
   - 生命周期 
   数据来自于后端接口
   onLoad wxml + wxss 显示了
   这是请求数据的最佳时机
  - this.setData({
    user:真正的值
  }) 
  - 页面会热更新 重新绘制{{}}这部分
  -循环输出的概念
   -模板在{{直接输出}}外，数组列表输出的常态
   - block 只承载指令 wx:for
     不会出现在文档流中
     在循环的每一项item都是默认:item.image
     -css架构思路
     -app.wxss全局样式
      -公用的样式
      -模块化
     - page.wxss 页面 业务样式
     - 页面中比较独特的模块，独立css文件
     - 通用组件也可以
     button card 都是组件
     通用的业务：.hero>.content>.header+.sub_header
