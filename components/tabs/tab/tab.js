// components/tab/tab.js
const sliderWidth = 80; // 需要设置slider的宽度，用于计算中间位置
import tabsBehaviors from '../tabs-behaviors.js'

Component({
  behaviors: [tabsBehaviors],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    sliderOffset: 0,
    tabSliderWidth: ''
  },

  /**
   * 组件的方法列表
   */
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
    },
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      let that = this;
      wx.getSystemInfo({
        success(res) {
          if (that.data.scroll) {
            that.setData({
              sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
              tabSliderWidth: '80'
            })
          } else {
            that.setData({
              sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
              tabSliderWidth: res.windowWidth / that.data.tabs.length
            })
          }
          
        }
      });
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
