import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import CategoryPage from './components/category-section/CategorySection';
import SiginInPage from './containers/auth/SignInPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="category/women" component={CategoryPage}/>
    <Route path="signin" component={SiginInPage}/>



  </Route>
);
