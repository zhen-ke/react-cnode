import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

export const getMessage = (page, limit, tab) => {
  return (dispatch) => {
    axios.get("https://cnodejs.org/api/v1/messages", {
      params: {
        accesstoken: JSON.parse(localStorage.user).accesstoken
      }
    }).then(it => {
      let data = it.data.data
      dispatch({
        type: actionTypes.GET_MESSAGTE,
        data: fromJS(data)
      })
      // if(data.length) {
      //   dispatch(loadMore(data,++page))
      // }else {
      //   dispatch(changeHasMore(false))
      // }
    }).catch(e => {
      console.log(e)
    })
  }
}