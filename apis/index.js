import request from '../utils/request.js'
import verify from '../utils/verify.js'
import { BASE_URL } from '../config.js'
const { regeneratorRuntime } = global       // async/await

// 处理返回后的文章列表
function formatArticleList(json) {
  let data = {
    total: json.total,           // 日志总数
    hasNext: json.hasNext,       // 是否还有下一页
    hasPrev: json.hasPrev        // 是否还有上一页
  }
  let list = []
  if (json.articleLists) {
    list = json.articleLists.map((item) => {
      return {
        id: item._id,
        title: item.title,
        subtitle: item.subtitle,
        date: item.time,
        picture: item.picture ? BASE_URL + item.picture : ''
      }
    })
  }
  data.list = list
  return data
}

export default {
  // 获取分类列表
  getClassify() {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await request.get('/classify/list')
        verify(response, {
          success: () => {
            let data = response.data.map(item => {
              return item.classify
            })
            resolve(data)
          },
          error: () => {
            reject(response.message)
          }
        })
      }catch(error) {
        reject(error)
      }
    })
  },

  // 获取文章列表
  getArticleList(obj) {
    let parameter = {
      page: obj.page,
      limit: 10
    }
    return new Promise(async (resolve, reject) => {
      try {
        let response = await request.post('/article/getList', parameter)
        let json = response.data
        verify(response, {
          success: () => {
            let data = formatArticleList(json)
            resolve(data)
          },
          error: () => {
            reject(response.message)
          }
        })
      }catch(error) {
        reject(error)
      }
    })
  },

  // 根据标签名获取文章
  getArticleListByClassify(obj) {
    let parameter = {
      page: obj.page,
      limit: 10,
      classify: obj.classify
    }
    return new Promise(async (resolve, reject) => {
      try {
        let response = await request.post('/article/getlistByClass', parameter)
        let json = response.data
        verify(response, {
          success: () => {
            let data = formatArticleList(json)
            resolve(data)
          },
          error: () => {
            reject(response.message)
          }
        })
      }catch(err) {
        reject(err)
      }
    })
  }
}