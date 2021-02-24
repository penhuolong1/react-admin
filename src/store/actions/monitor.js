import * as types from "../actions-type";
export const addBug = (bug) => {
  return {
    type: types.BUG_ADD_BUG,
    bug
  };
};