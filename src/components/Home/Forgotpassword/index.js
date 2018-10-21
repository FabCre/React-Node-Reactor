import React from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import l10n from 'src/data/l10n';
import TextField from 'material-ui/TextField';
import validate from 'src/components/Home/Forgotpassword/validate';

/**
 * @function renderTextField
 * @memberof Component.Forgotpassword
 * @param {object} textfield
 * @desc Generate a textfield for the Forgotpassword form.
 */
const renderTextField = (
  { input, label, meta: { touched, error }, ...custom }
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

/**
 * @function submit
 * @memberof Component.Forgotpassword
 * @param {object} values
 * @desc Submit the form and send a request to the server.
 */
const submit = (values) => {
  const URL = 'http://localhost:3001';
  const { email } = values;
  axios.post(`${URL}/forgotpassword`,
    { email },
    {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      // TODO if response success, server must confirmed the user email (request SQL) and send link to this mail
      console.log(response, 'email sent');
    })
    .catch(function({ response }) {
      console.log(response.data, 'Error Axios');
    });
};

/**
 * @class Forgotpassword
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Forgotpassword
 */
class Forgotpassword extends React.Component {

  /**
   * @method componentDidUpdate
   * @memberof Component.Forgotpassword
   * @desc Update the component and redirect the user if he is not authenticated.
   */
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/user');
    }
  }

  /**
   * @method render
   * @memberof Component.Forgotpassword
   * @desc Render the forgot password form when routed.
   */
  render() {
    const { handleSubmit, submitting } = this.props;
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
            <div className="layout-primary__wording forgot-psswd">
              <h1 className="layout-primary__h2 forgot-psswd__title">
                {l10n.forgotPassword.title}
              </h1>
              <p className="forgot-psswd__wording">
                {l10n.forgotPassword.fillIn}
              </p>
              <form className="forgot-psswd__form" onSubmit={handleSubmit(submit)}>
                <div className="forgot-psswd__field forgot-psswd__field--material-ui">
                  <Field
                    name="email"
                    type='email'
                    component={renderTextField}
                    label={l10n.global.email}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <form className="layout-primary__buttons" onSubmit={handleSubmit(submit)}>
          <button
            className="forgot-psswd__button forgot-psswd__button--disabled"
            type="submit"
            disabled={submitting}
            title={l10n.forgotPassword.disabled}
          >
            {l10n.forgotPassword.button}
          </button>
        </form>
      </React.Fragment>
    );
  }
};

export default reduxForm({
  form: 'submitForgotpassword', // a unique identifier for this form
  validate
})(Forgotpassword);
