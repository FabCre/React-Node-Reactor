import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'src/auth/setUser';
import l10n from 'src/data/l10n';

/**
 * @class User
 * @memberof Component
 * @hideconstructor
 * @classdesc Class User
 */
class User extends React.Component {

  /**
   * @method onLogout
   * @memberof Component.User
   * @param {event} evt
   * @desc Render the component and redirect the user if he is not authenticated.
   */
  onLogout(evt) {
    evt.preventDefault();
    logoutUser();
  }

  /**
   * @method componentDidMount
   * @memberof Component.User
   * @desc Code to execute after component render, here redirect the user if he is not authenticated.
   */
  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.history.push('/');
    }
  }

  /**
   * @method componentDidUpdate
   * @memberof Component.User
   * @desc Code to execute after component update, here redirect the user if he is not authenticated.
   */
  componentDidUpdate() {
    if (this.props.isAuthenticated === false) {
      this.props.history.push('/login');
    }
  }

  /**
   * @method render
   * @memberof Component.User
   * @desc Render the User component.
   */  
  render() {
    const { id, user } = this.props.user;
    return (
      <React.Fragment>
        <div className="layout-primary__content">
          <div className="layout-primary__content-border">
            <NavLink
              className="layout-primary__logo-link"
              exact
              to="/"
              title={l10n.global.logoTitle}
            >
              <img
                className="layout-primary__logo-img"
                src="src/images/logo-v1.0-fullsize.png"
                alt={l10n.global.logoTitle}
              />
            </NavLink>
            <div className="layout-primary__wording">
              <h1 className="layout-primary__h3 user__title">
                <span className="user__welcome">Hello {user}!</span>
                <span className="user__logout">
                  <button className="user__logout-btn" title={l10n.user.clickForLogOut} onClick={this.onLogout}>{l10n.global.logOut}</button>
                </span>
              </h1>

              <div className="user__content user__controls controls">
                <div className="controls__control layout-grid__col-2">
                  <div className="user__container">
                    <div className="controls__move">
                      <img
                        className="controls__img"
                        src="src/images/controls-move.png"
                        alt={l10n.user.movesList}
                        title={l10n.user.movesList}
                      />
                    </div>
                    <h3 className="layout-primary__h5 user__subtitle controls__subtitle">{l10n.user.moves}</h3>
                  </div>
                </div>
                <div className="controls__control layout-grid__col-2">
                  <div className="user__container">
                    <div className="controls__attack">
                      <img
                        className="controls__img"
                        src="src/images/controls-attack.png"
                        alt={l10n.user.attacksList}
                        title={l10n.user.attacksList}
                      />
                    </div>
                    <h3
                      className="layout-primary__h5 user__subtitle controls__subtitle">{l10n.user.attacks}</h3>
                  </div>
                </div>
              </div>

              {/*User's page scores table*/}
              {/*<div className="user__table">
                <h2 className="layout-primary__h5 user__subtitle table__title">scoreboard</h2>
                <div className="table__wrapper">
                  <table className="table">
                    <tr className="table__headings table__row">
                      <th className="table__heading table__col">name</th>
                      <th className="table__heading table__col">score</th>
                      <th className="table__heading table__col">rank</th>
                    </tr>
                    <tr className="table__row">
                      <td className="table__col">filouchou999</td>
                      <td className="table__col">9999</td>
                      <td className="table__col">420</td>
                    </tr>
                  </table>
                </div>
              </div>*/}

            </div>
          </div>
        </div>
        <div className="layout-primary__buttons">
          <NavLink className="user__button" to="/game" title={l10n.user.clickForPlay}>{l10n.user.newGame}</NavLink>
        </div>
      </React.Fragment>
    );
  };
}

export default User;
