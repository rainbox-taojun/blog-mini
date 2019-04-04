// components/bubble/bubble.js
// 对话气泡
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    self: {             // 对话是否由自己发出
      type: Boolean,
      value: false
    },
    username: {         // 用户名
      type: String
    },
    content: {          // 内容
      type: String
    },
    time: {             // 发送时间
      type: String
    },
    avatar: {           // 头像
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

  }
})
