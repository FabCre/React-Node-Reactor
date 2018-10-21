import { connect } from 'react-redux';

import Chest2 from 'src/components/Chests/Chest2';

/**
 * @alias Chest2Container
 * @memberof Container
 * @desc Chest2 container.
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
  quizzAnsweredChest2: state.reactor.quizzAnsweredChest2,
  // BOSS props
  boss: state.boss
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chest2);
