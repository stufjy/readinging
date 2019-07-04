// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyID: '活着',
    detail: []
  },

// 跳转至详情页
  jumpdetail: function( e ){
    var id = e.target.dataset.bookid;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  // 获取输入框里的值
  keyIDchange: function( e ) {
    // console.log( e.detail )
    if( e.detail ){
      this.setData({
        keyID: e.detail
      })
    }else{
      // 当搜索框里的值为空的时候,清空detail
      this.setData({
        detail: []
      })
    }
  },
  // 搜索
  searchClickEvent: function( e ){
    wx.showLoading({  //显示加载框
      title: '亲,请不要急哦',
    })
    wx.cloud.callFunction({  //调用云函数
      name: 'booksearch',
      data: {
        start: this.data.detail.length,
        count: 10,
        myKeyID: encodeURIComponent( this.data.keyID )  //中文转URL码
      }
    }).then( res =>{    //成功回调
      var obj = JSON.parse( res.result )    //接收数据 将字符串转为对象
      this.setData({
        detail: this.data.detail.concat( obj.books )  //将数据追加
      })
      // console.log(this.data.detail)
      // console.log( res )
      wx.hideLoading(); //隐藏加载框
    }).catch( err => {  //失败回调
      console.log(err)
      wx.hideLoading(); //隐藏加载框
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.searchClickEvent();
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
    this.searchClickEvent()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})