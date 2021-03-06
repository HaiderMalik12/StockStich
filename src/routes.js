import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import SiginInPage from './containers/auth/SignInPage';
import DashboardPage from './components/dashboard/DashboardPage';
import Signout from './containers/auth/SignoutPage';
import SignUpPage from './containers/auth/SignUpPage';

import RequireAuthentication from './containers/auth/RequireAuthentication';


export default (
  <Route path="/" component={App}>

    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="signin" component={SiginInPage}/>
    <Route path="dashboard" component={RequireAuthentication(DashboardPage)}/>
    <Route path="signout" component={Signout} />
    <Route path="signup" components={SignUpPage}/>



  </Route>


);
