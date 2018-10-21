import React, { Component } from 'react';

import './stats.sass';

/**
 * @class Stats
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Stats
 */
export default class Stats extends Component {

  /**
   * @method lifeRender
   * @memberof Component.Stats
   * @desc Conditonal life render. Extra life is display only for life beyond 100.
   */
  lifeRender() {
    const { stats } = this.props.reactor;

    const styleLife = {
      background: 'url(src/images/statsAssets/lifebarsmall.png)',
      width: `${stats.pv * 2.23}px`,
      height: '20px'
    };

    const styleConstantLife = {
      background: 'url(src/images/statsAssets/lifebarsmall.png)',
      width: '223px',
      height: '20px'
    };

    const styleExtraLife = {
      background: 'url(src/images/statsAssets/lifebarsmall.png)',
      width: `${(stats.pv - 100) * 2.23}px`,
      height: '20px'
    };

    if (stats.pv > 100) {
      return (
        <React.Fragment>
          <div className="pv" style={styleConstantLife}></div>
          <div className="pv" style={styleExtraLife}></div>
        </React.Fragment>
      );
    } else {
      return <div className="pv" style={styleLife}></div>;
    }
  }

  /**
   * @method damageRender
   * @memberof Component.Stats
   * @desc Displays character current damages value.
   */
  damageRender() {
    const { stats } = this.props.reactor;

    return (
      <div className="damageWrap">
        <img className="damage__img" src='src/images/statsAssets/damage.png' /><div className='damage'>{stats.damage}</div>
      </div>
    );
  }

  /**
   * @method speedRender
   * @memberof Component.Stats
   * @desc Displays character current speed value.
   */
  speedRender() {
    const { stats } = this.props.reactor;

    return (
      <div className="speedWrap">
        <img className="speed__img" src='src/images/statsAssets/speed.png'/><div className='speed'>{stats.speed}</div>
      </div>
    );
  }

  /**
   * @method render
   * @memberof Component.Stats
   * @desc Render the Stats component based on current Reactor Stats.
   */
  render() {
    return (
      <div className="stats">
        {this.lifeRender()}
        {this.damageRender()}
        {this.speedRender()}
      </div>
    );
  };
};
