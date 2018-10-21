import React from 'react';
import { NavLink } from 'react-router-dom';
import l10n from 'src/data/l10n';

/**
 * @method GameOver
 * @memberof Component.Game
 * @hideconstructor
 * @desc Class GameOver
 */
const GameOver = () => (
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
        <div className="game-over" title={l10n.gameOver.gameOver}>
          <p className="game-over__inner">
            Game
          </p>
          <p className="game-over__inner">
            Over
          </p>
        </div>
      </div>
    </div>
    <div className="layout-primary__buttons">
      <NavLink
        className="game-over__link"
        exact
        to="/"
        title={l10n.global.linkBack}
      >
        {l10n.global.backToHomepage}
      </NavLink>
    </div>
  </React.Fragment>
);

export default GameOver;
