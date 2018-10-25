import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicDetailList: {}
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOPIC_DETAIL:
      return state.set('topicDetailList',action.data)
    default:
      return state
  }
}

export default reducer