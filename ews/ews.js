var startPoint;
var touchDot = 0;//触摸时的原点
var time = 0;//  时间记录，用于滑动时且时间小于1s则执行左右滑动
var interval = "";// 记录/清理 时间记录
var nth = 0;// 设置活动菜单的index
var nthMax = 5;//活动菜单的最大个数
var tmpFlag = true;// 判断左右华东超出菜单最大值时不再执行滑动事件
var seed = 0;//随机数种子
const AV = require('../av-weapp-min.js');
var AVF
var app = getApp()
var URL
var tempFilePath
var slideLeft = false;
Page({
  data: {
    list: [
    ],
    animationData: {},
    buttonTop: -100,
    buttonLeft: 100,
    fileSrc: 'http://bpic.588ku.com/element_origin_min_pic/00/94/26/5156f2bf3f135c0.jpg',//'http://ac-f5oadpis.clouddn.com/fb83c03f6896ab4e1c32.png',
    //URL: '',
    token: '',
    seed: 0,
    opacity: 0
  },


  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向左滑动   
    if (touchMove - touchDot <= -40 && time < 10) {
      if (tmpFlag && nth < nthMax) { //每次移动中且滑动时不超过最大值 只执行一次
        var tmp = this.data.menu.map(function (arr, index) {
          tmpFlag = false;
          if (arr.active) { // 当前的状态更改
            nth = index;
            ++nth;
            arr.active = nth > nthMax ? true : false;
          }
          if (nth == index) { // 下一个的状态更改
            arr.active = true;
            name = arr.value;
          }
          return arr;
        })
        this.getNews(name); // 获取新闻列表
        this.setData({ menu: tmp }); // 更新菜单
      }
    }
    // 向右滑动
    if (touchMove - touchDot >= 40 && time < 10) {
      if (tmpFlag && nth > 0) {
        nth = --nth < 0 ? 0 : nth;
        var tmp = this.data.menu.map(function (arr, index) {
          tmpFlag = false;
          arr.active = false;
          // 上一个的状态更改
          if (nth == index) {
            arr.active = true;
            name = arr.value;
          }
          return arr;
        })
        this.getNews(name); // 获取新闻列表
        this.setData({ menu: tmp }); // 更新菜单
      }
    }
    // touchDot = touchMove; //每移动一次把上一次的点作为原点（好像没啥用）
  },
  // 触摸结束事件
  touchEnd: function (e) {
    clearInterval(interval); // 清除setInterval
    time = 0;
    tmpFlag = true; // 回复滑动事件
  },


  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  onShow: function () {
    this.animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'ease',
      success: function (res) {
      }
    })

  },

  queryRequest: function (data) {
    wx.request({
      url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
      data: {
        //"url": "http://img0.pclady.com.cn/pclady/1610/01/1592540_420378.jpg"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'aea315434a924bdb8f7f584c9f9e7369'

      },
      success: function (res) {
        console.log(res);
        if (res.data.ret == 200) {
          //something to do
        }
        else {
          //something to do
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },


  chooseImage() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        tempFilePath = res.tempFilePaths[0];
        AVF = new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save({
          success: function (data) {
            console.log(333);

            // data.url() 可以获得文件的 url

          },


        }).then(
          function (resultFile) {
            URL = resultFile.url();
            console.log('url is ' + URL);
            wx.showToast({
              title: '加载中',
              icon: 'loading',
              duration: 1000
            })
            that.setData({
              fileSrc: tempFilePath
            })
          }
          ).catch(console.error);
      }

    })


  },
  onLoad(options) {
    AV.init({
      appId: 'F5oAdPISMud9BYtjuCbFOowp-gzGzoHsz',
      appKey: 'xHvQR3hGL5N0093BOYsQCCRh',
    });
    const token = wx.getStorageSync('token')
    this.setData({ token })
  },
  left() {
    wx.navigateTo({
      url: '../direct',
      complete: function (res) {
        console.log(res)
      }
    })
  },
  next() {
    /*wx.navigateTo({
        url: '../result?seed='+seed,
        complete:function(res){
            console.log(res)
        }
    })*/

  },

  query: function (e) {
    var cook = 'balahbalah';
    wx.navigateTo({
      url: 'cook?cook=' + cook,
      complete: function (res) {
        console.log(res)
      }
    })
  },


  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    /*interval = setInterval(function(){
        time++;
    },100)
    console.log(time); */

  },
  // 触摸移动事件
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    if (touchMove - touchDot <= -40)
      slideLeft = true
    //if(touchMove - touchDot >= 40 && time < 10)
    else
    { slideLeft = false; }
    //console.log(touchDot,touchMove,time)
    //console.log(slideLeft)
  },


  /*touchMove:function(e){ 
     var touchMove = e.touches[0].pageX;
     console.log("touchMove:"+touchMove+" touchDot:"+touchDot+" diff:"+(touchMove - touchDot));
     // 向左滑动   
     if(touchMove - touchDot <= -40 && time < 10){
         if(tmpFlag && nth < nthMax){ //每次移动中且滑动时不超过最大值 只执行一次
             var tmp = this.data.menu.map(function (arr, index) {
                 tmpFlag = false;
                 if(arr.active){ // 当前的状态更改
                     nth = index;
                     ++nth;
                     arr.active = nth > nthMax ? true : false;
                 }
                 if(nth == index){ // 下一个的状态更改
                     arr.active = true;
                     name = arr.value;
                 }
                 return arr;
              })
             this.getNews(name); // 获取新闻列表
             this.setData({menu : tmp}); // 更新菜单
         }
     }
     // 向右滑动
     if(touchMove - touchDot >= 40 && time < 10){
         if(tmpFlag && nth > 0){
             nth = --nth < 0 ? 0 : nth;
             var tmp = this.data.menu.map(function (arr, index) {
                 tmpFlag = false;
                 arr.active = false;
                 // 上一个的状态更改
                 if(nth == index){
                     arr.active = true;
                     name = arr.value;
                 }
                 return arr;
             })
             this.getNews(name); // 获取新闻列表
             this.setData({menu : tmp}); // 更新菜单
         }
     }
     // touchDot = touchMove; //每移动一次把上一次的点作为原点（好像没啥用）
  },*/
  // 触摸结束事件
  touchEnd: function (e) {
    //clearInterval(interval); // 清除setInterval
    //console.log(time)
    //time = 0;
    tmpFlag = true; // 回复滑动事件

    if (slideLeft) {
      slideLeft = false;
      wx.navigateTo({
        url: '../direct',
        complete: function (res) {
          console.log(res)
        }
      })
    }
  }


});
