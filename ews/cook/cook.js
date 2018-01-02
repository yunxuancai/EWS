var seed = 0
// var startPoint
Page({
  data: {
    img_OK: 'http://ac-f5oadpis.clouddn.com/1e002520168e2620a135.png',
    img_BG: 'http://ac-F5oAdPIS.clouddn.com/d68072fd05d9b8951901.jpg',
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

    clickCount: [0,0,0,0,0,0,0,0],
    
    spreakingAnimation1: {},
    spreakingAnimation2: {},
    spreakingAnimation3: {},
    spreakingAnimation4: {},
    spreakingAnimation5: {},
    spreakingAnimation6: {},
    spreakingAnimation7: {},
    spreakingAnimation8: {},

    Timer: 100,

    showModalStatus: false,

    ShareImage: "http://ac-F5oAdPIS.clouddn.com/85011b030771c943fca1.png",

    SharePic1: "http://www.foodo.net/upimg/allimg/071226/_0922234R.jpg",
    SharePic2: "http://www.foodo.net/upimg/allimg/071226/_0922234R.jpg",
    SharePic3:"http://www.foodo.net/upimg/allimg/071226/_0922234R.jpg",
    TopImage: "http://ac-F5oAdPIS.clouddn.com/01188f76063ba2d7feee.png"

  },

  Timer: function () {
    var that = this;
    var t = setInterval(TimeCost, 200);
    function TimeCost() {
      console.log(that.data.Timer);
      if (that.data.Timer <= 0) {
        clearInterval(t);
      }
      else {
        that.setData({
          Timer: that.data.Timer - 1
        })
      }

    }
  },
  
  onLoad: function (options) {
    this.setData({
      cook: options.cook,
    })
    this.Timer();

    // this.powerDrawer();
    seed = 0;

    
  },


  


  eat: function () {
<<<<<<< HEAD:ews/cook/cook.js
    // wx.navigateTo({
    //   url: 'result?seed=' + seed,
    //   complete: function (res) {
    //     console.log(res)
    //   }
    // })
    this.powerDrawer();
=======
    this.calculateMenu();
    wx.navigateTo({
      url: 'result?seed=' + seed,
      complete: function (res) {
        console.log(res)
      }
    })
>>>>>>> 462af368220bf87b5c40b3f2a35ce062645d2afe:ews/cook.js
  },
  showOne: function () {
    var temp = this.data.clickCount;
    temp[0] ++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[1]++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[2]++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[3]++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[4]++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[5]++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[6]++;
    this.setData({
      clickCount: temp
    })
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
    var temp = this.data.clickCount;
    temp[7]++;
    this.setData({
      clickCount: temp
    })
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
<<<<<<< HEAD:ews/cook/cook.js


  BindShare: function(){
    wx.navigateTo({
      url: 'ews/share/share'
    })
  },


  powerDrawer: function (e) {
    var currentStatu = "open";
    if (e) {
      currentStatu = e.currentTarget.dataset.statu;
    }
    this.util(currentStatu);
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 0, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画 
      animation.opacity(1).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 0)

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }
=======
  calculateMenu: function () {
    var cc = this.data.clickCount
    var index1 = new Array()
    var index2 = new Array()
    var menu = new Array(16)
    for (var i = 0; i < 16; i++) {
      menu[i] = i + 1;
    }
    var zeroCount1 = 0, zeroCount2 = 0
    for(var i = 0; i < 4; i++){
      index1[i] = i;
      index2[i] = i;
    }
    
    for (var i = 0; i < 3; i++) {
      for (var j = i; j < 4; j++) {
        if (cc[i] < cc[j]) {
          [cc[i], cc[j]] = [cc[j], cc[i]];
          [index1[i], index1[j]] = [index1[j], index1[i]];
        }
        if (cc[i + 4] < cc[j + 4]) {
          [cc[i + 4], cc[j + 4]] = [cc[j + 4], cc[i + 4]];
          [index2[i], index2[j]] = [index2[j], index2[i]];
        }
      }
    }
    if(cc[0] == cc[1]){
      var num = Math.random();
      if(num < 0.5){
        cc[0]++;
      } else{
        cc[1]++;
        [index1[0], index1[1]] = [index1[1], index1[0]]
      }
    }
    if(cc[4] == cc[5]){
      var num1 = Math.random();
      if (num1 < 0.5) {
        cc[4]++;
      } else {
        cc[5]++;
        [index2[0], index2[1]] = [index2[1], index2[0]]
      }
    }
    console.log(index1)
    console.log(index2)
    console.log(cc);

    var menu_show_list = new Array();
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 2; j++) {
        menu_show_list[i * 2 + j] = menu[index2[i] * 4 + index1[j]];
      }
    }
    console.log(menu_show_list);
    seed = ""
    for(var i = 0; i < 4; i++){
      seed += menu_show_list[i]
    }
    console.log(seed)
  },
>>>>>>> 462af368220bf87b5c40b3f2a35ce062645d2afe:ews/cook.js
})