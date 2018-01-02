App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
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