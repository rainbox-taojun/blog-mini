import request from '../utils/request.js'
import verify from '../utils/verify.js'
const { regeneratorRuntime } = global       // async/await

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
                  date: item.time,
                }
              })
            }
            data.list = list
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

  
}