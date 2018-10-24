import React, { PureComponent ,Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import User from './../user'
import Footer from './../footer'

class Mine extends PureComponent {
  render() {
    let loginState = localStorage.user
    if(loginState) {
      return (
        <Fragment>
          <User mine={JSON.parse(localStorage.user).loginname}></User>
          <Footer></Footer>
        </Fragment>
        
      )
    }else {
      return <Redirect to='/login' />
    }
  }
}
export default Mine