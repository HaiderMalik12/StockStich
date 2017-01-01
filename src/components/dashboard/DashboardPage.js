import React, {PropTypes} from 'react';

import DashboardHeader from './DashboardHeader';
import DashboardFooter from './DashboardFooter';

const DashboardPage = (props) => {

  return (
    <div>
      <DashboardHeader/>
      <DashboardFooter/>
      <div className="page-logo">
        <a href="index.html">
          <img src="../assets/layouts/layout/img/logo.png" alt="logo" className="logo-default" /> </a>
        <div className="menu-toggler sidebar-toggler">
          <span></span>
        </div>
      </div>
    </div>
  );

};


export default DashboardPage;
