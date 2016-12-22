import React,{PropTypes} from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';

class SignInPage extends React.Component {

  constructor(props){
    super(props);

    this.formHandleSubmit= this.formHandleSubmit.bind(this);
  }

  formHandleSubmit({email,password}){

    this.props.actions.login({email,password});

  }
  render(){

    const {handleSubmit} = this.props;

    return(
      <div>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb--ys pull-left">
            <li className="home-link"><a href="index.html" className="icon icon-home" /></li>
            <li className="active">Account Login</li>
          </ol>
        </div>
      </div>
        <div id="pageContent">
          <div className="container">
            {/* title */}
            <div className="title-box">
              <h1 className="text-center text-uppercase title-under">LOGIN OR CREATE AN ACCOUNT</h1>
            </div>
            {/* /title */}
            <div className="row">
              <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xl-offset-2">
                <div className="login-form-box">
                  <h3 className="color small">NEW CUSTOMER</h3>
                  <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                  <br />
                  <button className="btn btn--ys btn--xl"><span className="icon icon-person_add" />CREATE AN ACCOUNT</button>
                </div>
              </section>
              <div className="divider divider--md visible-sm visible-xs" />
              <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <div className="login-form-box">
                  <h3 className="color small">SignIn</h3>
                  <p>
                    If you have an account with us, please log in.
                  </p>
                  <form onSubmit={handleSubmit(this.formHandleSubmit)} id="form-returning">
                    <div className="form-group">
                      <label htmlFor="email">Email Address <sup>*</sup></label>
                      <Field name="email" component="input" type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password <sup>*</sup></label>
                      <Field name="password" component="input" type="password" className="form-control" id="password" />
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <button type="submit" className="btn btn--ys btn-top btn--xl"><span className="icon icon-vpn_key" />Login</button>
                      </div>
                      <div className="divider divider--md visible-xs" />
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="pull-right note btn-top">* Required Fields</div>
                      </div>
                    </div>
                    <p className="btn-top">
                      <a className="link-color" href="#">Forgot Your Password?</a>
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

SignInPage.propTypes = {

  authenticated:PropTypes.bool,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
 return {
   authenticated:state.authenticated
 };
}

function mapDispatchToProps(dispatch) {
 return {
   actions:bindActionCreators(actions,dispatch)
 };
}

const _SignInPage = reduxForm({

  form:'signin'

})(SignInPage);

export default connect(mapStateToProps,mapDispatchToProps)(_SignInPage);

//export default SignInPage;
