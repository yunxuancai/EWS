// ews/share/share.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    SharePic1: '',
    SharePic2: '',
    SharePic3: '',
    ShareLogo: 'http://ac-F5oAdPIS.clouddn.com/85011b030771c943fca1.png',
    LeftBar: 'http://ac-F5oAdPIS.clouddn.com/a203ac2f9f5fb2c8b331.png',
    Bar: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    console.log('hello');
    console.log(app.globalData.clickCount);
    var Bar = [];
    for (var i = 0 ; i < 8 ; i++) {
      Bar[i + 1] = 10 + Math.min(app.globalData.clickCount[i],10) * 14
    }
    that.setData({
      Bar : Bar
    })
    console.log(Bar);
    that.setData({
      SharePic1: app.globalData.SharePic1,
      SharePic2: app.globalData.SharePic2,
      SharePic3: app.globalData.SharePic3
    })
    wx.showShareMenu({
      withShareTicket: true
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '一个人也要好好吃饭哦',
      path: '/ews/home/home',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})