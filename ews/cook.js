var seed = 0
var list = new Array()
list[0] = "Saab"
list[1] = "Volvo"
list[2] = "BMW"
list[3] = "Tesla"
list[4] = "Benz"
list[5] = "Toyota"
list[6] = "HONDA"
list[7] = "Maserati"
// var startPoint
Page({
  data: {
    cook: '', 
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    opacity1: 0,
    opacity2: 0,
    opacity3: 0,
    opacity4: 0,
    opacity5: 0,
    opacity6: 0,
    opacity7: 0,
    opacity8: 0,
    fileSrc: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg',
    //当前显示的决定opacity
    // animationData:{},
    // buttonTop:10,
    // buttonLeft:10,
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
      one: list[0],
      two: list[1],
      three: list[2],
      four: list[3],
      five: list[4],
      six: list[5],
      seven: list[6],
      eight: list[7]
    })
    seed = 0;
    // var fileSrc1 = this.data.cook
    // var len = fileSrc1.length
    // for (var i = 0; i < len; i++) {
    //   seed += (fileSrc1.charCodeAt(i) * Math.random())
    // }
    // seed = Number(Math.sin(seed).toString().substr(6))
    // console.log(seed)
  },
  // onShow:function(){
  //   this.animation = wx.createAnimation({
  //     duration: 0,
  //     timingFunction: 'ease',   
  //     success: function (res) {  
  //       _this.setData({  
  //         screenHeight: res.windowHeight,  
  //         screenWidth: res.windowWidth, 
  //       });  
  //     }
  //   })
      
  // },
  // buttonStart: function(e){
  //   startPoint = e.touches[0]
  // },
  // buttonMove: function(e){
  //   var endPoint = e.touches[e.touches.length-1]
  //   var translateX = endPoint.clientX - startPoint.clientX
  //   var translateY = endPoint.clientY - startPoint.clientY
  //   startPoint = endPoint
  //   var buttonTop = this.data.buttonTop + translateY
  //   var buttonLeft = this.data.buttonLeft + translateX

  //   if(endPoint.clientX < 0 || endPoint.clientX > this.data.screenWidth) return;
  //   //if(endPoint.clientY < 0 || endPoint.clientY > this.data.screenHeight) return;

  //   this.setData({
  //   buttonTop:buttonTop,
  //   buttonLeft:buttonLeft
  //   })
  // },
  // buttonEnd: function(e){
  //   // wx.navigateTo({
  //   //   url: '../result?seed=' + startPoint.clientX,
  //   // })
  // },
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
      fileSrc1: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation1 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation1.opacity(1).translateX(0).translateY(0).step();
    animation1.opacity(1).translateX(160).translateY(-330).step();
    animation1.opacity(0).translateX(160).translateY(-200).step()
    animation1.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation1: animation1.export()
    })
  },
  showTwo: function () {
    this.setData({
      opacity2: 1,
      fileSrc2: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation2 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation2.opacity(1).translateX(0).translateY(0).step();
    animation2.opacity(1).translateX(60).translateY(-330).step();
    animation2.opacity(0).translateX(60).translateY(-200).step()
    animation2.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation2: animation2.export()
    })

  },
  showThree: function () {
    this.setData({
      opacity3: 1,
      fileSrc3: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation3 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation3.opacity(1).translateX(0).translateY(0).step();
    animation3.opacity(1).translateX(-20).translateY(-330).step();
    animation3.opacity(0).translateX(-20).translateY(-200).step()
    animation3.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation3: animation3.export()
    })

  },
  showFour: function () {
    this.setData({
      opacity4: 1,
      fileSrc4: 'http://a1.att.hudong.com/50/17/01300542872052141645175129437_s.jpg'
    })
    var animation4 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation4.opacity(1).translateX(0).translateY(0).step();
    animation4.opacity(1).translateX(-110).translateY(-330).step();
    animation4.opacity(0).translateX(-110).translateY(-200).step()
    animation4.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation4: animation4.export()
    })

  },
  showFive: function () {
    this.setData({
      opacity5: 1,
      fileSrc5: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation5 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation5.opacity(1).translateX(0).translateY(0).step();
    animation5.opacity(1).translateX(160).translateY(-380).step();
    animation5.opacity(0).translateX(160).translateY(-250).step()
    animation5.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation5: animation5.export()
    })

  },
  showSix: function () {
    this.setData({
      opacity6: 1,
      fileSrc6: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
      })
    var animation6 = wx.createAnimation({
        duration: 400,
        timingFunction: "ease"
      })
    animation6.opacity(1).translateX(0).translateY(0).step();
    animation6.opacity(1).translateX(60).translateY(-380).step();
    animation6.opacity(0).translateX(60).translateY(-250).step()
    animation6.opacity(0).translateX(0).translateY(0).step();
      this.setData({
        spreakingAnimation6: animation6.export()
      })

  },
  showSeven: function () {
    this.setData({
      opacity7: 1,
      fileSrc7: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation7 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation7.opacity(1).translateX(0).translateY(0).step();
    animation7.opacity(1).translateX(-20).translateY(-380).step();
    animation7.opacity(0).translateX(-20).translateY(-250).step()
    animation7.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation7: animation7.export()
    })

  },
  showEight: function () {
    this.setData({
      opacity8: 1,
      fileSrc8: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=847b55849d16fdfadc6cc1ec848e8cea/c8177f3e6709c93d535ba0589f3df8dcd00054f7.jpg'
    })
    var animation8 = wx.createAnimation({
      duration: 400,
      timingFunction: "ease"
    })
    animation8.opacity(1).translateX(0).translateY(0).step();
    animation8.opacity(1).translateX(-110).translateY(-380).step();
    animation8.opacity(0).translateX(-110).translateY(-250).step()
    animation8.opacity(0).translateX(0).translateY(0).step();
    this.setData({
      spreakingAnimation8: animation8.export()
    })

  },
})