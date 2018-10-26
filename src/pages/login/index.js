import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, Input, Button, LoginBack } from './style'
import TopNav from './../../common/topnav'

class Login extends PureComponent {
  render() {
    let { isLogined } = this.props
    if (!isLogined) {
      return (
        <LoginBack>
          <TopNav title={'登录'}></TopNav>
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