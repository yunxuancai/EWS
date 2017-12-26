var seed = 0
Page({
    data: {
    emotion: ''
    },
  onLoad: function(options) {
        this.setData({
        emotion: options.emotion
        })
        seed = 0;
        var fileSrc1 = this.data.emotion
        var len = fileSrc1.length
        for (var i = 0; i < len; i++)
        {
            seed += (fileSrc1.charCodeAt(i)*Math.random())
        }
        seed = Number(Math.sin(seed).toString().substr(6))
        console.log(seed)
  },
  eat:function() {
      wx.navigateTo({
            url: '../result?seed='+seed,
            complete:function(res){
                console.log(res)
            }
        })
  }
})