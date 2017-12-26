var list = new Array()
list[0] = "http://s9.rr.itc.cn/r/wapChange/20168_25_21/a28ewa6106986018708.jpeg"
list[1] = "Volvo"
list[2] = "http://www.foodo.net/upimg/allimg/071226/_0922234R.jpg"
list[3] = "Tesla"
Page({
  data: {
    seed: '',
    one: '',
    two: '',
    three: '',
    four: ''
  },
  onLoad: function (options) {
    this.setData({
      seed: options.seed,
      one: list[0],
      two: list[1],
      three: list[2],
      four: list[3]
    })
  },
  showOne: function () {
    wx.showToast({
      title: this.data.one,
      icon: 'success',
      duration: 2000
    })
    wx.navigateTo({
      url: 'share?seed=' + '1',
      complete: function (res) {
        console.log(res)
      }
    })
  },
  showTwo: function () {
    wx.showToast({
      title: this.data.two,
      icon: 'success',
      duration: 2000
    })
    wx.navigateTo({
      url: 'share?seed=' + '2',
      complete: function (res) {
        console.log(res)
      }
    })
  },
  showThree: function () {
    wx.showToast({
      title: this.data.three,
      icon: 'success',
      duration: 2000
    })
    wx.navigateTo({
      url: 'share?seed=' + '3',
      complete: function (res) {
        console.log(res)
      }
    })
  },
  showFour: function () {
    wx.showToast({
      title: this.data.four,
      icon: 'success',
      duration: 2000
    })
    wx.navigateTo({
      url: 'share?seed=' + '4',
      complete: function (res) {
        console.log(res)
      }
    })
  },
  share: function () {
    wx.navigateTo({
      url: 'share?seed=' + this.data.seed,
      complete: function (res) {
        console.log(res)
      }
    })

  }
})