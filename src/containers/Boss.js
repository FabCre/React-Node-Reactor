import { connect } from 'react-redux';

import Boss from 'src/components/Boss';

import {
  NEW_BOSS_ACTION,
  HIDE_SIDE_ATTACK,
  SET_BOSS_POSITION,
  HIDE_FRONT_ATTACK,
  ANGLE_SIDE_ATTACK,
  DISPLAY_SIDE_ATTACK,
  DISPLAY_FRONT_ATTACK,
  DEATH_BOSS_ANIMATION
} from 'src/store/actions/bossActions';

/**
 * @alias BossContainer
 * @memberof Container
 * @desc Boss container.
 */
const mapStateToProps = state => ({
  boss: state.boss,
  angle: state.boss.angle,
  bossPosition: state.boss.bossPosition
});

const mapDispatchToProps = dispatch => ({
  // Callback when Boss move
  setBossPosition: (bossx, bossy) => {
    dispatch({
      type: SET_BOSS_POSITION,
      bossx,
      bossy
    });
  },
  newBossAction: (bossAction) => {
    dispatch({
      type: NEW_BOSS_ACTION,
      bossAction
    });
  },
  displayFrontAttack: () => {
    dispatch({
      type: DISPLAY_FRONT_ATTACK
    });
  },
  hideFrontAttack: () => {
    dispatch({
      type: HIDE_FRONT_ATTACK
    });
  },
  displaySideAttack: () => {
    dispatch({
      type: DISPLAY_SIDE_ATTACK
    });
  },
  hideSideAttack: () => {
    dispatch({
      type: HIDE_SIDE_ATTACK
    });
  },
  angleSideAttack: (angle) => {
    dispatch({
      type: ANGLE_SIDE_ATTACK,
      angle
    });
  },
  deathBossAnimation: () => {
    dispatch({
      type: DEATH_BOSS_ANIMATION
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boss);
