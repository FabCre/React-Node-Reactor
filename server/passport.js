const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const connection = require('./config/db');
const options = {};

options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'zob';


class PassportJWT {
  /**
 * @method jwtToPassport
 * @memberof Server
 * @see {@link https://github.com/themikenicholson/passport-jwt}
 * @desc This method lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.
 */
  static jwtToPassport(passport) {
    passport.use(new JWTStrategy(options, (jwt_payload, done) => {
      connection.query('SELECT id FROM users WHERE id = ?', [jwt_payload.id], (error, result) => {
        if (error) {
          return done(null, error);
        }
        if (result.length === 0) {
          return done(null, false);
        }
        if (result) {
          const userId = result[0];
          return done(null, { userId });
        }
      });
    })
    );
  };
};

module.exports = PassportJWT;
