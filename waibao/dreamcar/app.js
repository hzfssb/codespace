// 应用
// page()页面

App({
  globalData: {
   
  },
  onLaunch() {
    //在应用启动时，发送接口请求
    // console.log('应用启动了')
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        console.log(response)
        Object.assign(this.globalData,
          response.data)
          // console.log(this,'-----');
      }
    })
  }

})