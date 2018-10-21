import React from 'react';
import PropTypes from 'prop-types';
import Matter from 'matter-js';
import { Body, Sprite } from 'react-game-kit/lib';

import './ball.sass';

/**
 * @class Ball
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Ball
 */
export default class Ball extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  /**
   * @method componentDidMount
   * @memberof Component.Ball
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
  }

  /**
   * @method componentWillUnmount
   * @memberof Component.Ball
   * @desc Code to execute before component destruction.
   */
  componentWillUnmount() {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
  }

  /**
   * @method getBallWrapperStyles
   * @memberof Component.Ball
   * @desc Adjust ball sprite to Matter.js body position.
   */
  getBallWrapperStyles() {
    const { x, y } = this.props.ball.ballPosition;

    return {
      width: 30,
      height: 30,
      position: 'absolute',
      transform: `translate(${x - 22.5}px, ${y - 22.5}px)`,
      transformOrigin: 'left top'
    };
  };

  /**
   * @method update
   * @memberof Component.Ball
   * @desc Event listener based on game loop.
   * @see {@link /src/utils/game-loop.js}
   */  
  update() {
    const { body } = this.body;
    this.props.setBallPosition(body.position.x, body.position.y);
    Matter.Body.set(body, 'frictionAir', 0.01);
    Matter.Body.set(body, 'friction', 0.1);
  }

  /**
   * @method render
   * @memberof Component.Ball
   * @desc Render the Ball component.
   */
  render() {
    const x = this.props.ball.ballPosition.x;
    const y = this.props.ball.ballPosition.y;

    return (
      <div id='ball' style={this.getBallWrapperStyles()} >
        <Body args={[x, y, 45, 45]}
          scale={1}
          inertia={Infinity}
          label={'ball'}
          ref={ball => { this.body = ball; }} >
          <Sprite
          repeat={true} 
            src="src/images/ballAssets/NodeCube.png"
            scale={1}
            steps={[0]}
            tileSize={45}
            tileHeight={45}
            tileWidth={45}
          />
        </Body>
    </div>
    )};
};
