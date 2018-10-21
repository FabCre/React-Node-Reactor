import {connect} from 'react-redux';
import { SET_BALL_POSITION } from 'src/store/actions/ballActions';
import Ball from 'src/components/Ball';

/**
 * @alias BallContainer
 * @memberof Container
 * @desc Ball container.
 */
const mapStateToProps = state => ({
  // REACTOR props
  reactor: state.reactor,
  // BALL props
  ball: state.ball
});

const mapDispatchToProps = dispatch => ({
  setBallPosition: (x, y) => {
    dispatch({type: SET_BALL_POSITION, x, y});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
