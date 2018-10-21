import React from 'react';
import PropTypes from 'prop-types';
import Matter from 'matter-js';

import './hole.sass';

/**
 * @class Hole
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Hole
 */
export default class Hole extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  }

  /**
   * @method componentDidMount
   * @memberof Component.Hole
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    const { world } = this.context.engine;

    const hole1 = Matter.Bodies.rectangle(480, 478, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole2 = Matter.Bodies.rectangle(416, 478, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole3 = Matter.Bodies.rectangle(288, 350, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole23 = Matter.Bodies.rectangle(224, 414, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole24 = Matter.Bodies.rectangle(96, 542, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole4 = Matter.Bodies.rectangle(672, 414, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole5 = Matter.Bodies.rectangle(864, 414, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole25 = Matter.Bodies.rectangle(864, 478, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole26 = Matter.Bodies.rectangle(992, 286, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole27 = Matter.Bodies.rectangle(928, 286, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole28 = Matter.Bodies.rectangle(864, 670, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    
    const hole6 = Matter.Bodies.rectangle(736, 350, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole7 = Matter.Bodies.rectangle(544, 286, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole18 = Matter.Bodies.rectangle(480, 222, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole8 = Matter.Bodies.rectangle(672, 478, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole9 = Matter.Bodies.rectangle(544, 542, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole19 = Matter.Bodies.rectangle(736, 606, 64, 64, {
      isStatic: true,
      label: 'hole'
    });

    const hole10 = Matter.Bodies.rectangle(736, 542, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole11 = Matter.Bodies.rectangle(672, 670, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole12 = Matter.Bodies.rectangle(414, 286, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole13 = Matter.Bodies.rectangle(352, 222, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole20 = Matter.Bodies.rectangle(288, 158, 64, 64, {
      isStatic: true,
      label: 'hole'
    });

    const hole14 = Matter.Bodies.rectangle(352, 542, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole15 = Matter.Bodies.rectangle(288, 606, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole22 = Matter.Bodies.rectangle(224, 670, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole16 = Matter.Bodies.rectangle(736, 286, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole17 = Matter.Bodies.rectangle(608, 222, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    const hole21 = Matter.Bodies.rectangle(800, 96, 64, 64, {
      isStatic: true,
      label: 'hole'
    });
    Matter.World.addBody(world, hole1);
    Matter.World.addBody(world, hole2);
    Matter.World.addBody(world, hole3);
    Matter.World.addBody(world, hole4);
    Matter.World.addBody(world, hole5);
    Matter.World.addBody(world, hole10);
    Matter.World.addBody(world, hole11);
    Matter.World.addBody(world, hole12);
    Matter.World.addBody(world, hole13);
    Matter.World.addBody(world, hole6);
    Matter.World.addBody(world, hole7);
    Matter.World.addBody(world, hole8);
    Matter.World.addBody(world, hole9);
    Matter.World.addBody(world, hole18);
    Matter.World.addBody(world, hole19);
    Matter.World.addBody(world, hole20);
    Matter.World.addBody(world, hole23);
    Matter.World.addBody(world, hole24);
    Matter.World.addBody(world, hole25);
    Matter.World.addBody(world, hole26);
    Matter.World.addBody(world, hole27);
    Matter.World.addBody(world, hole28);
    Matter.World.addBody(world, hole14);
    Matter.World.addBody(world, hole15);
    Matter.World.addBody(world, hole16);
    Matter.World.addBody(world, hole17);
    Matter.World.addBody(world, hole21);
    Matter.World.addBody(world, hole22);


    // console.log(this.context.engine);
  }

  /**
   * @method componentWillUnmount
   * @memberof Component.Hole
   * @desc Code to execute before component destruction.
   */
  componentWillUnmount() {
    const { world } = this.context.engine;
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
  }

  /**
   * @method render
   * @memberof Component.Hole
   * @desc Render the Chest2 component, open or close depending on the state of the quizz.
   */
  render() {
    return (
      <React.Fragment>
        <img className='traps' src="src/images/traps.png"/>
      </React.Fragment>
    );
  };
};
