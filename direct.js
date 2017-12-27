// direct.js
var startPoint;
Page({
  data:{
    animationData:{},
    buttonTop:400,
    buttonLeft:180,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    this.animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'ease',   
      success: function (res) {  
        _this.setData({  
          screenHeight: res.windowHeight,  
          screenWidth: res.windowWidth, 
        });  
      }
    })
        
    },
// button拖动的三个方法
    buttonStart: function(e){
      startPoint = e.touches[0]
    },
    buttonMove: function(e){
      var endPoint = e.touches[e.touches.length-1]
      var translateX = endPoint.clientX - startPoint.clientX
      var translateY = endPoint.clientY - startPoint.clientY
      startPoint = endPoint
      var buttonTop = this.data.buttonTop + translateY
      var buttonLeft = this.data.buttonLeft + translateX

      if(endPoint.clientX < 0 || endPoint.clientX > this.data.screenWidth) return;
      //if(endPoint.clientY < 0 || endPoint.clientY > this.data.screenHeight) return;



      this.setData({
      buttonTop:buttonTop,
      buttonLeft:buttonLeft
      })
    },
    buttonEnd: function(e){
      wx.navigateTo({
          url: '../result?seed=' + startPoint.clientX,
      })
    },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  post:function(){
      wx.navigateTo({
        url: '../logs/logs?name=hello' 
      })
  }
})