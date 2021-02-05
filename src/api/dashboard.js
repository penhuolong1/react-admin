import request from '@/utils/request'

// 获取列表信息
export function dashboardList(data) {
  return request({
    url: '/dashboard/list',
    method: 'get',
  })
}
