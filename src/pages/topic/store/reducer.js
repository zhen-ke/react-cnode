import { actionTypes } from './index'
import { fromJS } from 'immutable'

// '全部','精华','分享','问答','招聘'
const defaultState = fromJS({

})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer