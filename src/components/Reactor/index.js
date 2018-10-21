import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Matter from 'matter-js';
import { Body, Sprite } from 'react-game-kit/lib';
import _ from 'lodash';

/**
 * @class Reactor
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Reactor
 */
export default class Reactor extends Component {
  static propTypes = {
    keys: PropTypes.object,
    onEnterRoom: PropTypes.func
  };

  static contextTypes = {
    engine: PropTypes.object,
    scale: PropTypes.number,
    loop: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.handlePlayStateChanged = this.handlePlayStateChanged.bind(this);
    this.throttleChangeRoom = _.throttle(this.throttleChangeRoom, 500, {
      'leading': true,
      'trailing': false
    });
    this.timestamp = _.throttle(this.timestamp, 1000, {
      'leading': true,
      'trailing': false
    });
  };

  /**
   * @method componentDidMount
   * @memberof Component.Reactor
   * @desc Code to execute after component update, here trigger matter.js update cycle
   */
  componentDidMount() {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
  };

  /**
   * @method componentWillUnmount
   * @memberof Component.Reactor
   * @desc Code to execute before component destruction, here trigger matter.js update cycle
   */
  componentWillUnmount() {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
  };

  /**
   * @method Move
   * @memberof Component.Reactor
   * @param {object} body
   * @param {object} x
   * @param {object} y
   * @desc Matter.js movement via velocity to direction x / y
   */
  move(body, x, y) {
    Matter.Body.setVelocity(body, { x, y });
  };

  /**
   * @method animationState
   * @memberof Component.Reactor
   * @desc Animation state evaluation and conditional Idle return
   */
  animationState() {
    const { keys } = this.props;
    // if i'm not intending to move, i stop moving
    if (!keys.isDown(keys.RIGHT) &&
      !keys.isDown(keys.LEFT) &&
      !keys.isDown(keys.UP) &&
      !keys.isDown(keys.DOWN)) {
      this.props.stopBody();
    }
    if (this.props.reactor.isAnimated && this.props.reactor.spritePlaying === false) {
      // if i'm not doing anything, i return to idle state
      if (!keys.isDown(keys.RIGHT) &&
        !keys.isDown(keys.LEFT) &&
        !keys.isDown(keys.UP) &&
        !keys.isDown(keys.DOWN) &&
        !keys.isDown(keys.ATTACK_RIGHT) &&
        !keys.isDown(keys.ATTACK_LEFT) &&
        !keys.isDown(keys.ATTACK_UP) &&
        !keys.isDown(keys.ATTACK_DOWN)) {
          if(this.props.characterState !== 16) {
            this.props.returnIdle();
          }  
      }
      if (keys.isDown(keys.ATTACK_RIGHT) ||
        keys.isDown(keys.ATTACK_LEFT) ||
        keys.isDown(keys.ATTACK_UP) ||
        keys.isDown(keys.ATTACK_DOWN)) {
        if (this.props.characterState !== 16) {
          this.props.returnIdle();
        } 
      }
    }
  };

  /**
   * @method checkRoomChange
   * @memberof Component.Reactor
   * @desc Current room evaluation + trigger for the next Room call
   */
  // TODO => refactoring, swap multiple raw function call for props inheritance into conditional unified function call 
  checkRoomChange() {
    let enteredDoor = null;
    const { body } = this.body;
    const { globalmap } = this.props.globalmapProps;
    const { roomX, roomY } = this.props.currentRoom;
    const timeout = () => { this.resetCollisions() };
    const shortTimeout = () => { this.shortResetCollisions() };
    
//-----------------------------------------------------PAIRLIST[0]----------------------------------------------------//
    if (this.context.engine.pairs.list[0]) {
      if(this.context.engine.pairs.list[0].collision.bodyA.label === 'Reactor') 
      {
        if(this.context.engine.pairs.list[0].collision.bodyB.label === 'doorNorth') 
        {
          if (globalmap[roomX][roomY].mapRoom) 
          {
            if (globalmap[roomX][roomY].mapRoom.doorNorth.isActive === true) 
            {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 1;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 544, y: 700 });
              this.props.stopBody();
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[1].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'doorSouth') 
        {
          if (globalmap[roomX][roomY].mapRoom)
          {
            if (globalmap[roomX][roomY].mapRoom.doorSouth.isActive === true) 
            {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 3;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 544, y: 145 });
              this.props.stopBody();
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[2].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'doorWest') 
        {
          if (globalmap[roomX][roomY].mapRoom) 
          {
            if (globalmap[roomX][roomY].mapRoom.doorWest.isActive === true) 
            {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 4;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 975, y: 414 });
              this.props.stopBody();
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[3].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'doorEast') 
        {
          if (globalmap[roomX][roomY].mapRoom) 
          {
            if (globalmap[roomX][roomY].mapRoom.doorEast.isActive === true) 
            {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 2;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 112, y: 414 });
              this.props.stopBody();
    
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[4].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'chest1') 
        {
          this.props.stopBody();

          const { x, y } = this.context.engine.world.bodies[0].position;
    
          Matter.Body.setPosition(body, {x: 544, y: 550});
          const quizzState = 1;
          this.props.initQuizz(quizzState);
        }
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'hole') 
        {
          // we stop the character
          this.props.stopBody();
    
          // we stop the possibility of colliding with holes
          this.context.engine.world.bodies[0].collisionFilter.group = -1;
          for (let count = 8; count < 37; count++) 
          {
            this.context.engine.world.bodies[count].collisionFilter.group = -1;
          }

          this.props.holeCollision();
    
          shortTimeout();
        } 
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'boss_attack_front') {
          const bossDamage = this.props.boss.bossStats.damage;
          this.props.receiveDamage(bossDamage);
          shortTimeout();
        } 
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'boss_attack_leftside') {
          const bossDamage = this.props.boss.bossStats.damage;
          this.props.receiveDamage(bossDamage);
          shortTimeout();
        }
        else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'boss_attack_rightside') {
          const bossDamage = this.props.boss.bossStats.damage;
          this.props.receiveDamage(bossDamage);
          shortTimeout();
        } else if (this.context.engine.pairs.list[0].collision.bodyB.label === 'Boss'){
          if (this.props.reactor.isAttacking === true) {
            const reactorDamage = this.props.reactor.stats.damage;
            this.props.bossDamage(reactorDamage);
          }
        }
      }
    }       

//-----------------------------------------------------PAIRLIST[1]----------------------------------------------------//    
    if (this.context.engine.pairs.list[1])
    {
      if(this.context.engine.pairs.list[1].collision.bodyA.label === 'Reactor') 
      {
        if(this.context.engine.pairs.list[1].collision.bodyB.label === 'doorNorth') 
        {
          if (globalmap[roomX][roomY].mapRoom) 
          {
            if (globalmap[roomX][roomY].mapRoom.doorNorth.isActive === true) 
            {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 1;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 544, y: 700 });
              this.props.stopBody();
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[1].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'doorSouth') 
        {
          if (globalmap[roomX][roomY].mapRoom) 
          {
            if (globalmap[roomX][roomY].mapRoom.doorSouth.isActive === true) 
            {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 3;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 544, y: 145 });
              this.props.stopBody();
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[2].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'doorWest') 
        {
          if (globalmap[roomX][roomY].mapRoom) {
            if (globalmap[roomX][roomY].mapRoom.doorWest.isActive === true) {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 4;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 975, y: 414 });
              this.props.stopBody();
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[3].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'doorEast') 
        {
          if (globalmap[roomX][roomY].mapRoom) {
            if (globalmap[roomX][roomY].mapRoom.doorEast.isActive === true) {
              // we set the door entered to determine next roomn in reducer
              enteredDoor = 2;
    
              // we stop the character
              this.props.stopBody();
              Matter.Body.setPosition(body, { x: 112, y: 414 });
              this.props.stopBody();
    
    
              // we stop the possibility of colliding with doors
              body.collisionFilter.group = -1;
              this.context.engine.world.bodies[4].collisionFilter.group = -1;
    
              // we set the state as leaving and we trigger the room change
              this.props.changeRoom(enteredDoor);
    
              timeout();
    
            }
          }
        } 
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'chest1')
        {
          this.props.stopBody();

          const { x, y } = this.context.engine.world.bodies[0].position;

          Matter.Body.setPosition(body, {x: 544, y: 550});
          const quizzState = 1;
          this.props.initQuizz(quizzState);
        }
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'hole')
        {
          // we stop the character
          this.props.stopBody();
          // const { x, y } = this.context.engine.world.bodies[0].position;
    
          // we stop the possibility of colliding with holes
          this.context.engine.world.bodies[0].collisionFilter.group = -1;
          for (let count = 8; count < 37; count++) {
            this.context.engine.world.bodies[count].collisionFilter.group = -1;
          }

          this.props.holeCollision();
    
          shortTimeout();
        }
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'boss_attack_front') {
          const bossDamage = this.props.boss.bossStats.damage;
          this.props.receiveDamage(bossDamage);
          shortTimeout();
        }
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'boss_attack_leftside') {
          const bossDamage = this.props.boss.bossStats.damage;
          this.props.receiveDamage(bossDamage);
          shortTimeout();
        }
        else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'boss_attack_rightside') {
          const bossDamage = this.props.boss.bossStats.damage;
          this.props.receiveDamage(bossDamage);
          shortTimeout();
        } else if (this.context.engine.pairs.list[1].collision.bodyB.label === 'Boss') {
          if (this.props.reactor.isAttacking === true) {
            const reactorDamage = this.props.reactor.stats.damage;
            this.props.bossDamage(reactorDamage);
          }
        }
      }
    }

    //---------------------------------------------BALLCOLLISION-----------------------------------    
    if (this.context.engine.pairs.list[0]) {
      if (this.context.engine.pairs.list[0].collision.bodyB.label === 'trapwin' && this.context.engine.pairs.list[0].collision.bodyA.label === 'ball') {
        this.props.ballCollision();
      }
    }
    
    if (this.context.engine.pairs.list[1]) {  
      if (this.context.engine.pairs.list[1].collision.bodyB.label === 'trapwin' && this.context.engine.pairs.list[1].collision.bodyA.label === 'ball') {
        this.props.ballCollision();
      }
    }
  }

    //---------------------------------------------SIDEATTACKBOSSCOLLISION-------------------------

  /**
   * @method throttleChangeRoom
   * @memberof Component.Reactor
   * @desc Heavy function call throttling and optimisation
   */
  throttleChangeRoom() {
    if (this.body) {
      this.filterRoomChange();
    }
  }

  /**
  * @method shortResetCollisions
  * @memberof Component.Reactor
  * @desc Room changing multi - condition validation and delay
  */
  filterRoomChange() {
    const { body } = this.body;
    const crc = () => {
      setTimeout(() => {
        this.checkRoomChange()
      }, 10);
    };
    if (this.props.reactor.isLeaving === false) {
      if (body.collisionFilter.group !== -1) {
        if (this.context.engine.pairs.list.length > 0) {
          crc()
        }
      }
    }
  }

  /**
   * @method shortResetCollisions
   * @memberof Component.Reactor
   * @desc Short - fused timer to reset collisioning = mainly to avoid loop collisions
   */
  shortResetCollisions() {
    const { body } = this.body;
    // TODO set the stop body for 1 second or push the character back
    setTimeout(() => {
      this.props.reactor.isLeaving = false;
      body.collisionFilter.group = 0;
      if (this.context.engine.world.bodies.lenght > 20) {
        for (let count = 8; count < 37; count++) {
          this.context.engine.world.bodies[count].collisionFilter.group = 0;
        }
      }
    }, 500);
  }

  /**
   * @method resetCollisions
   * @memberof Component.Reactor
   * @desc Long - fused timer to reset collisioning = used to delay door mechanic without double tapping
   */
  resetCollisions() {
    const { body } = this.body;
    setTimeout(() => {
      this.props.reactor.isLeaving = false;
      body.collisionFilter.group = 0;
    }, 1000);
  };

  /**
   * @method timestamp
   * @memberof Component.Reactor
   * @desc Call to timestamp MiddleWare - used for localTime
   */
  timestamp() {
    this.props.getLogger();
  }

  /**
   * @method checkIfAlive
   * @memberof Component.Reactor
   * @desc Reactor state listener, triggers death animation and foward to gameOver route
   */
  checkIfAlive() {
    if(this.props.reactor.stats.pv <= 0) {
      this.props.deathAnimation();
    }
  }

  /**
   * @method handlePlayStateChanged
   * @memberof Component.Reactor
   * @desc update function into gameLoop => requestAnimationFrame every 16 ms
   */
  update() {
    const body = this.context.engine.world.bodies[0];
    const { speedX, speedY } = this.props.reactor.characterSpeed;
    const { keys } = this.props;
    const { world, engine } = this.context.engine;

    this.checkIfAlive();

    this.timestamp();

    const checkAnimation = () => {
      setTimeout(() => {
        this.animationState();
      }, 3);
    }
    this.throttleChangeRoom.cancel;
    this.throttleChangeRoom();
    // checking the current pressed keys
    this.props.checkKeys(keys);

    // setting friction and applying velocity (moving the body)
    Matter.Body.set(body, 'friction', 1);
    this.move(body, speedX, speedY);

    // updating position after movement
    this.props.setPosition((body.position.x), (body.position.y));
    
    checkAnimation();
  };

  /**
   * @method handlePlayStateChanged
   * @memberof Component.Reactor
   * @desc Internal react_game_kit animation state check
   */
  handlePlayStateChanged(state) {
    this.props.reactor.spritePlaying = state ? true : false;
  };

  /**
   * @method getWrapperStyles
   * @memberof Component.Reactor
   * @desc sprite sync with matter body
   */
  getWrapperStyles() {
    const { characterPosition } = this.props.reactor;
    const { x, y } = characterPosition;
    const targetX = x;
    const targetY = y;

    return {
      width: 117,
      height: 117,
      position: 'absolute',
      transform: `translate(${targetX - 52}px, ${targetY - 52}px)`,
      transformOrigin: 'left top',
    };
  };

  /**
   * @method render
   * @memberof Component.Reactor
   * @desc Render the Reactor.
   */
  render() {
    const x = this.props.reactor.characterPosition.x;
    const y = this.props.reactor.characterPosition.y;
    const { repeat, characterState } = this.props.reactor;
    const reactor = 0x0001;
    return (
      <div id='reactor' style={this.getWrapperStyles()}>

        <Body
          args={[x, y, 40, 90]}
          scale={0.2}
          inertia={Infinity}
          label={'Reactor'}
          category={reactor}
          // TODO compatibility issue With non webkit browsers
          ref={b => {
            this.body = b;
          }}
        >
          <Sprite
            repeat={repeat}
            onPlayStateChanged={this.handlePlayStateChanged}
            src="src/images/reactor.png"
            scale={0.2}
            state={characterState}
            steps={[0, 1, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2,
                    2, 2, 2
                   ]}
            ticksPerFrame={8}
            tileSize={117}
            tileHeight={512}
            tileWidth={512}
          />
        </Body>
      </div>
    );
  }
}
