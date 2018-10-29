import { combineReducers } from 'redux-immutable'
import { reducer as header } from './../pages/header/store'
import { reducer as topic } from './../pages/topic/store'
import { reducer as detail } from './../pages/detail/store'
import { reducer as user } from './../pages/user/store'
import { reducer as login } from './../common/login/store'
import { reducer as create } from './../pages/create/store'
import { reducer as message } from './../pages/message/store'
import { reducer as replies } from './../pages/replies/store'

const reducer = combineReducers({
  header,
  topic,
  detail,
  user,
  login,
  create,
  message,
  replies
})

export default reducer