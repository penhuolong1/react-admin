import * as types from "../actions-type"

// 展开和收缩菜单
export const toggleCollapsed = (collapsed) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch(setCollapsed(collapsed))
    resolve()
  })
}

export const setCollapsed = collapsed => {
  return {
    type: types.MENU_COLLAPSED,
    collapsed
  }
}
