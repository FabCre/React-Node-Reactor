/**
 * @namespace Component
 * @desc All Components of Reactor
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import Homepage from 'src/containers/Home/Homepage';
import Login from 'src/containers/Home/Login';
import Signup from 'src/containers/Home/Signup';
import Forgotpassword from 'src/containers/Home/Forgotpassword';
import User from 'src/containers/Home/User';
import Game from 'src/containers/Game';
import GameWon from 'src/components/GameWon';
import GameOver from 'src/components/GameOver';
import NotFound from 'src/components/NotFound';

import 'src/styles/index.sass';

/**
 * @class App
 * @memberof Component
 * @hideconstructor
 * @classdesc Class App
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    // here throttle allows the Reactor death animation to complete
    this.gameOver = _.throttle(this.gameOver, 5000,
      {
        'leading': true,
        'trailing': false
      });
    // here throttle allows the Reactor win animation to complete
    this.gameWon = _.throttle(this.gameWon, 5000, {
      'leading': true,
      'trailing': false
    });
  };

  /**
   * @method componentDidUpdate
   * @memberof Component.App
   * @desc Event listener based on game loop.
   */
  componentDidUpdate() {
    if (this.props.reactor.stats.pv <= 0) {
      setTimeout(() => {
        window.location.reload(true);
        this.gameOver();
      }, 2000);
    }
    if (this.props.boss.bossStats.pv <= 0) {
      this.props.boss.bossState = 5;
      setTimeout(() => {
        window.location.reload(true);
        this.gameWon();
      }, 5000);
    }
  };

  /**
   * @method gameWon
   * @memberof Component.App
   * @desc Stop the game and redirect on game-won route.
   */
  gameWon() {
    // If Boss die it redirect to the game win page
    this.props.history.push('/game-won');
  };

  /**
   * @method gameOver
   * @memberof Component.App
   * @desc Stop the game and redirect on game-over route.
   */
  gameOver() {
    // If Reactor die it redirect to the game over page
    this.props.history.push('/game-over');
  };

  /**
   * @method render
   * @memberof Component.App
   * @desc Render all App route with React-router.
   */
  render() {
    return (
      <main className="app">
        <Switch>
          <Route exact path="/game">
            <Game />
          </Route>
          <div className="layout-primary__wrapper">
            <section className="layout-primary">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgotpassword" component={Forgotpassword} />
                <Route path="/user" component={User} />
                <Route path="/game-over" component={GameOver} />
                <Route path="/game-won" component={GameWon} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </div>
        </Switch>
      </main>
    );
  }
};

export default App;
