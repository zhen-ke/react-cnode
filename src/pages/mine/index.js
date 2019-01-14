import React, { PureComponent, Fragment } from "react";
import User from "./../user";
import Footer from "./../../common/footer";
import { connect } from "react-redux";

class Mine extends PureComponent {
  render() {
    let { userInfo } = this.props;
    let newUserInfo = userInfo.toJS();
    return (
      <Fragment>
        <User
          mine={
            newUserInfo.loginname || JSON.parse(localStorage.user).loginname
          }
        />
        <Footer />
      </Fragment>
    );
  }
}

const mapState = state => {
  return {
    userInfo: state.getIn(["login", "login"])
  };
};

export default connect(
  mapState,
  null
)(Mine);
