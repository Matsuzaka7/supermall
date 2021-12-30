import axios from 'axios'

// 4.
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2. axios拦截器 
  // request 请求拦截  response 响应拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    //console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // 成功执行res
    return res.data
  }, err => {
    // 失败执行err
    console.log(err);
  })

  // 3. 发送请求
  // instance这个方法本身就是一个promise，因此不需要再创建一个promise
  return instance(config)
}
