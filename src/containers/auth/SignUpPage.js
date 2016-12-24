/*
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import {Field, reduxForm} from 'redux-form';
import SignupPageCss from './SignUpPage.css';

class SignUpPage extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.renderField = this.renderField.bind(this);
    this.handleFormSubmit= this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.actions.signUp(formProps);
  }


  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  );


  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (

      <div>
        <div className="breadcrumbs">
          <div className="container">
            <ol className="breadcrumb breadcrumb--ys pull-left">
              <li className="home-link"><a href="index.html" className="icon icon-home"/></li>
              <li className="active">Account SignUp</li>
            </ol>
          </div>
        </div>
        <div id="pageContent">
          <div className="container">
            {/!* title *!/}
            <div className="title-box">
              <h1 className="text-center text-uppercase title-under">Sign Up</h1>
            </div>
            {/!* /title *!/}
            <div className="row">
              <section
                className=" col-sm-offset-2 col-sm-8  col-md-offset-2 col-md-8 col-lg-8 col-lg-offset-2 col-xl-4">
                <div className="login-form-box">
                  <h3 className="color small">Sign Up</h3>

                  <form onSubmit={handleSubmit(this.handleFormSubmit())}>
                    <Field name="username" type="text" component={this.renderField} label="Username"/>
                    <Field name="email" type="email" component={this.renderField} label="Email"/>
                    <Field name="age" type="number" component={this.renderField} label="Age"/>
                    <div>
                      <button type="submit" disabled={submitting}>Submit</button>
                      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>
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
SignUpPage.propTypes = {
  //myProp:PropTypes.string.isRequired
};


const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings
};

function mapStateToProps(state, ownProps) {

  return {
    errorMessage: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}
const _SignUpPage = reduxForm({

  form: 'signup',
  validate,
  warn

})(SignUpPage);


export default connect(mapStateToProps, mapDispatchToProps)(_SignUpPage);
*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import SignUpCss from './SignUpPage.css';

const validate = values => {

  const errors = {};

  if(!values.password){
    errors.password = 'Please enter a password';
  }

  if(!values.city){
    errors.city = 'Please enter your city';
  }

  if(!values.firstName){
    errors.firstName = 'Please enter your firstName';
  }


  if(!values.lastName){
    errors.lastName = 'Please enter your lastName';
  }


  if(!values.phone){
    errors.phone = 'Please enter your phone';
  }

  if(!values.passwordConfirm){
    errors.passwordConfirm = 'Please enter a confirm password';
  }
  if(values.password !== values.passwordConfirm){
    errors.passwordConfirm = 'passwords must matched';
  }

  if (!values.email) {
    errors.email = 'Please enter a email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }


  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};



class SignUpPage extends React.Component {

  constructor(props){

    super(props);

    this.renderField = this.renderField.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderAlert = this.renderAlert.bind(this);


  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }


    handleFormSubmit(formProps) {

      console.log(formProps);

      this.props.actions.signUp(formProps);

  }

  renderField = ({ id,input, htmlFor, label, type, meta: { touched, error, warning } }) => (

<div>
    <div className="form-group">
      <label htmlFor={htmlFor}>{label}</label>
      <input {...input} type={type} className="form-control" id={id}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
<br/>
</div>
);

  render() {

    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (

    <div>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb--ys pull-left">
            <li className="home-link"><a href="index.html" className="icon icon-home"/></li>
            <li className="active">Account SignUp</li>
          </ol>
        </div>
      </div>
      <div id="pageContent">
        <div className="container">

          <div className="title-box">
            <h1 className="text-center text-uppercase title-under">Sign Up</h1>
          </div>

          <div className="row">
            <section
              className=" col-sm-offset-2 col-sm-8  col-md-offset-2 col-md-8 col-lg-8 col-lg-offset-2 col-xl-4">
              <div className="login-form-box">
                <h3 className="color small">Sign Up</h3>

                <form onSubmit={handleSubmit(this.handleFormSubmit)} id="form-returning">


                    <Field name="firstName" type="text" component={this.renderField}  id="firstName" label="FirstName" htmlFor="firstName"/>

                    <Field name="lastName" type="text" component={this.renderField}  id="lastName" label="LastName" htmlFor="lastName"/>

                    <Field name="email" type="email" component={this.renderField}  id="email" label="Email" htmlFor="email"/>

                    <Field name="password" type="password" component={this.renderField} id="password" label="Password" htmlFor="password"/>

                    <Field name="passwordConfirm" type="password" component={this.renderField}  id="confirmPassword" label="Confirm Password" htmlFor="confirmPassword"/>

                    <Field name="city" type="text" component={this.renderField} id="city" label="City" htmlFor="city"/>

                    <Field name="phone" type="text" component={this.renderField} id="phone" label="Phone" htmlFor="phone"/>


                  {this.renderAlert()}

                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <button type="submit" disabled={submitting} className="btn btn--ys btn-top btn--xl"><span className="icon icon-vpn_key" />Sign Up</button>

                    </div>
                    <div className="divider divider--md visible-xs" />
                    <div className="col-xs-12 col-sm-6 col-md-6">
                    </div>
                  </div>



                  <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                  </div>
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

const _SignUpPage = reduxForm({
  form: 'signup',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SignUpPage);

function mapStateToProps(state) {

  return {
    errorMessage : state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(authActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(_SignUpPage);
