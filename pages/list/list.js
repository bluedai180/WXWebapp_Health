Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const healthUri = 'http://www.tngou.net/api/' + options.type + '?id=3&rows=10'
    wx.request({
        url: 'http://www.tngou.net/api/info/list?id=3&rows=10',
        data: {},
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            console.log(res.data.tngou[1].title)
        }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})