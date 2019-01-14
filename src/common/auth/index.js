import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Auth extends Component {
  render() {
    let { isLogined } = this.props;
    return this.AuthFun({
      component: this.props.component,
      isLogined,
      ...this.props
    });
  }
  AuthFun({ component: Component, isLogined, ...rest }) {
    let isLogin = localStorage.user || isLogined;
    return (
      <Route
        {...rest}
        render={props =>
          isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapState = state => {
  return {
    isLogined: state.getIn(["login", "isLogined"])
  };
};

export default connect(
  mapState,
  null
)(Auth);
