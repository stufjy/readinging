// pages/detail/detail.js
// 初始化数据库
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookID: '',  //存储书本ID
    bookDetail: []  //保存书本数据
  },

  // 跳转阅读界面
  jumpreading: function(){
    wx.navigateTo({
      url: '/pages/reading/reading',
    })
  },
  // 添加至集合books中
  insert: function(){
    db.collection( 'books' ).add({
      data: {
        book : this.data.bookDetail
      }
    }).then( res => {
      // console.log( res )
      wx.showToast({
        title: '添加成功',
      })
    }).catch( err => {
      console.log( err )
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log( options.id );
    this.setData({  
      bookID: options.id   //将父组件传递过啦的bookid保存到bookID中
    });
    // 显示加载框
    wx.showLoading({
      title: '请求中',
    });
    // 调用云函数
    wx.cloud.callFunction({
      name: "getDetail",  //云函数名称
      data: {
        bookKeyID: this.data.bookID  //传递的数据
      }
    }).then( res => {   //成功回调
      var obj = JSON.parse(res.result)    //接收数据 将字符串转为对象
      // console.log( obj )
      this.setData({
        bookDetail: obj   //将获取的数据 保存到bookDetail中
      })
      wx.hideLoading();  //隐藏加载框
      console.log( this.data.bookDetail )
    }).catch( err => {  //失败回调
      console.log( err );
      wx.hideLoading();   //隐藏加载框
    })
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