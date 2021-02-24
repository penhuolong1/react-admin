import { combineReducers } from "redux";
import user from './user'
import menu from './menu'
import tagsView from './tagsView'
import monitor from './monitor'

export default combineReducers({
  user,
  menu,
  tagsView,
  monitor
})
