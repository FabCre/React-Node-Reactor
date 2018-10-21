const connection = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class Signup {
    /**
   * @method create
   * @memberof Server
   * @param {string} - username
   * @param {email} - user's email
   * @param {password} - user's password
   * @param {done} - call next action
   * @returns {object} - user and userId
   * @desc Inset user into DB if valid form data are submited.
   */
  static create(user, email, password, done) {
    bcrypt.hash(password, saltRounds, (error, hash) => {
      if (error) {
        return done(error);
      }
      connection.query('INSERT INTO users SET user = ?, email = ?, password = ?', [user, email, hash], (error, result) => {
        if (error) {
          return done(error);
        }
        connection.query('SELECT LAST_INSERT_ID() as id', (error, result) => {
          if (error) {
            return done(error);
          }
          const { id } = result[0];
          done({ user, id });
        });
      });
    });
  }
};

module.exports = Signup;
