import { actionTypes } from './index'
import axios from './../../../utils/http'
import { fromJS } from 'immutable';

export const getUserInfo = (id) => {
  return (dispatch) => {
    axios.get("/user/" + id, {
      params: {
        mdrender: true
      }
    }).then(it => {
      dispatch({
        type: actionTypes.GET_USER_INFO,
        data: fromJS(it.data.data)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}