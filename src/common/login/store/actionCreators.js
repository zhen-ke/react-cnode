import { actionTypes } from './index'
import axios from './../../../utils/http'
import { fromJS } from 'immutable';
import { T } from 'react-toast-mobile';

export const isLogined = (data) => {
  return {
    type: actionTypes.ISLOGINED,
    data
  }
}

export const savePath = (data) => {
  return {
    type: actionTypes.SAVE_PATH,
    data
  }
}

export const login = (value) => {
  return (dispatch) => {
    axios.post("/accesstoken", {
      accesstoken: value
    }).then(it => {
      if (it.data.success) {
        dispatch({
          type: actionTypes.LOGIN,
          data: fromJS(it.data)
        })
        dispatch(isLogined(true))
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