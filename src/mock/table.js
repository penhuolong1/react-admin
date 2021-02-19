import Mock from 'mockjs'
const list = []
const count = 100
Mock.setup({
  timeout: '1000-2000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@guid()',
    title: '@ctitle(5, 10)',
    author: '@cname',
    readings: "@integer(300, 5000)",
    "star|1-3": "★",
    "status|1": ["published", "draft"],
    date: "@datetime",
  }))
}

export const tableList = (config) => {
  const params = JSON.parse(config.body)
  const filterList = list.filter(item => {
    if (params?.star && item.star.length !== params?.star) return false;
    if (params?.status && item.status !== params?.status) return false;
    if (params?.title && item.title.indexOf(params?.title) < 0) return false;
    return true;
  })
  return {
    state: 0,
    data: filterList
  };
}

export const deleteItem = (config) => {
  const { id } = JSON.parse(config.body);
  const index = list.findIndex(item => item.id === id)
  list.splice(index, 1);
  return {
    state: 0,
    msg: '删除成功'
  };
}

export const editItem = (config) => {
  const data = JSON.parse(config.body);
  const { id } = data;
  const index = list.findIndex(item => item.id === id)
  list.splice(index, 1, data);
  return {
    state: 0,
    msg: '修改成功'
  };
}
