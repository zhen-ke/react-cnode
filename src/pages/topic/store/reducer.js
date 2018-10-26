import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [], // 帖子列表
  page: 1, // 页数
  limit: 15, // 每页帖子数量
  tab: 'all', // 主题分类
  hasMore: true
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MORE:
      return state.set('topicList', state.get('topicList').concat(action.data)).set('page', action.page)
    case actionTypes.CHANGE_HAS_MORE:
      return state.set('hasMore', action.data)
    case actionTypes.CLEAR_TOPIC_LIST:
      return state.set('topicList', action.data)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.data).set('topicList', fromJS([]))
    default:
      return state
  }
}

export default reducer