// pages/reading/reading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size: 40
  },

// 缩小字体
  sizedown: function(){
    // console.log('--')
    if( this.data.size > 30){
      this.setData({
        size: this.data.size -= 5
      })
      console.log( this.data.size )
    }else{
      this.setData({
        size: 30
      })
      console.log( this.data.size )
    }
  }, 
  // 增大字体
  sizeup: function(){
    // console.log('++')
    if (this.data.size < 60) {
      this.setData({
        size: this.data.size += 5
      })
      console.log(this.data.size)
    } else {
      this.setData({
        size: 60
      })
      console.log(this.data.size)
    }
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})