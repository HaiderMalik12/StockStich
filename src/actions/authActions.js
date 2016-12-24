import * as types from '.././constants/actionTypes';
import {browserHistory} from 'react-router';

const API_URL = 'http://localhost:1337';
const axios = require('axios');


export function login({email,password}) {

  return dispatch => {

    return axios.post(`${API_URL}/account/login`,{email,password})
      .then(response => {

        dispatch({
          type:types.AUTH_USER
        });

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/dashboard');


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

export function signUp({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/account/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}
export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}
