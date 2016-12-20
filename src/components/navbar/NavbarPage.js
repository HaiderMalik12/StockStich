import React from 'react';

import LeftNavBar from './LeftNavBar';
import RightNavBar from './RightNavBar';


class NavbarPage extends React.Component {

  render(){
    return(
      <div className="row">

            <LeftNavBar/>
            <RightNavBar/>
      </div>


    );

  }
}

export default NavbarPage;
