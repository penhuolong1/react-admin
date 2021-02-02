
import * as types from '../actions-type'
const initState = {
  userInfo: {},
  token: localStorage.getItem('token') || ''
};
export default function user(state = initState, action) {
  switch (action.type) {
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}
