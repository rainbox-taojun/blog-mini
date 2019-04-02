export default Behavior({
  behaviors: [],
  properties: {
    scroll: {       // 是否开启滚动模式 默认关闭
      type: Boolean,
      value: false
    },
    tabs: {         // 标签名称数组
      type: Array
    },
    activeIndex: {  // 当前显示标签序号
      type: Number,
      value: 0
    },
    textColor: {    // 文字默认颜色
      type: String
    },
    textActiveColor: {  // 选中项文字颜色
      type: String
    },
    sliderColor: {      // 选中项高亮颜色
      type: String,
      value: '#1aad19'
    },
  },
  data: {
    
  },
  
  methods: {
    
  },

  lifetimes: {
    attached() {
      
    },
    detached() {
      
    },
  },
})