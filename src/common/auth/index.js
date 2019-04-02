import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators as loginActionCreators } from "./../login/store";

// 鉴权方案一
// class PriveateRoute extends Component {
//   render() {
//     let { isLogined } = this.props;
//     return this.AuthFun({
//       component: this.props.component,
//       isLogined,
//       ...this.props
//     });
//   }
//   AuthFun({ component: Component, isLogined, ...rest }) {
//     let isLogin = localStorage.user || isLogined;
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isLogin ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }
// }

// 鉴权方案二
// class PriveateRoute extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false
//     };
//   }
//   componentDidMount() {
//     this.getAuth();
//   }
//   render() {
//     let { component: Component, path = "/" } = this.props;
//     let { isLogin } = this.state;
//     return isLogin ? (
//       <Route path={path} render={props => <Component {...props} />} />
//     ) : (
//       "请重新登入"
//     );
//   }
//   getAuth() {
//     let { isLogined } = this.props;
//     let isLogin = localStorage.user || isLogined;
//     this.setState({
//       isLogin
//     });
//     if (!isLogin) {
//       const { history } = this.props;
//       history.replace("/login");
//       // setTimeout(() => {
//       //   history.replace("/login");
//       // }, 1000);
//     }
//   }
// }

// 鉴权方案三
const WithPriveateRoute = WrappedComponent => {
  return class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogin: false
      };
    }
    componentDidMount() {
      this.getAuth();
    }
    render() {
      const { pathname } = this.props.location;
      this.props.savePath(pathname)
      return <WrappedComponent {...this.props} />;
    }
    getAuth() {
      let { isLogined } = this.props;
      let isLogin = localStorage.user || isLogined;
      this.setState({
        isLogin
      });
      if (!isLogin) {
        const { history } = this.props;
        history.replace("/login");
      }
    }
  };
};
const PriveateRoute = WithPriveateRoute(Route);

const mapState = state => {
  return {
    isLogined: state.getIn(["login", "isLogined"])
  };
};

const mapDispatch = dispatch => {
  return {
    savePath(path) {
      dispatch(loginActionCreators.savePath(path));
    }
  };
};

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(PriveateRoute)
);
