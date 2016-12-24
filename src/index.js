import 'babel-polyfill';
import  React from  'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {AUTH_USER} from './constants/actionTypes';

import configureStore from './store/configureStore';

const store = configureStore();

const token = localStorage.getItem('token');

// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>

    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
