import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Bonus from 'src/components/UI/Bonus';

/**
 * @alias BonusContainer
 * @memberof Container
 * @desc Bonus container.
 */
const mapStateToProps = state => ({
  // REACTOR props
  bonusTracker: state.reactor.bonusTracker,
  // REACTOR props (usefull to set a new render for the bonus tracker)
  reactor: state.reactor
});

const mapDispatchToProps = dispatch => ({
});

const BonusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bonus);

export default withRouter(BonusContainer);
