import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Boss from 'src/containers/Boss'
import StatsBoss from 'src/containers/UI/StatsBoss';

import './roomboss.sass';

/**
 * @class RoomBoss
 * @memberof Component
 * @hideconstructor
 * @classdesc Class RoomBoss
 */
export default class RoomBoss extends Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      stageX: 0,
      layers: this.props.currentRoom.layers
    };
  }

  /**
   * @method componentDidMount
   * @memberof Component.RoomBoss
   * @desc Code to execute after component render, here setting a delay before the boss room apparition.
   */
  componentDidMount() {
    const bossOverlay = () => setTimeout(() => {
      this.props.disableBossOverlay()
    }, 5000);

    bossOverlay();
  }

  /**
   * @method render
   * @memberof Component.RoomBoss
   * @desc Render the RoomBoss.
   */
  render() {
     const { layers } = this.props.roomBoss;
    
    return (
      <div>
        {this.props.bossOverlay === true && <div className='bossOverlay'></div>}
        <StatsBoss />
        <Boss />
        <div className='doors' style={{backgroundImage: `url(src/images/roomAssets/boss/open/${layers}.png)`}}>
        </div>
        <div className='walls' style={{backgroundImage: 'url(src/images/roomAssets/boss/walls.png)'}}> 
        </div>
        <div className='ground' style={{backgroundImage: 'url(src/images/roomAssets/dark-floor.png)'}}>
        </div>
      </div>
    );
  };
};
