import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  createState: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CREATE_STATE:
      return state.set('createState', action.data)
    default:
      return state
  }
}

export default reducer