var seed = 0
// var startPoint
Page({
  data: {
    img_OK: 'http://ac-f5oadpis.clouddn.com/1e002520168e2620a135.png',
    img_BG: 'http://ac-f5oadpis.clouddn.com/4bacec3c56758096d20d.jpg',
    img_POT: 'http://ac-f5oadpis.clouddn.com/5735c19c94ce53831b67.png',
    img_HANDSOMEBOY: 'http://ac-f5oadpis.clouddn.com/0b32a502e72b5319f1a7.jpg',
    fileSrc1: 'http://ac-f5oadpis.clouddn.com/a41f110cbbdf9df86c42.PNG', // honey
    fileSrc2: 'http://ac-f5oadpis.clouddn.com/eba6bd85de5fa6aa7b8a.PNG', //chicken
    fileSrc3: 'http://ac-f5oadpis.clouddn.com/0302ae7817986473154a.PNG', //lemon
    fileSrc4: 'http://ac-f5oadpis.clouddn.com/71e406b52d5bf911078e.PNG', //broccoli
    fileSrc5: 'http://ac-f5oadpis.clouddn.com/141cc980e60aaf6fc7ea.PNG', //beer
    fileSrc6: 'http://ac-f5oadpis.clouddn.com/38c931d29edfa57fc403.PNG', //noodle
    fileSrc7: 'http://ac-f5oadpis.clouddn.com/e61350adafc7c8522e4b.PNG', //soySauce
    fileSrc8: 'http://ac-f5oadpis.clouddn.com/20b11f7f96b08d16e4e3.PNG', //chili

    opacity1: 0,
    opacity2: 0,
    opacity3: 0,
    opacity4: 0,
    opacity5: 0,
    opacity6: 0,
    opacity7: 0,
    opacity8: 0,
    
    spreakingAnimation1: {},
    spreakingAnimation2: {},
    spreakingAnimation3: {},
    spreakingAnimation4: {},
    spreakingAnimation5: {},
    spreakingAnimation6: {},
    spreakingAnimation7: {},
    spreakingAnimation8: {},
  },
  onLoad: function (options) {
    this.setData({
      cook: options.cook,
    })
    seed = 0;
    
  },
  eat: function () {
    wx.navigateTo({
      url: 'result?seed=' + seed,
      complete: function (res) {
        console.log(res)
      }
    })
  },
  showOne: function () {
    this.setData({
      opacity1: 1, 
      
    })
    var animation1 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation1.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation1.opacity(1).translateX(160).translateY(-380).step({
      duration: 210,
    });
    animation1.opacity(0).translateX(160).translateY(-200).step({
      duration: 110,
    })
    animation1.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
    this.setData({
      spreakingAnimation1: animation1.export()
    })
  },
  showTwo: function () {
    this.setData({
      opacity2: 1,
      
    })
    var animation2 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation2.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation2.opacity(1).translateX(60).translateY(-380).step({
      duration: 210,
    });
    animation2.opacity(0).translateX(60).translateY(-200).step({
      duration: 110,
    })
    animation2.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
    this.setData({
      spreakingAnimation2: animation2.export()
    })

  },
  showThree: function () {
    this.setData({
      opacity3: 1,
      
    })
    var animation3 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation3.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation3.opacity(1).translateX(-20).translateY(-380).step({
      duration: 210,
    });
    animation3.opacity(0).translateX(-20).translateY(-200).step({
      duration: 110,
    })
    animation3.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
    this.setData({
      spreakingAnimation3: animation3.export()
    })

  },
  showFour: function () {
    this.setData({
      opacity4: 1,
      
    })
    var animation4 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation4.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation4.opacity(1).translateX(-110).translateY(-380).step({
      duration: 210,
    });
    animation4.opacity(0).translateX(-110).translateY(-200).step({
      duration: 110,
    })
    animation4.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
    this.setData({
      spreakingAnimation4: animation4.export()
    })

  },
  showFive: function () {
    this.setData({
      opacity5: 1,
      
    })
    var animation5 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation5.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation5.opacity(1).translateX(160).translateY(-450).step({
      duration: 210,
    });
    animation5.opacity(0).translateX(160).translateY(-250).step({
      duration: 110,
    })
    animation5.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
    this.setData({
      spreakingAnimation5: animation5.export()
    })

  },
  showSix: function () {
    this.setData({
      opacity6: 1,
      
      })
    var animation6 = wx.createAnimation({
        // duration: 400,
        // timingFunction: "ease",
      })
    animation6.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation6.opacity(1).translateX(60).translateY(-450).step({
      duration: 210,
    });
    animation6.opacity(0).translateX(60).translateY(-250).step({
      duration: 110,
    })
    animation6.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
      this.setData({
        spreakingAnimation6: animation6.export()
      })

  },
  showSeven: function () {
    this.setData({
      opacity7: 1,
      
    })
    var animation7 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation7.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation7.opacity(1).translateX(-20).translateY(-450).step({
      duration: 210,
    });
    animation7.opacity(0).translateX(-20).translateY(-250).step({
      duration: 110,
    })
    animation7.opacity(0).translateX(0).translateY(0).step({
      duration: 2,
    });
    this.setData({
      spreakingAnimation7: animation7.export()
    })

  },
  showEight: function () {
    this.setData({
      opacity8: 1,
      
    })
    var animation8 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation8.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation8.opacity(1).translateX(-110).translateY(-450).step({
      duration: 210,
    });
    animation8.opacity(0).translateX(-110).translateY(-250).step({
      duration: 110,
    });
    animation8.opacity(0).translateX(0).translateY(0).step({
      duration: 2
    });
    this.setData({
      spreakingAnimation8: animation8.export()
    })

  },
})