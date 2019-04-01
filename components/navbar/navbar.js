const sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Component({
  externalClasses: ['app-navbar'],
  properties: {
    tabs: {
      type: Array
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    textColor: {
      type: String
    },
    textActiveColor: {
      type: String
    },
    sliderColor: {
      type: String,
      value: '#1aad19'
    },
  },

  data: {
    
    sliderOffset: 0,
    sliderLeft: 0
  },


  methods: {
    tabClick(e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
      // detail对象，提供给事件监听函数
      let myEventDetail = {
        activeIndex: this.data.activeIndex
      }
      // 触发tabClick事件
      this.triggerEvent('tab-click', myEventDetail, {})
    }
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      let that = this;
      wx.getSystemInfo({
        success(res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
          });
        }
      });
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

})