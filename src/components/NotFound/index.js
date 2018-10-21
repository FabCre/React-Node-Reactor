import React from 'react';
import { NavLink } from 'react-router-dom';
import l10n from 'src/data/l10n';

/**
 * @method NotFound
 * @memberof Component.Homepage
 * @desc Class NotFound (page 404)
 */
const NotFound = () => (
  <React.Fragment>
    <div className="layout-primary__content not-found">
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
        <div className="not-found__404" title={l10n.notFound.unexistantUrl}>
          <span className="not-found__404-inner not-found__4">4</span>
          <span className="not-found__404-inner not-found__0">
            <img
              className="not-found__0-img"
              src="src/images/404.gif"
              alt={l10n.notFound.unexistantUrl}
            />
          </span>
          <span className="not-found__404-inner not-found__4">4</span>
        </div>
      </div>
    </div>
    <div className="layout-primary__buttons">
      <NavLink
        className="not-found__link"
        exact
        to="/"
        title={l10n.global.linkBack}
      >
        {l10n.global.backToHomepage}
      </NavLink>
    </div>
  </React.Fragment>
);

export default NotFound;
