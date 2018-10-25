import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  messageState :false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_MESSAGTE:
      return state.set('messageState',action.data)
    default:
      return state
  }
}

export default reducer