var seed = 0
Page({
  data: {
    cook: '',
    fileSrc: 'http://bpic.588ku.com/element_origin_min_pic/00/94/26/5156f2bf3f135c0.jpg',
    opacity: 0
  },
  onLoad: function (options) {
    this.setData({
      cook: options.cook
    })
    seed = 0;
    var fileSrc1 = this.data.cook
    var len = fileSrc1.length
    for (var i = 0; i < len; i++) {
      seed += (fileSrc1.charCodeAt(i) * Math.random())
    }
    seed = Number(Math.sin(seed).toString().substr(6))
    console.log(seed)
  },
  eat: function () {
    wx.navigateTo({
      url: 'result?seed=' + seed,
      complete: function (res) {
        console.log(res)
      }
    })
  },
  put: function () {
    this.setData({
      opacity: 1
    })
    var animation = wx.createAnimation({
      duration: 1000
    })
    animation.opacity(0).translateY(100).step();//修改透明度,放大
    this.setData({
      spreakingAnimation: animation.export()
    })
  }
})