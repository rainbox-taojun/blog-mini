import apis from '../../apis/index.js'
const { regeneratorRuntime } = global

Page({
  data: {
    current: 0,   // 默认的tab 
    classifyList: [], // 分类列表
    articlesList: [], // 文章列表
    
    more: false,  // 是否还有更多日志 有更多则允许下拉加载
    page: 1,      // 当前页数 下拉后文章叠加
  },

  // 标签切换事件
  tabToggle(e) {
    this.setData({
      current: e.detail.activeIndex
    })
  },

  // 获取分类列表
  async getClassify() {
    let classify = await apis.getClassify()
    await this.setData({
      classifyList: classify
    })
  },

  // 获取文章列表
  async getArticleList() {
    let articleList = await apis.getArticleList({
      page: this.data.page
    })
    await this.setData({
      articlesList: this.data.articlesList.concat(articleList.list)
    })
  },

  // 根据分类获取文章
  async getArticleListByClass(classify) {

  },

  init() {
    this.setData({
      articlesList: []
    })
  },

  // 初始化
  onShow() {
    this.init()
    this.getClassify()
    this.getArticleList()
  }
})