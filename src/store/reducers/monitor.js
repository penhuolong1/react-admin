import * as types from "../actions-type";
const initState = {
  bugList: [],
};
export default function app(state = initState, action) {
  switch (action.type) {
    case types.BUG_ADD_BUG:
      return {
        bugList: [...state.bugList, action.bug],
      };
    default:
      return state;
  }
}
