import * as types from "../actions-type"
import { API_STATE_OK } from '@/utils/constVal.js'
import { reqLoginInfo, login } from '@/api/login'


// 登录
export const reqLogin = (params) => (dispatch) => {
  return new Promise((resolve, reject) => {
    login(params).then((res) => {
      if (res.state === API_STATE_OK) {
        dispatch(setUserToken(res.token))
        localStorage.setItem('token', res.token)
        resolve(res)
      } else {
        reject(res.message)
      }
    })
  })
}

// 获取用户信息
export const getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLoginInfo({token}).then((res) => {
      if (res.state === API_STATE_OK) {
        dispatch(setUserInfo(res.userInfo))
        resolve(res)
      } else {
        reject(res.message)
      }
    })
  })
}

// 退出
export const logout = () => (dispatch) => {
  return new Promise((resolve) => {
    dispatch(setUserToken())
    localStorage.removeItem('token')
    resolve()
  })
}

export const setUserInfo = userInfo => {
  return {
    type: types.USER_SET_USER_INFO,
    userInfo
  }
}

export const setUserToken = token => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token
  }
}