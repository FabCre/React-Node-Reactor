import { connect } from 'react-redux';

import Reactor from 'src/components/Reactor';

import {
  STOP,
  CHECK_KEYS,
  BOSS_DAMAGE,
  RETURN_IDLE,
  SET_POSITION,
  HOLE_COLLISION,
  BALL_COLLISION,
  DEATH_ANIMATION,
  DEBUGGER_MATTER_ACTIVE,
  DEBUGGER_MATTER_NOT_ACTIVE
} from 'src/store/actions/reactorActions';

import {
  CHANGE_ROOM
} from 'src/store/actions/roomActions';

import {
  INIT_QUIZZ
} from 'src/store/actions/modalActions';

import {
  ATTACK_BOSS
} from 'src/store/actions/bossActions';

import {
  SET_STAGE,
  GET_LOGGER
} from 'src/store/actions/mapActions';

/**
 * @alias Reactorontainer
 * @memberof Container
 * @desc Reactor container.
 */
const mapStateToProps = state => ({
  // REACTOR props
  reactor: state.reactor,
  // BOSS props
  boss: state.boss,
  // MAP
  mapRooms: state.mapRooms,
  globalmapProps: state.mapRooms.globalmapProps,
  // ROOMS props
  currentRoom: state.mapRooms.currentRoom,
  roomLocked: state.mapRooms.roomLocked,
  quizzState: state.reactor.quizzState
});

const mapDispatchToProps = dispatch => ({
  // Callback when keyboard touch
  checkKeys: (keys) => {
    dispatch({
      type: CHECK_KEYS,
      keys
    });
  },
  // Callback when Main character entered in the door
  changeRoom: (enteredDoor) => {
    dispatch({
      type: CHANGE_ROOM,
      enteredDoor
    });
  },
  // Callback when Main character moove
  setPosition: (x, y) => {
    dispatch({
      type: SET_POSITION,
      x,
      y
    });
  },
  setStage: (stageX, stageY) => {
    dispatch({
      type: SET_STAGE,
      stageX,
      stageY
    });
  },
  // Callback when stop keyboard touch
  stopBody: () => {
    dispatch({
      type: STOP
    });
  },
  // Callback when Main character stop mooving
  returnIdle: () => {
    dispatch({
      type: RETURN_IDLE
    });
  },
  initQuizz: (quizzState) => {
    dispatch({
      type: INIT_QUIZZ,
      quizzState
    });
  },
  holeCollision: () => {
    dispatch({
      type: HOLE_COLLISION
    });
  },
  ballCollision: () => {
    dispatch({
      type: BALL_COLLISION
    });
  },
  getLogger: () => {
    dispatch({
      type: GET_LOGGER
    });
  },
  receiveDamage: (bossDamage) => {
    dispatch({
      type: ATTACK_BOSS,
      bossDamage
    });
  },
  debuggerMatterActive: () => {
    dispatch({
      type: DEBUGGER_MATTER_ACTIVE
    });
  },
  debuggerMatterNotActive: () => {
    dispatch({
      type: DEBUGGER_MATTER_NOT_ACTIVE
    });
  },
  bossDamage: (reactorDamage) => {
    dispatch({
      type: BOSS_DAMAGE,
      reactorDamage
    });
  },
  deathAnimation: () => {
    dispatch({
      type: DEATH_ANIMATION
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reactor);
