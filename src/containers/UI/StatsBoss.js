import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StatsBoss from 'src/components/UI/StatsBoss';

/**
 * @alias StatsBossContainer
 * @memberof Container
 * @desc Stats Boss container.
 */
const mapStateToProps = state => ({
  boss: state.boss
});

const mapDispatchToProps = dispatch => ({
});

const StatsBossContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsBoss);

export default withRouter(StatsBossContainer);
