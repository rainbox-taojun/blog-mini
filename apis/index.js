import request from '../utils/request.js'

export default {
  // 获取分类列表
  getClassify () {
    return request.get('/classify/list')
  }
}