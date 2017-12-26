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
      opacity: 1,fileSrc:'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation = wx.createAnimation({
      duration: 500
    })
    animation.opacity(1).translateY(0).step();
    animation.opacity(0).translateY(100).step();
    animation.opacity(0).translateY(0).step();
    this.setData({
      spreakingAnimation: animation.export()
    })
    
  },
  put2: function () {
    this.setData({
      opacity: 1,
      fileSrc:'http://a1.att.hudong.com/50/17/01300542872052141645175129437_s.jpg'
    })
    var animation = wx.createAnimation({
      duration: 500
    })
    animation.opacity(1).translateY(0).step();
    animation.opacity(0).translateY(100).step();
    animation.opacity(0).translateY(0).step();
    this.setData({
      spreakingAnimation: animation.export()
    })

  },
  put3: function () {
    this.setData({
      opacity: 1, 
      fileSrc: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation = wx.createAnimation({
      duration: 500
    })
    animation.opacity(1).translateY(0).step();
    animation.opacity(0).translateY(100).step();
    animation.opacity(0).translateY(0).step();
    this.setData({
      spreakingAnimation: animation.export()
    })

  },
  put4: function () {
    this.setData({
      opacity: 1,
      fileSrc: 'http://a1.att.hudong.com/50/17/01300542872052141645175129437_s.jpg'
    })
    var animation = wx.createAnimation({
      duration: 500
    })
    animation.opacity(1).translateY(0).step();
    animation.opacity(0).translateY(100).step();
    animation.opacity(0).translateY(0).step();
    this.setData({
      spreakingAnimation: animation.export()
    })

  }
})