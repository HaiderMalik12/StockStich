import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from  'redux';
import * as actions from '../../actions/authActions';

class Signout extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  componentWillMount() {
    debugger;
    this.props.actions.signOut();
  }

  componentDidMount(){
    this.context.router.push('/');
  }


}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signout);