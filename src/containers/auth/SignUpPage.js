import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import SignUpCss from './SignUpPage.css';
import {Link} from 'react-router';


class SignUpPage extends React.Component {

  constructor(props) {

    super(props);

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

  renderField = ({id, input, htmlFor, label, type, meta: {touched, error, warning}}) => (

    <div className="form-group mb-lg">
      <label htmlFor={htmlFor}>{label}</label>
      <input {...input} type={type} className="form-control input-lg" id={id} style={{width: 500}}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}

    </div>

  );

  render() {

    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (

      <div id="signup-header">

        <section className="body-sign">
          <div className="center-sign">
            <div className="panel panel-sign">
              <div className="panel-title-sign mt-xl text-right">

              </div>
              <div className="panel-body">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>


                  <Field name="firstName" type="text" component={this.renderField} id="firstName" label="FirstName"
                         htmlFor="firstName"/>

                  <Field name="lastName" type="text" component={this.renderField} id="lastName" label="LastName"
                         htmlFor="lastName"/>

                  <Field name="email" type="email" component={this.renderField} id="email" label="Email"
                         htmlFor="email"/>

                  <Field name="password" type="password" component={this.renderField} id="password" label="Password"
                         htmlFor="password"/>

                  <Field name="passwordConfirm" type="password" component={this.renderField} id="confirmPassword"
                         label="Confirm Password" htmlFor="confirmPassword"/>

                  <Field name="city" type="text" component={this.renderField} id="city" label="City" htmlFor="city"/>

                  <Field name="phone" type="text" component={this.renderField} id="phone" label="Phone"
                         htmlFor="phone"/>

                  {this.renderAlert()}

                  <div className="row">
                    <div className="col-sm-8">
                      <div className="checkbox-custom checkbox-default">
                        <input id="AgreeTerms" name="agreeterms" type="checkbox"/>
                        <label htmlFor="AgreeTerms">I agree with <a href="#">terms of use</a></label>
                      </div>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button type="submit" disabled={submitting} className="btn btn-primary hidden-xs">Sign Up</button>
                    </div>
                  </div>
                  <span className="mt-lg mb-lg line-thru text-center text-uppercase">
                  <span>or</span>
                </span>
                  <p className="text-center">Already have an account? <Link to="/signin">Sign In!</Link>
                  </p></form>
              </div>
            </div>
          </div>
        </section>
      </div>


    );
  }
}

const validate = values => {

  const errors = {};

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  if (!values.city) {
    errors.city = 'Please enter your city';
  }

  if (!values.firstName) {
    errors.firstName = 'Please enter your firstName';
  }


  if (!values.lastName) {
    errors.lastName = 'Please enter your lastName';
  }


  if (!values.phone) {
    errors.phone = 'Please enter your phone';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a confirm password';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'passwords must matched';
  }

  if (!values.email) {
    errors.email = 'Please enter a email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
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


const _SignUpPage = reduxForm({
  form: 'signup',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
})(SignUpPage);

function mapStateToProps(state) {

  return {
    errorMessage: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SignUpPage);
