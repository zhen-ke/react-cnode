import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

export const login = (value) => {
  return (dispatch) => {
    axios.post("https://cnodejs.org/api/v1/accesstoken", {
      accesstoken: value
    }).then(it => {
      if (it.data.success) {
        dispatch({
          type: actionTypes.LOGIN,
          data: fromJS(Object.assign(it.data, { accesstoken: value }))
        })
        localStorage.user = JSON.stringify(Object.assign(it.data, { accesstoken: value }))
      } else {
        alert('accessToken错误')
      }
    }).catch(e => {
      console.log(e)
      alert('accessToken错误')
    })
  }
}