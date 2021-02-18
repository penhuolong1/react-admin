import request from '@/utils/request'

export function tableList(data) {
  return request({
    url: '/table/list',
    method: 'get',
    data
  })
}
