import React from 'react';
import { NavLink } from 'react-router-dom';
import l10n from 'src/data/l10n';

/**
 * @class Homepage
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Homepage
 */
class Homepage extends React.Component {

  /**
   * @method componentDidMount
   * @memberof Component.Homepage
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/user');
    }
  }

  /**
   * @method render
   * @memberof Component.Homepage
   * @desc Render the Homepage when routed.
   */
  render() {
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
            <div className="layout-primary__wording homepage__wording">
              <h1 className="layout-primary__h1">{l10n.global.projectName}</h1>
              <p className="layout-primary__p">{l10n.homepage.promoWordingP1}</p>
              <p className="layout-primary__p">{l10n.homepage.promoWordingP2}</p>
              <p className="layout-primary__p">{l10n.homepage.promoWordingP3}</p>
            </div>
          </div>
        </div>
        <div className="layout-primary__buttons">
          <div className="homepage__buttons">
            <NavLink
              className="homepage__button"
              to="/signup"
              title={l10n.global.signUp}
            >
              {l10n.global.signUp}
            </NavLink>
            <NavLink
              className="homepage__button"
              to="/login"
              title={l10n.global.logIn}
            >
              {l10n.global.logIn}
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default Homepage;
