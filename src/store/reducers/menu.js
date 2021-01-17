
import * as types from '../actions-type'
const initState = {
  collapsed: false
};
export default function menu(state = initState, action) {
  switch (action.type) {
    case types.MENU_COLLAPSED:
      return {
        ...state,
        collapsed: action.collapsed
      };
    default:
      return state;
  }
}
