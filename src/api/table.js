import request from '@/utils/request'

/**
 * 查询列表
 * @param {Object} data 搜索条件
 */
export function tableList(data) {
  return request({
    url: '/table/list',
    method: 'get',
    data
  })
}

/**
 * 删除
 */
export function deleteItem(data) {
  return request({
    url: '/table/del',
    method: 'get',
    headers: {
      isLoading: true,
      loadingText: '正在删除...'
    },
    data
  })
}

/**
 * 编辑
 */
export function editItem(data) {
  return request({
    url: '/table/edit',
    method: 'post',
    data
  })
}

/**
 * 通过id查找当个表格信息
 * @param {*} data 
 */
export function findTableById(data) {
  return request({
    url: '/table/findById',
    method: 'get',
    data
  })
}
