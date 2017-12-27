// var seed = 0
// Page({
//   data: {
//     cook: ''
//   },
//   onLoad: function (options) {
//     this.setData({
//       cook: options.seed
//     })
//   },
//   eat: function () {
//     wx.navigateTo({
//       url: 'result?seed=' + seed,
//       complete: function (res) {
//         console.log(res)
//       }
//     })
//   }
// })
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})
