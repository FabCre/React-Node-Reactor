/**
 * @namespace Root
 * @desc App main index.js (Root)
 */

import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { AppContainer } from 'react-hot-loader';

import App from 'src/containers/App';
import store from 'src/store';

import setAuthToken from 'src/auth/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from 'src/store/actions/authActions';

/**
 * @func setAuthToken
 * @memberof Root
 * @desc Verify if an JWT Token Provided by the node.js server exist to login the user
 */
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // TODO check the validity time of the token
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   localStorage.removeItem('jwtToken');
  //   setAuthToken(false);
  //   store.dispatch(setCurrentUser({}));
  // }
}

/**
 * @method rootComponent
 * @memberof Root
 * @desc Display all the App
 */
const rootComponent = (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router>
        <AppContainer>
          <App />
        </AppContainer>
      </Router>
    </MuiThemeProvider>
  </Provider>
);
render(rootComponent, document.getElementById('root'));
