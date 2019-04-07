// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // id
    articleID: {
      type: String
    },
    // 标题
    title: {
      type: String,
    },
    // 副标题
    subtitle: {
      type: String,
      value: ' '
    },
    // 图片
    picture: {
      type: String
    },
    // 日期
    date: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 打开文章
    openArticle() {
      wx.navigateTo({
        url: '../article/article?id=' + this.data.articleID
      })
    }
  },

  lifetimes: {
    attached() {
      
    },
    detached() {

    },
  },
})
