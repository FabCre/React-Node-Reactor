import { connect } from 'react-redux';

import Game from 'src/components/Game';

/**
 * @alias GameContainer
 * @memberof Container
 * @desc Game container.
 */
const mapStateToProps = state => ({
  // MAP props
  globalmapProps: state.mapRooms.globalmapProps,
  // ROOMS props
  currentRoom: state.mapRooms.currentRoom,
  // REACTOR props
  reactor: state.reactor,
  quizzState: state.reactor.quizzState,
  debugMatter: state.reactor.debugMatter,
  // BOSS props
  boss: state.boss
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
