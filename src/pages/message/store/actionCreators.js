import { actionTypes } from './index'
import axios from './../../../utils/http'
import { fromJS } from 'immutable';

const getMessage = () => {
  return (dispatch) => {
    axios.get("/messages", {
      params: {}
    }).then(it => {
      let data = it.data.data
      dispatch({
        type: actionTypes.GET_MESSAGTE,
        data: fromJS(data)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}

export const getMessageCount = () => {
  return (dispatch) => {
    axios.get("/message/count", {
      params: {
      }
    }).then(it => {
      dispatch(getMessage())
    }).catch(e => {
      console.log(e)
    })
  }
}