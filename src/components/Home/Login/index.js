import React from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import l10n from 'src/data/l10n';
import { loginUser, loginError } from 'src/auth/setUser';

import DialogLoginAlert from 'src/components/Home/Login/DialogLoginAlert';

import TextField from 'material-ui/TextField';
import validate from 'src/components/Home/Login/validate';

// @https://v0.material-ui.com/#/customization/themes
// @https://v0.material-ui.com/#/components/text-field
// https://github.com/mui-org/material-ui/blob/v0.x/src/styles/getMuiTheme.js

const style = {
  underlineStyle: {
    borderColor: '#61dbfb'
  }
};

/**
 * @function renderTextField
 * @memberof Component.Login
 * @param {object} textfield
 * @desc Generate a textfield for the Login form.
 */
const renderTextField = (
  { input, label, meta: { touched, error }, ...custom }
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    underlineFocusStyle={style.underlineStyle}
    {...input}
    {...custom}
  />
);

/**
 * @function submit
 * @memberof Component.Login
 * @param {object} values
 * @desc Submit the form and send a request to the server.
 */
const submit = (values) => {
  const URL = 'http://localhost:3001';
  const { user, password } = values;
  axios.post(`${URL}/login`,
    { user, password },
    { withCredentials: true,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      // if response success, call the loginUser from auth/setUser.js
      if (response.data.success === true) {
        loginUser(response);
      }
    })
    .catch(function({ response }) {
      // if response failed (checking error or other error), call the login error and display a modal alert with a message of the error
      const { message } = response.data;
      if (response.data.errors) {
        const { msg } = response.data.errors[0];
        return loginError(msg);
      } else {
        return loginError(message);
      }
    });
};

/**
 * @class Login
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Login (reduxform)
 */
class Login extends React.Component {

  /**
   * @method componentDidUpdate
   * @memberof Component.Login
   * @desc Code to execute after component update.
   */
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/user');
    }
  }

  /**
   * @method render
   * @memberof Component.Login
   * @desc Render the Login form when routed.
   */
  render() {
    const { handleSubmit, submitting, message, open } = this.props;
    return (
      <React.Fragment>
        <div className="layout-primary__content">
          <div className="layout-primary__content-border">
            <NavLink
              className="layout-primary__logo-link"
              exact
              to="/"
              title={l10n.global.logoTitle}
            >
              <img
                className="layout-primary__logo-img"
                src="src/images/logo-v1.0-fullsize.png"
                alt={l10n.global.logoTitle}
              />
            </NavLink>
            <div className="layout-primary__wording">
              <p className="sign__redirection">
                {l10n.login.noAccount}
                <NavLink className="sign__link" to="/signup">
                  {l10n.login.createAccount}
                </NavLink>
              </p>
              <h1 className="layout-primary__h2">
                {l10n.login.signIn}
              </h1>
              {/* TODO: Make autocomplete="off" work on Chrome */}
              <form className="sign__form" autoComplete="off" onSubmit={handleSubmit(submit)}>
                <div className="sign__field sign__field--material-ui">
                  <Field
                    type="text"
                    name="user"
                    autoComplete="off"
                    component={renderTextField}
                    label={l10n.global.username}
                  />
                </div>
                <div className="sign__field sign__field--material-ui">
                  <Field
                    type="password"
                    name="password"
                    autoComplete="off"
                    component={renderTextField}
                    label={l10n.global.password}
                  />
                </div>
              </form>
              <NavLink className="sign__link" to="/forgotpassword">{l10n.login.forgotPassword}</NavLink>
            </div>
          </div>
        </div>
        <form className="layout-primary__buttons" onSubmit={handleSubmit(submit)}>
          <button className="sign__button" type="submit" disabled={submitting}>{l10n.global.logIn}</button>
        </form>
        {handleSubmit(submit) && message && <DialogLoginAlert message={message} open={open} />}
      </React.Fragment>
    );
  };
}

export default reduxForm({
  form: 'submitLogin', // a unique identifier for this form
  validate
})(Login);
