import { actionTypes } from './index'
import axios from './../../../utils/http'
import { fromJS } from 'immutable';

export const getTopicDetail = (id) => {
  return (dispatch) => {
    axios.get("/topic/" + id, {
      params: {
        mdrender: true
      }
    }).then(it => {
      dispatch({
        type: actionTypes.GET_TOPIC_DETAIL,
        data: fromJS(it.data.data)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}