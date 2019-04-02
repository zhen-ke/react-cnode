import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  login: {},
  isLogined: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set("login", action.data);
    case actionTypes.ISLOGINED:
      return state.set("isLogined", action.data);
    case actionTypes.SAVE_PATH:
      return state.set("path", action.data);
    default:
      return state;
  }
};

export default reducer;
