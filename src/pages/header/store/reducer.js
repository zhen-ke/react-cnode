import { actionTypes } from "./index";
import { fromJS } from "immutable";

// '全部','精华','分享','问答','招聘'
const defaultState = fromJS({
  tab: "all"
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TAB:
      return state.set("tab", action.data);
    default:
      return state;
  }
};

export default reducer;
