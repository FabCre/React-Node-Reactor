import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ERROR_CURRENT_USER } from 'src/store/actions/errorsActions';

import Login from 'src/components/Home/Login';

/**
 * @alias LoginContainer
 * @memberof Container
 * @desc Login container.
 */

const mapStateToProps = state => ({
  user: state.auth.user,
  url: state.auth.url,
  isAuthenticated: state.auth.isAuthenticated,
  message: state.auth.message,
  open: state.auth.open
});

const mapDispatchToProps = dispatch => ({
  loginError: (message, open) => {
    dispatch({
      type: ERROR_CURRENT_USER,
      message,
      open
    });
  }
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default withRouter(LoginContainer);
