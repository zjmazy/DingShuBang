// pages/home_page/home_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { img: "/icons/logo.png", name: "test1", price: 10 },
      { img: "/icons/logo.png", name: "test1", price: 10 }
    ],

    topStories: [],
    storiesByDay: [],
    beforeDay: ''
  },

  /**
   * 获取首页数据
   */
  getStories() {
    wx.request({
      url: 'http://129.211.79.59:8090/get_data',
      success: (res) => {
        this.setData({
          storiesByDay: [{
            stories: res.data
          }]
        })
      }
    })

    // let list = []
    // for (var i = 0; i < 20; i++) {
    //   list.push({
    //     img: "/icons/logo.png",
    //     num: 1,
    //     price: 10,
    //     title: "book" + i,
    //     id: i,
    //   });
    // }
    // this.setData({
    //   storiesByDay: [{
    //     stories: list,
    //   }]
    // })
    


  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getStories()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // var arr = this.data.listData;
    // arr.push({
    //   img: "/icons/logo.png", name: "test3", price: 10
    // });
    // this.setData({
    //   listData:arr
    // })
    this.getStories()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})