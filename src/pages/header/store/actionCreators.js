import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

export const changeTab = (tab) => {
  return {
    type: actionTypes.CHANGE_TAB,
    data: tab
  }
}

export const getTopic = (tab = "all", page = '1', limit = "10", mdrender = "false") => {
  return (dispatch) => {
    axios.get("https://cnodejs.org/api/v1/topics", {
      params: {
        page,
        limit,
        tab,
        mdrender
      }
    }).then(it => {
      dispatch({
        type: actionTypes.GET_TOPIC,
        topic: fromJS(it.data.data)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}

export const loadMore = (tab, page) => {
  return (dispatch) => {
    axios.get("https://cnodejs.org/api/v1/topics", {
      params: {
        page,
        limit: 15,
        tab,
        mdrender: false
      }
    }).then(it => {
      if (it.data.data.length) {
        dispatch({
          type: actionTypes.LOAD_MORE,
          data: fromJS(it.data.data),
          page: ++page
        })
      }else {
        dispatch({
          type: actionTypes.CHANGE_HAS_MORE_STATE,
          data: false
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }
}