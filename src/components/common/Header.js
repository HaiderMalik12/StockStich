import React , {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import MainLogo from './MainLogo';
import TopRightBar from './TopRightBar';
import NavBarPage from '../navbar/NavbarPage';

const Header = () => {

      return (
        <div className="header-wrapper">
          <header id="header">
            <div className="container">
              <div className="row">
                <MainLogo/>
                <TopRightBar/>
              </div>
            </div>
            <div className="stuck-nav">
              <div className="container offset-top-5">

                 <NavBarPage/>
              </div>
            </div>
          </header>
        </div>
      );


}


export  default  Header;
