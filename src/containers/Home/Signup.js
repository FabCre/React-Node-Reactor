import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ERROR_CURRENT_USER } from 'src/store/actions/errorsActions';

import Signup from 'src/components/Home/Signup';

/**
 * @alias SignupContainer
 * @memberof Container
 * @desc Signup container.
 */

const mapStateToProps = state => ({
  user: state.auth.user,
  url: state.auth.url,
  isAuthenticated: state.auth.isAuthenticated,
  message: state.auth.message,
  open: state.auth.open
});

const mapDispatchToProps = dispatch => ({
  signupError: (message, open) => {
    dispatch({
      type: ERROR_CURRENT_USER,
      message,
      open
    });
  }
});

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

export default withRouter(SignupContainer);
