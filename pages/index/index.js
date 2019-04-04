import apis from '../../apis/index.js'
const { regeneratorRuntime } = global

Page({
  data: {
    current: 0,   // 默认的tab
    list: [
      {
        id: 2,
        title: '陶俊',
        subtitle: '这是一段陶俊的信息',
        picture: '../../assets/images/picture.png',
        date: '2019-01-14'
      }
    ]
  },

  // 标签切换事件
  tabToggle(e) {
    this.setData({
      current: e.detail.activeIndex
    })
  },

  // 获取文章列表
  async getArticleList() {
    let classify = await apis.getClassify()
    await console.log('获取文章列表', classify)
  },

  onShow() {
    this.getArticleList()
  }
})