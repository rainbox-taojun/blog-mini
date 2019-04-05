// api返回校验
export default function(data, {success, error}) {
  if (typeof success !== 'function' && typeof error !== 'function') {
    throw new Error('未知的回调函数！')
  }
  if(Array.isArray(data)) {
    // 多条数据
    for(let i = 0, len = data.length; i < len; i++) {
      if (data[i].code !== 200) {
        error()
        break
      }
    }
    success()
  }else if(typeof data === 'object') {
    if (data.code === 200) {
      success()
    }else {
      error()
    }
  }else {
    throw new Error('无效的返回类型！')
  }
}