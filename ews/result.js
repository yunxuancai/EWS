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
    four: '',
    img_HANDSOMEBOY: 'http://ac-f5oadpis.clouddn.com/0b32a502e72b5319f1a7.jpg',
    anim: {},
    opacity1: 0,
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

  },
  showOne: function () {
    this.setData({
      opacity1: 0,

    })
    var animation1 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation1.opacity(1).step({
      duration: 60,
    });
    animation1.opacity(0).step({
      duration: 60,
    });
    animation1.opacity(1).step({
      duration: 60,
    });
    animation1.opacity(0).step({
      duration: 60,
    });
    animation1.opacity(1).step({
      duration: 60,
    });
    animation1.opacity(0).step({
      duration: 60,
    });
    animation1.opacity(1).step({
      duration: 60,
    });
    animation1.opacity(1).scale(2).step({
      duration: 200,
    });
    animation1.opacity(1).scale(1).step({
      duration: 200,
    });
    animation1.opacity(1).scale(2).step({
      duration: 200,
    });
    animation1.opacity(1).scale(1).step({
      duration: 200,
    });
    animation1.opacity(1).scale(2).step({
      duration: 200,
    });
    animation1.opacity(1).scale(1).step({
      duration: 200,
    });
    animation1.opacity(1).rotate(120).step({
      duration: 300,
      
    });
    animation1.opacity(1).rotate(240).step({
      duration: 300,

    });
    animation1.opacity(1).rotate(0).step({
      duration: 200,

    });
    animation1.opacity(0).step({
      duration: 100,
    });
   
    this.setData({
      anim: animation1.export()
    })
  },
})