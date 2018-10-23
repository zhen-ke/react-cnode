import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

export const getUserInfo = (id) => {
  return (dispatch) => {
    axios.get("https://cnodejs.org/api/v1/user/" + id, {
      params: {
        accesstoken: '',
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