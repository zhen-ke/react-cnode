import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

const loadMore = (data,page) => {
  return {
    type: actionTypes.LOAD_MORE,
    data: fromJS(data),
    page
  }
}

const changeHasMore = (data) => {
  return {
    type: actionTypes.CHANGE_HAS_MORE,
    data
  }
}

export const changePage = (data) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    data
  }
}

export const clearTopicList = (data) => {
  return {
    type: actionTypes.CLEAR_TOPIC_LIST,
    data: fromJS(data)
  }
}

export const getTopic = (page, limit, tab) => {
  return (dispatch) => {
    axios.get("https://cnodejs.org/api/v1/topics", {
      params: {
        page,
        limit,
        tab,
        mdrender: false
      }
    }).then(it => {
      let data = it.data.data
      if(data.length) {
        dispatch(loadMore(data,++page))
      }else {
        dispatch(changeHasMore(false))
      }
    }).catch(e => {
      console.log(e)
    })
  }
}