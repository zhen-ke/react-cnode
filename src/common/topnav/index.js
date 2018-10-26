import React, { PureComponent, Fragment } from 'react'
import { TopNavWarpper, Back} from './style'
import {withRouter} from 'react-router-dom'

class TopNav extends PureComponent {
  //this.props.match.path = "/user/:id"
  // /mine
  // /detail/:id
  render() {
    let loginState = localStorage.user
    return (
      <Fragment>
        <TopNavWarpper>
          <Back onClick={() => this.goBack()}></Back>
          {this.props.match.path === '/mine' ? (<span>个人中心</span>) : (<span>{this.props.title}</span>)}
          {this.props.match.path === '/mine' && loginState ? (<span onClick={() => this.quite()}>退出</span>) : (<span></span>)}
        </TopNavWarpper>
      </Fragment>
    )
  }

  goBack = () => {
    this.props.history.goBack();
  }
  quite() {
    localStorage.user = ''
    this.props.history.push('/')
  }
}
export default withRouter(TopNav)