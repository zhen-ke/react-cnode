import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

class Message extends PureComponent {
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