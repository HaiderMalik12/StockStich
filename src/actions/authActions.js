import * as types from '.././constants/actionTypes';
import {browserHistory} from 'react-router';

const API_URL = 'http://localhost:1337';
const axios = require('axios');


export function login({email,password}) {

  return dispatch => {

    return axios.post(`${API_URL}/account/login`,{email,password})
      .then(response => {


        let user= response.data.user;
        console.log(user.has_company);

        dispatch({
          type:types.AUTH_USER
        });

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);


        user.has_company === true ? browserHistory.push('/dashboard'):  browserHistory.push('/');



      }).catch(error => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });


  };

}

export function signOut() {
  localStorage.removeItem('token');

  return { type: types.UNAUTH_USER};
}

export function signUp({ email, password,city,phone,firstName,lastName }) {


  return function(dispatch) {
    axios.post(`${API_URL}/account/signup`, { email, password ,city, mobile:phone, first_name: firstName, last_name:lastName })
      .then(response => {
        dispatch({ type: types.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard');
      })
      .catch(error => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Invalid fields, Something went wrong'));
      });

  }
}
export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}
