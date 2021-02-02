import { combineReducers } from "redux";
import user from './user'
import menu from './menu'
import tagsView from './tagsView'

export default combineReducers({
  user,
  menu,
  tagsView
})
