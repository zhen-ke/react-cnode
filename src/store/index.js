import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk  from 'redux-thunk' // 默认action只能是对象，thunk能让action是一个函数

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store