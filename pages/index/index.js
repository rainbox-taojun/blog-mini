Page({
  data: {
    current: 0,   // 默认的tab
  },

  // 标签切换事件
  tabToggle(e) {
    console.log(e)
    this.setData({
      current: e.detail.activeIndex
    })
  },

  methods: {
    
  },
  
  lifetimes: {
    attached() {
      
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
});