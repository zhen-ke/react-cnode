import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

export const getTopicDetail = (id) => {
  return (dispatch) => {
    axios.get("https://cnodejs.org/api/v1/topic/" + id, {
      params: {
        accesstoken: '',
        mdrender: true
      }
    }).then(it => {
      dispatch({
        type: actionTypes.GET_TOPIC_DETAIL,
        data: fromJS(it.data.data)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}