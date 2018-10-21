/**
 * @namespace Client_Auth
 * @desc SetAuthToken
 */

import axios from 'axios';

/**
 * @method setAuthToken
 * @memberof Client_Auth
 * @param {object} token JWT token used in auth process
 * @desc Set axios default authorization parameters to the actual Auth token
 */
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
