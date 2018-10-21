import { connect } from 'react-redux';

import Hole from 'src/components/Hole';

/**
 * @alias HoleContainer
 * @memberof Container
 * @desc Hole container.
 */
const mapStateToProps = state => ({
  // MAP props
  globalmapProps: state.mapRooms.globalmapProps,
  // ROOMS props
  currentRoom: state.mapRooms.currentRoom,
  // REACTOR props
  reactor: state.reactor,
  quizzState: state.reactor.quizzState, // TODO donnée du state pour l'ouverture de la modal Reactor Alert
  quizzAnsweredOpen: state.reactor.quizzAnsweredOpen,
  quizzAnsweredChest1: state.reactor.quizzAnsweredChest1,
  // BOSS props
  boss: state.boss
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hole);
