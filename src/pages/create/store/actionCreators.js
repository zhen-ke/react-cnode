import { actionTypes } from './index'
// import { fromJS } from 'immutable';
import axios from './../../../utils/http'
import { T } from 'react-toast-mobile';

export const handleConfirm = (type,title,content) => {
  return (dispatch) => {
    axios.post("/topics", {
      title,
      tab: type,
      content
    }).then(it => {
      console.log(it)
      T.notify('发表成功')
    }).catch(e => {
      T.notify('发表失败')
      console.log(e)
    })
  }
}