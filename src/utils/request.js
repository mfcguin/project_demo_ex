import axios from 'axios'
import { baseURL, requestTimeout, contentType } from '@/config'

// 创建axios基础对象
const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606697250632532718583809","bc":"440100"}'
  }
})

// 定义axios请求拦截器
instance.interceptors.request.use(
  config => {
    console.log(config)
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// 定义axios响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.status !== 0) {

    }

    return response.data
  }, error => {
    return Promise.reject(error)
  }
)

instance.get = (url, params = {}, options = {}) => {
  return instance({
    method: 'GET',
    url,
    params,
    headers: options.headers,
    options
  })
}

instance.post = (url, data = {}, options = {}) => {
  return instance({
    method: 'POST',
    url,
    data,
    headers: options.headers,
    options
  })
}

instance.put = (url, data = {}, options = {}) => {
  return instance({
    method: 'PUT',
    url,
    data,
    headers: options.headers,
    options
  })
}

instance.delete = (url, data = {}, options = {}) => {
  return instance({
    method: 'DELETE',
    url,
    data,
    headers: options.headers,
    options
  })
}

export default instance
