import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, Input, Button, LoginBack } from './style'

class Login extends Component {
  render() {
    let { isLogined } = this.props
    if (!isLogined) {
      return (
        <LoginBack>
          <LoginWrapper>
            <Input placeholder='accessToken' ref={(input) => { this.username = input }} />
            <Button onClick={() => { this.props.login(this.username) }}>登录</Button>
          </LoginWrapper>
        </LoginBack>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => {
  return {
    isLogined: state.getIn(['login', 'isLogined'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(usernameElem) {
      dispatch(actionCreators.login(usernameElem.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)