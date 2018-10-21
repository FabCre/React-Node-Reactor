import setAuthToken from './setAuthToken';
import jwt_decode from 'jwt-decode';
import store from 'src/store';
import { ERROR_CURRENT_USER } from 'src/store/actions/errorsActions';
import { setCurrentUser } from 'src/store/actions/authActions';

/**
 * @method registerUser
 * @memberof Client_Auth
 * @desc On signup form submit, the user is autologin, create and set a authentification token in the user's localstorage.
 */
export const registerUser = (response) => {
  const { token } = response.data;
  // set the token in the local storage
  localStorage.setItem('jwtToken', token);
  // set the axios authentification to be the responded token
  setAuthToken(token);
  // call the method jwt-decode from the lib jwt to decode the user's token
  const decoded = jwt_decode(token);
  // console.log(decoded, 'Signup User Token Decoded (auth/setUser.js)');
  // dispatch an action to set the current user with the decoded token
  store.dispatch(setCurrentUser(decoded));
};

/**
 * @method loginUser
 * @memberof Client_Auth
 * @desc On login form submit, create and set a authentification token in the user's localstorage.
 */
export const loginUser = (response) => {
  const { token } = response.data;
  // set the token in the local storage
  localStorage.setItem('jwtToken', token);
  // set the axios authentification to be the responded token
  setAuthToken(token);
  // call the method jwt-decode from the lib jwt to decode the user's token
  const decoded = jwt_decode(token);
  // console.log(decoded, 'Login User Token Decoded (auth/setUser.js)');
  // dispatch an action to set the current user with the decoded token
  store.dispatch(setCurrentUser(decoded));
};

/**
 * @method logoutUser
 * @memberof Client_Auth
 * @desc Remove the token from user's local storage and set the new state to logout the user.
 */
export const logoutUser = dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  store.dispatch(setCurrentUser({}));
};

/**
 * @method loginError
 * @memberof Client_Auth
 * @desc Display modal with message from the server in case of login form submit error.
 */
export const loginError = (message, open) => {
  store.dispatch({ type: ERROR_CURRENT_USER, message, open });
};

/**
 * @method signupError
 * @memberof Client_Auth
 * @desc Display modal with message from the server in case of signup form submit error.
 */
export const signupError = (message, open) => {
  store.dispatch({ type: ERROR_CURRENT_USER, message, open });
};
