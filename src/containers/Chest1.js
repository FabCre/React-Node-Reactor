import { connect } from 'react-redux';

import Chest1 from 'src/components/Chests/Chest1';

/**
 * @alias Chest1Container
 * @memberof Container
 * @desc Chest1 container.
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
)(Chest1);
