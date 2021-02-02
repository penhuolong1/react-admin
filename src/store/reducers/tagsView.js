
import * as types from '../actions-type'
const initState = {
  tagsViewList: []
};
export default function tagsView(state = initState, action) {
  switch (action.type) {
    case types.TAGS_VIEW_LIST:
      return {
        ...state,
        tagsViewList: action.tagsViewList
      };
    default:
      return state;
  }
}
