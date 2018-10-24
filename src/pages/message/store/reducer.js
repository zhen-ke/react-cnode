import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  messageList: {}
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_MESSAGTE:
      return state.set('messageList',action.data)
    default:
      return state
  }
}

export default reducer