import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Homepage from 'src/components/Home/Homepage';

/**
 * @alias HompageContainer
 * @memberof Container
 * @desc Homepage container.
 */

const mapStateToProps = state => ({
  user: state.auth.user,
  url: state.auth.url,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
});

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

export default withRouter(HomepageContainer);
