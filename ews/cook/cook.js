var seed = 0
// var startPoint
var app = getApp();
Page({
  data: {
    img_OK: 'http://ac-f5oadpis.clouddn.com/1e002520168e2620a135.png',
    img_BG: 'http://ac-F5oAdPIS.clouddn.com/d68072fd05d9b8951901.jpg',
    img_POT: 'http://ac-f5oadpis.clouddn.com/5735c19c94ce53831b67.png',
    img_HANDSOMEBOY: 'http://ac-f5oadpis.clouddn.com/0b32a502e72b5319f1a7.jpg',
    fileSrc6: 'http://ac-f5oadpis.clouddn.com/a41f110cbbdf9df86c42.PNG', // honey
    fileSrc1: 'http://ac-f5oadpis.clouddn.com/eba6bd85de5fa6aa7b8a.PNG', //chicken
    fileSrc5: 'http://ac-f5oadpis.clouddn.com/0302ae7817986473154a.PNG', //lemon
    fileSrc2: 'http://ac-f5oadpis.clouddn.com/71e406b52d5bf911078e.PNG', //broccoli
    fileSrc4: 'http://ac-f5oadpis.clouddn.com/141cc980e60aaf6fc7ea.PNG', //beer
    fileSrc3: 'http://ac-f5oadpis.clouddn.com/38c931d29edfa57fc403.PNG', //noodle
    fileSrc8: 'http://ac-f5oadpis.clouddn.com/e61350adafc7c8522e4b.PNG', //soySauce
    fileSrc7: 'http://ac-f5oadpis.clouddn.com/20b11f7f96b08d16e4e3.PNG', //chili


    menu_show_list: [2,1,6],
    
    foodList: [
      { "Name": "酸甜排骨", "Description": "百吃不厌的糖醋排骨，酸酸甜甜美味又开胃，好吃到停不下来！", "url": "http://ac-f5oadpis.clouddn.com/24821293fe9b6b51a6a2.jpg" },
      { "Name": "蔬果沙拉", "Description": "口味酸甜，清淡一些", "url": "http://ac-f5oadpis.clouddn.com/e43ab5946122a304f5e0.jpg" },
      { "Name": "酸菜面", "Description": "浓郁的汤汁，酸爽的口感，诱人的香味", "url": "http://ac-f5oadpis.clouddn.com/27d2eca601cc36c91e04.jpg" },
      { "Name": "披萨+金桔柠檬茶", "Description": "金桔柠檬茶令人心神清爽，唇齿留香，是不可多得的饮品。", "url": "http://ac-f5oadpis.clouddn.com/1b4f4f1667f60e9402d3.jpg" },
      { "Name": "叉烧", "Description": "肉质软嫩多汁、色泽鲜明、香味四溢", "url": "http://ac-f5oadpis.clouddn.com/b9111f4e62546df4e385.jpg" },
      { "Name": "水果沙拉", "Description": "水分足、性寒凉、味酸甜，生津止渴，润肺去火", "url": "http://ac-f5oadpis.clouddn.com/b4284e38cbbe1f78937b.jpg" },
      { "Name": "番茄炒蛋面", "Description": "炒鸡蛋吸足了汤汁，尝一口酸酸甜甜的", "url": "http://ac-f5oadpis.clouddn.com/d4f63c301f8ced184377.jpg" },
      { "Name": "叉烧+百事可乐", "Description": "烧味的一种。多呈红色，瘦肉做成，略甜", "url": "http://ac-f5oadpis.clouddn.com/46dc669f80dc94b044ec.jpg" },
      { "Name": "麻辣牛肉", "Description": "色泽褐红，麻辣鲜香，干香滋润化渣", "url": "http://ac-f5oadpis.clouddn.com/bcc623c2d3642c87bcb8.jpg" },
      { "Name": "全素麻辣拌", "Description": "煮熟了直接拌！", "url": "http://ac-f5oadpis.clouddn.com/063e4872854c97be6c9f.jpg" },
      { "Name": "老麻抄手", "Description": "皮薄馅嫩，味美汤鲜", "url": "http://ac-f5oadpis.clouddn.com/1d08b82d9c2f0ca016d1.jpg" },
      { "Name": "杂酱米线+柠乐", "Description": "去除了可乐过于刺激的感觉，而且有一股柠檬的清香", "url": "http://ac-f5oadpis.clouddn.com/52d6238427d794c31577.jpg" },
      { "Name": "土豆牛肉", "Description": "软糥的土豆，炖得烂烂的牛肉，味道互相融合，滋味浓郁", "url": "http://ac-f5oadpis.clouddn.com/61de0c767beb8e88f292.jpg" },
      { "Name": "斋肠", "Description": "简单营养价值极高，味道鲜美", "url": "http://ac-f5oadpis.clouddn.com/aef820fca151aa19ab26.jpg" },
      { "Name": "肉丝炒粉", "Description": "加个鸡蛋，再放些时令配菜", "url": "http://ac-f5oadpis.clouddn.com/748133ece3c1de68bb77.jpg" },
      { "Name": "炸鸡+可乐", "Description": "一口炸鸡、一口可乐，那真是无比的好滋味", "url": "http://ac-f5oadpis.clouddn.com/2f32d3111474ab476d3b.jpg" }
    ],

    clickCount: [0, 0, 0, 0, 0, 0, 0, 0],

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

    Timer: 100,

    WaterHeight: 350,
    WaterTop: 330,

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
        that.powerDrawer();
      }
      else {
        that.setData({
          Timer: that.data.Timer - 1,
          WaterHeight: 350 * that.data.Timer / 100,
          WaterTop: 335 + (350 - that.data.WaterHeight)
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
    // wx.navigateTo({
    //   url: 'result?seed=' + seed,
    //   complete: function (res) {
    //     console.log(res)
    //   }
    // })
    this.calculateMenu();
    this.powerDrawer();
  },
  showOne: function () {
    var temp = this.data.clickCount;
    temp[0] ++;
    this.setData({
      opacity1: 1, 
      clickCount: temp
    })
    var animation1 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation1.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation1.opacity(1).translateX(175).translateY(-380).step({
      duration: 210,
    });
    animation1.opacity(0).translateX(175).translateY(-200).step({
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
      opacity2: 1,
      clickCount: temp
    })
    var animation2 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation2.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation2.opacity(1).translateX(75).translateY(-380).step({
      duration: 210,
    });
    animation2.opacity(0).translateX(75).translateY(-200).step({
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
      opacity3: 1,
      clickCount: temp
    })
    var animation3 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation3.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation3.opacity(1).translateX(-5).translateY(-380).step({
      duration: 210,
    });
    animation3.opacity(0).translateX(-5).translateY(-200).step({
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
      opacity4: 1,
      clickCount: temp
    })
    var animation4 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation4.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation4.opacity(1).translateX(-95).translateY(-380).step({
      duration: 210,
    });
    animation4.opacity(0).translateX(-95).translateY(-200).step({
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
      opacity5: 1,
      clickCount: temp
    })
    var animation5 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation5.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation5.opacity(1).translateX(175).translateY(-450).step({
      duration: 210,
    });
    animation5.opacity(0).translateX(175).translateY(-250).step({
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
      opacity6: 1,
      clickCount: temp
    })
    var animation6 = wx.createAnimation({
        // duration: 400,
        // timingFunction: "ease",
      })
    animation6.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation6.opacity(1).translateX(75).translateY(-450).step({
      duration: 210,
    });
    animation6.opacity(0).translateX(75).translateY(-250).step({
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
      opacity7: 1,
      clickCount: temp
    })
    var animation7 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation7.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation7.opacity(1).translateX(-5).translateY(-450).step({
      duration: 210,
    });
    animation7.opacity(0).translateX(-5).translateY(-250).step({
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
      opacity8: 1,
      clickCount: temp
    })
    var animation8 = wx.createAnimation({
      // duration: 400,
      // timingFunction: "ease",
    })
    animation8.opacity(1).translateX(0).translateY(0).step({
      duration: 70,
    });
    animation8.opacity(1).translateX(-95).translateY(-450).step({
      duration: 210,
    });
    animation8.opacity(0).translateX(-95).translateY(-250).step({
      duration: 110,
    });
    animation8.opacity(0).translateX(0).translateY(0).step({
      duration: 2
    });
    this.setData({
      spreakingAnimation8: animation8.export()
    })

  },


  BindShare: function(){
    
    wx.navigateTo({
      url: '/ews/share/share'
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
  },


  calculateMenu: function () {
    var cc = new Array()
    for(var i = 0; i < 8; i++){
      cc[i] = this.data.clickCount[i];
    }
    var index1 = new Array()
    var index2 = new Array()
    var menu = new Array(16)
    for (var i = 0; i < 16; i++) {
      menu[i] = i;
    }
    var zeroCount1 = 0, zeroCount2 = 0
    for (var i = 0; i < 4; i++) {
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
    if (cc[0] == cc[1]) {
      var num = Math.random();
      if (num < 0.5) {
        cc[0]++;
      } else {
        cc[1]++;
        [index1[0], index1[1]] = [index1[1], index1[0]]
      }
    }
    if (cc[4] == cc[5]) {
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
    console.log(this.data.clickCount);

    var menu_show_list = new Array();
    menu_show_list = [];

    // for (var i = 0; i < 2; i++) {
    //   for (var j = 0; j < 2; j++) {
    //     menu_show_list[i * 2 + j] = menu[index2[i] * 4 + index1[j]];
    //   }
    // }
    menu_show_list[0]=menu[index2[0] * 4 + index1[0]];
    if(index1[0] > index2[0]){
      menu_show_list[1] = menu[index2[1] * 4 + index1[0]];
      menu_show_list[2] = menu[index2[0] * 4 + index1[1]]
    } else{
      menu_show_list[1] = menu[index2[0] * 4 + index1[1]];
      menu_show_list[2] = menu[index2[1] * 4 + index1[0]];
    }

    app.globalData.clickCount = this.data.clickCount;
    this.setData({
      menu_show_list: menu_show_list,
      clickCount: [0, 0, 0, 0, 0, 0, 0, 0]
    })
    console.log(menu_show_list);
    app.globalData.SharePic1 = this.data.foodList[this.data.menu_show_list[0]].url;
    app.globalData.SharePic2 = this.data.foodList[this.data.menu_show_list[1]].url;
    app.globalData.SharePic3 = this.data.foodList[this.data.menu_show_list[2]].url;
    

    seed = ""
    for (var i = 0; i < 4; i++) {
      seed += menu_show_list[i]
    }
    //console.log(seed);
  },
})