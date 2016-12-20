import React from 'react';
import {IndexLink} from 'react-router';

class MainLogo extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4 col-lg-6 col-xl-7">
        <IndexLink to="/" activeClassName="active"><img className="logo replace-2x img-responsive" src="assets/images/logo.png" alt /></IndexLink>
      </div>
    );
  }
}

export default MainLogo;

