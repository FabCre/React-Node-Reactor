import React, { Component } from 'react';

import './statsboss.sass';

/**
 * @class StatsBoss
 * @memberof Component
 * @hideconstructor
 * @classdesc Class StatsBoss
 */
export default class StatsBoss extends Component {

  /**
   * @method lifeBossRender
   * @memberof Component.StatsBoss
   * @desc Display and update Boss's life bar.
   */
  lifeBossRender() {
    const { pv } = this.props.boss.bossStats;

    const styleLife = {
      background: 'url(src/images/bossAssets/lifebarbosssmall.png)',
      width: `${pv * 2.23}px`,
      height: '20px'
    };

    return <div className="pv" style={styleLife}></div>;
  }

  /**
   * @method render
   * @memberof Component.StatsBoss
   * @desc Render the StatsBoss based on current Boss stats.
   */
  render() {
    return (
      <div className="statsboss">
        {this.lifeBossRender()}
      </div>
    );
  };
};
