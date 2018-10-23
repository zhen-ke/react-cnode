import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Message extends Component {
  render() {
    let loginState = localStorage.user
    if(loginState) {
      return (
        <p>Message</p>
      )
    }else {
      return <Redirect to='/login' />
    }
  }
}
export default Message