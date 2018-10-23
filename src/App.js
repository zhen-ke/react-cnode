import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter, Route, Switch } from 'react-router-dom'; // BrowserRouter
import Topic from './pages/topic'
import Detail from './pages/detail'
import User from './pages/user'
import Footer from './pages/footer'
import Login from './pages/login'
import Create from './pages/create'
import Mine from './pages/mine'
import Message from './pages/message'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Fragment>
            <Switch>
              <Route path="/" exact component={Topic}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/user/:id" component={User}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/create" component={Create}></Route>
              <Route path="/mine" component={Mine}></Route>
              <Route path="/message" component={Message}></Route>
            </Switch>
            <Footer></Footer>
          </Fragment>
        </HashRouter>
      </Provider >
    );
  }
}

export default App;
