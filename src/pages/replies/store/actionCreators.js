import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';
import qs from "qs";
import { actionCreators as detailActionCreators } from './../../detail/store'

export const sendReplies = (id, reply_id = '', content) => {
  return (dispatch) => {
    axios.post(`https://cnodejs.org/api/v1/topic/${id}/replies`, qs.stringify({
      accesstoken: JSON.parse(localStorage.user).accesstoken,
      content,
      reply_id
    })).then(it => {
      if (it.data.success) {
        dispatch({
          type: actionTypes.GET_MESSAGTE,
          data: true
        })
        dispatch(detailActionCreators.getTopicDetail(id))
      } else {
        dispatch({
          type: actionTypes.GET_MESSAGTE,
          data: false
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }
}