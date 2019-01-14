import React, { PureComponent, Fragment } from "react";
import { ErrorWrapper } from "./style";
import TopNav from "./../topnav";

class ErrorPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <TopNav title="错误页面" />
        <ErrorWrapper>404</ErrorWrapper>
      </Fragment>
    );
  }
}

export default ErrorPage;
