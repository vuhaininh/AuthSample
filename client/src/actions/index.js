import axios from 'axios';
import { push } from 'react-router-redux';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
const ROOT_URL = 'http://localhost:3090';
export function signinUser({ email, password }){
  return (dispatch) => {
    // Submit email and passwrod to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then( response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER})
        // - Save the JWT token
        localStorage.setItem('token',response.data.token);
        // - Redirect to the route '/feature'
        dispatch(push('/feature'));

      })
      .catch( () => {
        // If request is bad
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}
export function signoutUser(){
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}
export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
