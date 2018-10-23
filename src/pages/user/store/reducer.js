import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  userInfo: {}
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INFO:
      return state.set('userInfo',action.data)
    default:
      return state
  }
}

export default reducer