// components/reply-box/reply-box.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputMode: false,   // 输入模式
    content: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击输入框
    clickInputBox() {
      this.setData({
        inputMode: true
      })
    },

    // 输入框失去焦点
    inputBoxBlur() {
      this.setData({
        inputMode: false
      })
    },

    keyInput(e) {
      this.setData({
        content: e.detail.value
      })
    },

    //  发送评论
    sendReply() {
      console.log('输入内容' + this.data.content)
    }
  }
})
