import { actionTypes } from './index'
import axios from './../../../utils/http'
import { fromJS } from 'immutable';
import { T } from 'react-toast-mobile';

export const login = (value) => {
  return (dispatch) => {
    axios.post("/accesstoken", {
      accesstoken: value
    }).then(it => {
      if (it.data.success) {
        dispatch({
          type: actionTypes.LOGIN,
          data: fromJS(Object.assign(it.data, { accesstoken: value }))
        })
        localStorage.user = JSON.stringify(Object.assign(it.data, { accesstoken: value }))
      } else {
        T.notify('accessToken错误')
      }
    }).catch(e => {
      console.log(e)
      T.notify('accessToken错误')
    })
  }
}