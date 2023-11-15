// 要一个从app.js到page的桥梁
//微信提供getApp,应用对象
const app = getApp()
Page({
  // 页面的数据
  data: {
    // user: {}
    slides:null,
    entities:null
  },
  // 生命周期
  onLoad() {
    //this -> Page
    console.log(app, '页面显示了')
    // 响应式的页面
    setTimeout(() => {
      this.setData({
        slides:app.globalData.slides,
        entities:app.globalData.vehicles

      })
    },2000)
    
  },
  onReady() {
    console.log('ready Go')
  }
})