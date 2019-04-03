// http请求封装
import { BASE_URL } from '../config.js'  // 请求的基础路径
const { regeneratorRuntime } = global       // async/await

// http请求
function request(url, type, parameter) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,// 接口地址
      data: parameter,    // 请求参数
      header: {           // 请求头部
        'content-type': 'application/json' // 默认值
      },
      method: type,       // 请求类型
      success(res) {
        resolve(res.data)
      },
      fail() {
        reject()
      }
    })
  })
}

// 封装后的对象
class Request {
  constructor() {}

  // get请求
  async get(url) {
    return await request(url, 'GET')
  }

  // post请求
  async post(url, parameter) {
    return await request(url, 'POST', parameter)
  }
}

export default new Request()