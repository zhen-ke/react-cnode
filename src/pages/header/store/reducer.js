import { actionTypes } from './index'
import { fromJS } from 'immutable'

// '全部','精华','分享','问答','招聘'
const defaultState = fromJS({
  navList: [
    {
      type: 'all',
      text: '全部'
    },
    {
      type: 'good',
      text: '精华'
    },
    {
      type: 'share',
      text: '分享'
    },
    {
      type: 'ask',
      text: '问答'
    },
    {
      type: 'job',
      text: '招聘'
    },
  ],
  tab: 'all',
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TAB:
      return state.set('tab', action.data)
    default:
      return state
  }
}

export default reducer