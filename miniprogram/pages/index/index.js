// pages/index/index.js
// 初始化数据库
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: [] //保存小说数据
  },

  // 删除书
  deletbook: function( e ){
    // wx.showModal({
    //   title: '确定删除',
    //   success( res ){
    //     if( res.confirm ){
          var id = e.target.dataset.bookid;
          db.collection( "books" ).doc( id ).remove().then(res => {
            // console.log(res);
            this.onShow();
            wx.showToast({
              title: '删除成功',
            })
          }).catch(err => {
            console.log(err);
          })
    //     }else if( res.cancel ){
    //       console.log( "quxiao" )
    //     }
    //   }
    // })
  },
  // 跳转阅读页面
  reading(){
    wx.navigateTo({
      url: '/pages/reading/reading',
    })
  },
  // 从集合中请求数据
  again: function(){
    db.collection( 'books' ).get({  //创建连接
      success: res => {   // 成功回调
        console.log( res.data );
        this.setData({    // 将响应的数据添加到book中
          book: res.data
        })
        wx.hideLoading()
      },
      fail: err => {    //失败回调
        console.log(err);
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '亲,请不要急哦',
    })
    this.again()
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
    this.again()
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