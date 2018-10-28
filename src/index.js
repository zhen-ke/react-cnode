import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.js';
import App from './App';
import { GlobalStyle, GithubMarkdownCss, Icon } from './style.js' // 添加全局样式
import Toast from 'react-toast-mobile';
import 'react-toast-mobile/lib/react-toast-mobile.css';
import * as serviceWorker from './serviceWorker';

const Apps = () => {
  return (
    <Fragment>
      <Toast />
      <GlobalStyle />
      <Icon/>
      <GithubMarkdownCss />
      <App />
    </Fragment>
  )
}

ReactDOM.render(<Apps />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
