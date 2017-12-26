var seed = 0
Page({
  data: {
    cook: ''
  },
  onLoad: function (options) {
    this.setData({
      cook: options.cook
    })
  },
  eat: function () {
    wx.navigateTo({
      url: 'result?seed=' + seed,
      complete: function (res) {
        console.log(res)
      }
    })
  }
})