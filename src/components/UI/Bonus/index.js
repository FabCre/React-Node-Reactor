import React, { Component } from 'react';

import './bonus.sass';

/**
 * @class Bonus
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Bonus
 */
export default class Bonus extends Component {

  /**
   * @method render
   * @memberof Component.Bonus
   * @desc Render the Bonus infomation component.
   */
  render() {
    const bonusTracker = this.props.bonusTracker;
    return (
      <div className = "bonus">
        {
          bonusTracker.map(
            (bonus, index) => { return <img src={`src/images/statsAssets/${bonus}.png`} key={index} className="currentBonus"/>; })
        }
      </div>
    );
  };
};
