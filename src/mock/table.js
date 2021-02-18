import Mock from 'mockjs'
const list = []
const count = 100

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

export const tableList = () => {
  return {
    state: 0,
    data: list
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
