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
  topic: [],
  page: 1, // 页数
  limit: 10, // 主题分类
  tab: 'all', // 每一页的主题数量
  mdrender: false, // markdown
  hasMoreItems: true
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOPIC:
      return state.set('topic', action.topic)
    case actionTypes.CHANGE_TAB:
      return state.set('tab', action.data).set('page',1)
    case actionTypes.CHANGE_HAS_MORE_STATE:
      return state.set('hasMoreItems', action.data)
    case actionTypes.LOAD_MORE:
      return state.set('topic', state.get('topic').concat(action.data)).set('page',action.page)
    default:
      return state
  }
}

export default reducer