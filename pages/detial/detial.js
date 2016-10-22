Page({
  data:{
    // text:"这是一个页面"
    id:0,
    message:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id+"detial")
    var that = this;
    this.setData({id:options.id+"detial"})
    const detialUri = 'http://www.tngou.net/api/' + 'info/show?id=' + options.id
    wx.request({
        url: detialUri,
        data: {},
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            console.log(res.data.message)
            that.setData({message:res.data.message})
            // var date = new Date(1477108880000);
            // var Y,M,D,h,m,s;
            // Y = date.getFullYear() + '-';
            // M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            // D = date.getDate() + ' ';
            // h = date.getHours() + ':';
            // m = date.getMinutes() + ':';
            // s = date.getSeconds();
            // console.log(Y+M+D+h+m+s);
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