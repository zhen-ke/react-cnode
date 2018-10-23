import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Mine extends Component {
  render() {
    let loginState = localStorage.user
    if(loginState) {
      return  <Redirect to={'/user/' + JSON.parse(localStorage.user).loginname} />
    }else {
      return <Redirect to='/login' />
    }
  }
}
export default Mine