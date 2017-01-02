import React, {PropTypes} from  'react';

import Header from './common/Header';
import Footer from './common/Footer';

import DashboardPage from './dashboard/DashboardPage';

import $ from 'jquery';

class App extends React.Component {


  renderContent() {

    const path = this.props.location.pathname;

    if (path === '/dashboard') {

      return <DashboardPage/>

    }
    else {

      return (
        <div className="container-fluid">
          <Header/>
          {this.props.children}
          <br/>
          <br/>
          <br/>
          <hr/>
          <Footer/>
        </div>
      );
    }

  }

  render() {

    return this.renderContent();

  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export  default  App;

