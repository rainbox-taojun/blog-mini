// pages/article/article.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    comment: [
      {
        username: '小老弟',
        content: '卧槽？牛逼啊！！！',
        time: '2019-01-01 20:22',
        avatar: '',
        self: false,
      },
      {
        username: '老哥',
        content: '小老弟小老弟小老弟',
        time: '2019-01-22 20:22',
        avatar: '',
        self: true,
      }
    ],
    markdown: `<p align="center">
  <a href="http://vux.li">
    <img src="https://i.loli.net/2017/11/20/5a12187ebf2e0.png" width="175">
  </a>
</p>
<p align="center">Be Cool with Vue@^2.3.0 and WeUI.</p>

<p align="center">
  <a href="https://vux.li/demos/v2?x-page=github">
    <img src="https://static.vux.li/demo_v2_doc_home.png" width="100" alt="">
  </a>
  <br>
  <a href="https://vux.li/demos/v2?x-page=github">
    Live Demo >>
  </a>
  <br>
  <br>
  <a href="https://github.com/airyland/vux">
    <img src="https://img.shields.io/github/stars/airyland/vux.svg?style=social&label=Star" alt="">
  </a>
  <a href="https://github.com/airyland/vux">
    <img src="https://img.shields.io/github/forks/airyland/vux.svg?style=social&label=Fork" alt="">
  </a>
  <a href="https://github.com/airyland/vux">
    <img src="https://img.shields.io/github/watchers/airyland/vux.svg?style=social&label=Watch" alt="">
  </a>
  <br>
  <br>
  <a href="https://travis-ci.org/airyland/vux">
    <img src="https://api.travis-ci.org/airyland/vux.svg?branch=v2" alt="">
  </a>
  <a href="https://codecov.io/gh/airyland/vux/branch/v2">
    <img src="https://img.shields.io/codecov/c/github/airyland/vux/v2.svg" alt="">
  </a>
  <br>
  <a href="https://github.com/airyland/vux/issues">
    <img src="https://img.shields.io/github/issues/airyland/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/airyland/vux/issues">
    <img src="http://isitmaintained.com/badge/resolution/airyland/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/airyland/vux/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/airyland/vux.svg?style=flat-square" alt="">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/l/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/v/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/dm/vux.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vux">
    <img src="https://img.shields.io/npm/dt/vux.svg?style=flat-square" alt="">
  </a>
  <br>
  <br>
</p>

## Sponsors

<p align="center">
  <a href="https://www.sb/?utm_source=vux">
    <img src="http://wx1.sinaimg.cn/mw690/0060lm7Tly1ftmvim3r34j3056034wee.jpg" height="100">
  </a>
</p>`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.towxml)
    //将markdown内容转换为towxml数据
    let data = app.towxml.toJson(this.data.markdown, 'markdown')

    //设置数据
    this.setData({
      article: data
    })
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