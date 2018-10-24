import { actionTypes } from './index'
import axios from 'axios'
// import { fromJS } from 'immutable';

export const handleConfirm = (type,title,content) => {
  return (dispatch) => {
    axios.post("https://cnodejs.org/api/v1/topics", {
      title,
      tab: type,
      content,
      accesstoken: JSON.parse(localStorage.user).accesstoken
    }).then(it => {
      if (!it.data.success) {
        dispatch({
          type: actionTypes.CHANGE_CREATE_STATE,
          data: true
        })
      }else {
        dispatch({
          type: actionTypes.CHANGE_CREATE_STATE,
          data: false
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }
}