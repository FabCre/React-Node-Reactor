import React from 'react';
import { NavLink } from 'react-router-dom';
import l10n from 'src/data/l10n';

/**
 * @method GameWon
 * @memberof Component.Game
 * @hideconstructor
 * @desc Class GameWon
 */
const GameWon = () => (
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
        <div className="game-won" title={l10n.gameWon.gameWon}>
          <div className="game-won__wording--big">
            <span className="game-won__content game-won__uppercase game-won__uppercase--first-child">YOU</span>
            <span className="game-won__content game-won__uppercase">W</span>
            <span className="game-won__content game-won__reactor">
              <img
                className="game-won__reactor-img"
                src="src/images/game-win.png"
                alt="I"
              />
            </span>
            <span className="game-won__content game-won__uppercase">N</span>
          </div>
          <div className="game-won__wording">
            <p>{l10n.gameWon.congratulations}</p>

            <p className="game-won__team">{l10n.global.team}</p>
          </div>
          <div className="game-won__wording">
            <p>{l10n.gameWon.cYa}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="layout-primary__buttons">
      <NavLink
        className="game-won__link"
        exact
        to="/"
        title={l10n.global.linkBack}
      >
        {l10n.global.backToHomepage}
      </NavLink>
    </div>
  </React.Fragment>
);

export default GameWon;
