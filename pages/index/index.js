Page({
  data: {
    current: 0,   // 默认的tab
    list: [
      {
        id: 1,
        title: '林雅迪',
        subtitle: '这是一段林雅迪的信息',
        picture: '',
        date: '2019-06-21'
      },
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
  getArticleList() {
    console.log('获取文章列表')
  },

  onShow() {
    this.getArticleList()
  }
});