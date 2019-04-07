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
    this.resetData()  // 重置数据
    this.setData({
      current: e.detail.activeIndex,  // tabs组件返回当前点击的标签序号
      page: 1 // 重置页数为第一页
    })
    if (this.data.current) {
      // 当current不为0 获取该序号下的文章
      let index = Number.parseInt(this.data.current)
      let classify = this.data.classifyList[index]
      this.getArticleListByClass(classify)
    }else {
      // 当current为0 获取【全部】文章
      this.getArticleList()
    }
  },

  // 获取分类列表
  async getClassify() {
    let classify = await apis.getClassify()
    await this.setData({
      classifyList: ['全部'].concat(classify)
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
    console.log(this.data.articlesList)
  },

  // 根据分类获取文章
  async getArticleListByClass(classify) {
    let articleList = await apis.getArticleListByClassify({
      page: this.data.page,
      classify: classify
    })
    await this.setData({
      articlesList: this.data.articlesList.concat(articleList.list)
    })
  },

  // 重置数据
  resetData() {
    this.setData({
      articlesList: []
    })
  },

  // 初始化
  onLoad() {
    this.getClassify()
    this.getArticleList()
  }
})