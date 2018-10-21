import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { INIT_LOGGER } from 'src/store/actions/mapActions';

import Meta from 'src/components/UI/Meta';

/**
 * @alias MetaContainer
 * @memberof Container
 * @desc Meta container.
 */
const mapStateToProps = state => ({
  // MAP props
  logger: state.mapRooms.logger,
  initDateString: state.mapRooms.initDateString
});

const mapDispatchToProps = dispatch => ({
   initLogger: () => {
     dispatch({
       type: INIT_LOGGER
     });
   },
});

const MetaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Meta);

export default withRouter(MetaContainer);
