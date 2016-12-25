import React,{PropTypes} from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';
import {Link} from 'react-router';

class SignInPage extends React.Component {

  constructor(props){
    super(props);

    this.formHandleSubmit= this.formHandleSubmit.bind(this);
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

  formHandleSubmit({email,password}){

    this.props.actions.login({email,password});

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
            <div className="title-box">
              <h1 className="text-center text-uppercase title-under">LOGIN OR CREATE AN ACCOUNT</h1>
            </div>

            <div className="row">
              <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xl-offset-2">
                <div className="login-form-box">
                  <h3 className="color small">NEW CUSTOMER</h3>
                  <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                  <br />
                  <Link  to="/signup" className="btn btn--ys btn--xl">
                    <span className="icon icon-person_add">CREATE AN ACCOUNT</span>
                  </Link>


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

                    <Field name="email" type="email" component={this.renderField}  id="email" label="Email" htmlFor="email"/>

                    <Field name="password" type="password" component={this.renderField} id="password" label="Password" htmlFor="password"/>

                    {this.renderAlert()}

                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <button type="submit" className="btn btn--ys btn-top btn--xl"><span className="icon icon-vpn_key" />Login</button>
                      </div>
                      <div className="divider divider--md visible-xs" />
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

  actions:PropTypes.object.isRequired,
  errorMessage:PropTypes.string,
  handleSubmit:PropTypes.func.isRequired
};

const validate = values => {

  const errors = {};

  if(!values.password){
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
   errorMessage:state.auth.error
 };
}

function mapDispatchToProps(dispatch) {
 return {
   actions:bindActionCreators(actions,dispatch)
 };
}


const _SignInPage = reduxForm({

  form:'signin',
  validate

})(SignInPage);

export default connect(mapStateToProps,mapDispatchToProps)(_SignInPage);

//export default SignInPage;
