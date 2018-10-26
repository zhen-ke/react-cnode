import React, { PureComponent ,Fragment} from 'react'
import {ErrorWrapper} from './style'
import TopNav from './../../pages/topnav'

class ErrorPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <TopNav title="错误页面"></TopNav>
        <ErrorWrapper>404</ErrorWrapper>
      </Fragment>
    )
  }
}

export default ErrorPage