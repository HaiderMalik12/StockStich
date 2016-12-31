import React, {PropTypes} from  'react';

import Header from './common/Header';
import Footer from './common/Footer';
import DashboardHeader from './dashboard/DashboardHeader';
import DashboardFooter from './dashboard/DashboardFooter';


class App extends React.Component {


  renderContent() {

    const path = this.props.location.pathname;

    switch (path) {

      case '/':
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
      case '/dashboard':
        return (
          <div className="container-fluid">
            <DashboardHeader/>
            {this.props.children}
            <br/>
            <br/>
            <br/>
            <hr/>
            <DashboardFooter/>
          </div>
        );

    }

  }

  render() {

   return this.renderContent();

  }
}

App.propTypes = {
  children:PropTypes.object.isRequired
};


export  default  App;

