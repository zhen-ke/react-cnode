import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'; // BrowserRouter HashRouter
import Topic from './pages/topic'
import Detail from './pages/detail'
import User from './pages/user'
import Login from './pages/login'
import Create from './pages/create'
import Mine from './pages/mine'
import Message from './pages/message'
import ErrorPage from './common/errorPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/" exact component={Topic}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/user/:id" component={User}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/create" component={Create}></Route>
              <Route path="/mine" component={Mine}></Route>
              <Route path="/message" component={Message}></Route>
              <Route path="*" component={ ErrorPage } />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider >
    );
  }
}

export default App;
