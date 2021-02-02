import * as types from "../actions-type"
import {findPathByLabelToObj} from '@/utils/tools.js'
import menuList from '@/config/menuConfig.js'
import store from '../index'


// 遍历获取导航菜单
export const dealTagsViewList = (list, item) => (dispatch) => {
  const title = findPathByLabelToObj(item.pathname, menuList).title
  let list1 = [...list]
  if (!list1 || list1.length === 0) {
    list1.push({
      title: title,
      path: item.pathname,
      active: true
    })
  } else {
    list1 = list1.map(item1 => {
      item1.active = false
      return item1
    })
    const index = list1.findIndex(item1 => item1.path === item.pathname)
    if (index === -1) {
      list1.push({
        title: title,
        path: item.pathname,
        active: true
      })
    } else {
      list1[index].active = true
    }
  }
  dispatch(setTagsViewList(list1))
}

// 删除导航标签
export const delTags = (path) => (dispatch) => {
  // let list1 = [...list]
  let list = [...store.getState().tagsView.tagsViewList || []]
  const obj = list.find(item1 => item1.path === path)
  const index = list.findIndex(item1 => item1.path === path)
  list.splice(index, 1)
  let path1 = null
  if (obj.active) {
    list[list.length - 1].active = true
    path1 = list[list.length - 1].path
  }
  dispatch(setTagsViewList(list))
  return path1
}

export const setTagsViewList = tagsViewList => {
  return {
    type: types.TAGS_VIEW_LIST,
    tagsViewList
  }
}
