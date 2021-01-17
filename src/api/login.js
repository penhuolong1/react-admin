import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户信息
 * @param {string} token 
 */
export function reqLoginInfo(params) {
  return request({
    url: '/userInfo',
    method: 'get',
    data: params
  })
}

