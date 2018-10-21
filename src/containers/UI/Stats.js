import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Stats from 'src/components/UI/Stats';

/**
 * @alias StatsContainer
 * @memberof Container
 * @desc Stats container.
 */
const mapStateToProps = state => ({
  // REACTOR props
  reactor: state.reactor,
});

const mapDispatchToProps = dispatch => ({
});

const StatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);

export default withRouter(StatsContainer);
