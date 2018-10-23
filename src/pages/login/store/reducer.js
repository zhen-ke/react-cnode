import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  login: {},
  isLogined: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('login',action.data).set('isLogined',true)
    default:
      return state
  }
}

export default reducer