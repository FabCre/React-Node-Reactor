/**
 * @namespace Container
 * @desc All Containers of Reactor
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from 'src/components/App';

/**
 * @alias AppContainer
 * @memberof Container
 * @desc App container.
 */
const mapStateToProps = state => ({
  user: state.auth.user,
  url: state.auth.url,
  isAuthenticated: state.auth.isAuthenticated,
  reactor: state.reactor,
  boss: state.boss
});

const mapDispatchToProps = dispatch => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
