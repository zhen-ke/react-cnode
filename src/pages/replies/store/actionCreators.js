// import { actionTypes } from './index'
import axios from './../../../utils/http'
// import { fromJS } from 'immutable';
import { actionCreators as detailActionCreators } from './../../detail/store'
import { T } from 'react-toast-mobile';

export const sendReplies = (id, reply_id = '', content) => {
  return (dispatch) => {
    axios.post(`/topic/${id}/replies`, {
      content,
      reply_id
    }).then(it => {
      if (it.data.success) {
        dispatch(detailActionCreators.getTopicDetail(id))
      }
    }).catch(e => {
      T.notify('发表失败')
      console.log(e)
    })
  }
}