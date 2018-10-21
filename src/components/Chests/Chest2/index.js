// TODO IN A NEXT VERSION OF THE GAME

import React from 'react';
import PropTypes from 'prop-types';

import Matter from 'matter-js';

import './chest2.sass';

/**
 * @class Chest2
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Chest2
 */
export default class Chest2 extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  }

  /**
   * @method componentDidMount
   * @memberof Component.Chest2
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    const { world } = this.context.engine;
    const chest2 = Matter.Bodies.rectangle(544, 414, 64, 64, {
      isStatic: true,
      label: 'chest2'
    });
    Matter.World.addBody(world, chest2);
  }

  /**
   * @method componentWillUnmount
   * @memberof Component.Chest2
   * @desc Code to execute before component destruction.
   */
  componentWillUnmount() {
    const { world } = this.context.engine;
    Matter.World.remove(world, world.bodies[9]);
  }

  /**
   * @method render
   * @memberof Component.Chest2
   * @desc Render the Chest2 component, open or close depending on the state of the quizz.
   */
  render() {
    return (
      <React.Fragment>
        {this.props.quizzAnsweredOpen === 0 && <img className='chest' src="src/images/chest_lvl2.png"/>}
        {this.props.quizzAnsweredOpen ===  1 && <img className='chest' src="src/images/open_chest_lvl2.png"/>}
        {this.props.quizzAnsweredChest2 ===  1 && <img className='chest' src="src/images/open_chest_lvl2.png"/>}
      </React.Fragment>
    );
  };
};
