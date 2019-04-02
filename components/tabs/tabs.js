const sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
import tabsBehaviors from './tabs-behaviors.js'

Component({
  relations: {
    './tab': {
      type: 'child'
    }
  },
  behaviors: [tabsBehaviors],
  // 可自定义的css
  externalClasses: ['app-tab', 'app-tabs-container'],
  properties: {

  },

  data: {

  },

  methods: {
    tabClick(e) {
      let myEventDetail = e.detail
      this.triggerEvent('tab-click', myEventDetail, {})
    }
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

})