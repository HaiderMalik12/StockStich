import 'babel-polyfill';
import  React from  'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {AUTH_USER} from './constants/actionTypes';
import configureStore from './store/configureStore';

//Vendor Css
require('./assets/vendor/bootstrap/css/bootstrap.css');
require('./assets/vendor/font-awesome/css/font-awesome.css');
require('./assets/vendor/simple-line-icons/css/simple-line-icons.css');
require('./assets/vendor/owl.carousel/assets/owl.carousel.min.css');
require('./assets/vendor/owl.carousel/assets/owl.theme.default.min.css');
require('./assets/vendor/magnific-popup/magnific-popup.css');

//Theme Css
require('./assets/css/theme.css');
require('./assets/css/theme-elements.css');
require('./assets/css/theme-blog.css');
require('./assets/css/theme-shop.css');
require('./assets/css/theme-animate.css');

//Current Page Css
//require('./assets/vendor/rs-plugin/css/settings.css');
require('./assets/vendor/rs-plugin/css/layers.css');
require('./assets/vendor/rs-plugin/css/navigation.css');
require('./assets/vendor/circle-flip-slideshow/css/component.css');

//Skin Css
require('./assets/css/skins/default.css');

//Theme Custom Css
require('./assets/css/custom.css');


const store = configureStore();

const token = localStorage.getItem('token');

// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({type: AUTH_USER});
}

render(
  <Provider store={store}>

    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
