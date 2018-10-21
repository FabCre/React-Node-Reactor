/**
* @module l10n_Server
* @desc Localization (l10n), Please, be careful to fill it by alphabetical order!
*/

const l10n = {
  errors: {
    accountLoginFailed: 'Log in failed!',
    accountSignupFailed: 'Account creation failed!',
    confirmPassword: 'Passwords do not match each other :(',
    emailNotFound: 'Email not found in our database :/',
    emailSignup: 'Email must be a valid address ^^\'',
    mysqlrequest: 'Node don\'t find any result for the Mysql request.',
    password: 'Password must be at least 5 or plus characters long.',
    user: 'Username must be at least 4 or plus characters long.'
  },
  success: {
    messageForgotpassword: 'Please check your mailbox, a reset link was just sent to the email address you provided!',
    messageLogin: 'Successfully logged in!',
    messageSignup: 'Account successfully created & you\'re logged in!'
  }
};

module.exports = l10n;
