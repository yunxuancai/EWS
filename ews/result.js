var list = new Array()
list[0] = "Saab"
list[1] = "Volvo"
list[2] = "BMW"
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
  },
  showTwo: function () {
    wx.showToast({
      title: this.data.two,
      icon: 'success',
      duration: 2000
    })
  },
  showThree: function () {
    wx.showToast({
      title: this.data.three,
      icon: 'success',
      duration: 2000
    })
  },
  showFour: function () {
    wx.showToast({
      title: this.data.four,
      icon: 'success',
      duration: 2000
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