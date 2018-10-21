import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Forgotpassword from 'src/components/Home/Forgotpassword';

/**
 * @alias ForgotpasswordContainer
 * @memberof Container
 * @desc Forgotpassword container.
 */

const mapStateToProps = state => ({
  user: state.auth.user,
  url: state.auth.url,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
});

const ForgotpasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forgotpassword);

export default withRouter(ForgotpasswordContainer); 
