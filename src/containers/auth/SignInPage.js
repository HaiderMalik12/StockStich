import React, {PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';
import {Link} from 'react-router';

class SignInPage extends React.Component {

  constructor(props) {
    super(props);

    this.formHandleSubmit = this.formHandleSubmit.bind(this);
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

  formHandleSubmit({email, password}) {

    this.props.actions.login({email, password});

  }

  renderField = ({id, input, htmlFor, label, type, meta: {touched, error, warning}}) => (

    <div className="row">
      <div className="form-group">
        <div className="col-md-12">
          <label htmlFor={htmlFor}>{label}</label>
          <input   {...input} type={type} defaultValue className="form-control input-lg" id={id}/>
          {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    </div>

  );

  render() {

    const {handleSubmit, submitting} = this.props;

    return (
      <div className="main" role="main">
        <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Pages</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </section>


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="featured-boxes">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="featured-box featured-box-primary align-left mt-xlg" style={{height: 327}}>
                      <div className="box-content">
                        <h4 className="heading-primary text-uppercase mb-md">NEW CUSTOMER</h4>
                        <p>By creating an account with our store, you will be able to move through the checkout process
                          faster, store multiple shipping addresses, view and track your orders in your account and
                          more.</p>
                        <br />
                        <Link to="/signup" className="btn btn-lg btn-primary">
                          <span className="icon icon-person_add">CREATE AN ACCOUNT</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="featured-box featured-box-primary align-left mt-xlg" style={{height: 327}}>
                      <div className="box-content">
                        <h4 className="heading-primary text-uppercase mb-md">Login</h4>
                        <form onSubmit={handleSubmit(this.formHandleSubmit)} id="frmSignIn">


                          <Field name="email" type="email" component={this.renderField} id="email" label="Email"
                                 htmlFor="email"/>

                          <Field name="password" type="password" component={this.renderField} id="password"
                                 label="Password" htmlFor="password"/>

                          {this.renderAlert()}
                          <div className="row">
                            <div className="col-md-12">
                              <button disabled={submitting} type="submit" className="btn btn-primary pull-right mb-xl">
                                Login
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    );
  }
}

SignInPage.propTypes = {

  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

const validate = values => {

  const errors = {};

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  if (!values.email) {
    errors.email = 'Please enter a email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


const _SignInPage = reduxForm({

  form: 'signin',
  validate

})(SignInPage);

export default connect(mapStateToProps, mapDispatchToProps)(_SignInPage);

//export default SignInPage;
