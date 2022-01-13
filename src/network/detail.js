import { request } from './request'
// 访问服务器的数据
export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}