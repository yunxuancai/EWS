App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
        wx.playBackgroundAudio({
          dataUrl: 'http://ac-f5oadpis.clouddn.com/bf9103a7fea8dda196ab.mp3',
          title: '一个人也要好好吃饭哦',
          success: function (res) {
            console.log('success');
            console.log(res);
          },
          fail: function (res) {
            console.log('fail');
            console.log(res);
          }
        })
        wx.onBackgroundAudioStop(function(){
          console.log('stop');
          wx.playBackgroundAudio({
            dataUrl: 'http://ac-f5oadpis.clouddn.com/bf9103a7fea8dda196ab.mp3',
            title: '一个人也要好好吃饭哦',
            success: function (res) {
              console.log('success');
              console.log(res);
            },
            fail: function (res) {
              console.log('fail');
              console.log(res);
            }
          })
        })
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false,
        SharePic1: '',
        SharePic2: '',
        SharePic3: '',
        clickCount: [0, 0, 0, 0, 0, 0, 0, 0]
    }
});