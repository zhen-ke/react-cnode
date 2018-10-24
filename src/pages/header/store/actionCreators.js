import { actionTypes } from './index'

export const changeTab = (tab) => {
  return {
    type: actionTypes.CHANGE_TAB,
    data: tab
  }
}