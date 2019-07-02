//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'web-test-02-lx3km'
      })
    }

    this.globalData = {}

    // 右上角红点
    wx.showTabBarRedDot({
      index: 2,
    })
  }
})
