import { connect } from 'react-redux';

import RoomBoss from 'src/components/Room/RoomBoss';
import { DISABLE_BOSS_OVERLAY } from 'src/store/actions/roomActions';

/**
 * @alias RoomBossContainer
 * @memberof Container
 * @desc RoomBoss container.
 */
const mapStateToProps = state => ({
  globalmapProps: state.mapRooms.globalmapProps,
  currentRoom: state.mapRooms.currentRoom,
  currentRoomId: state.mapRooms.currentRoom.id,
  roomStart: state.mapRooms.globalmapProps.room.roomStart,
  roomBoss: state.mapRooms.globalmapProps.room.roomBoss,
  roomChest: state.mapRooms.globalmapProps.room.roomChest,
  roomHostile1: state.mapRooms.globalmapProps.room.roomHostile1,
  roomHostile2: state.mapRooms.globalmapProps.room.roomHostile2,
  bossOverlay: state.mapRooms.bossOverlay
});

const mapDispatchToProps = dispatch => ({
    disableBossOverlay: () => {
      dispatch({
        type: DISABLE_BOSS_OVERLAY
      });
    }
    
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomBoss);
