/**
 * @namespace Server
 * @desc Node Server description (method, route...).
 */

const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const l10n = require('./locales/l10n');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

/**
* EXPRESS CONFIG DEFAULTS
*/

// Usefull to get data from REQUEST at the body key
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Allow Connection from origin and set options for methods and credentials
app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
  }
));

/**
* MIDDLEWARE
*/

// passport initialisation - session definition is replaced by JWT here
app.use(passport.initialize());

/**
* ROUTES
*/

/**
 * @function PostSignup
 * @memberof Server
 * @param {string} route - The route /signup.
 * @param {array} verification - Array of each fields of the form.
 * @param {signupCallback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc Signup function:
 *  verifies signup form data, create user in DB if valid, return an error array otherwise.
 *  On DB insertion, select the last registered user, initiate a JWT token creation and return it to the app.
 */

// Input verification methods issued from express-validator
const { check, validationResult } = require('express-validator/check');

// Signup Form insert into Database
app.post('/signup',
  // Data validation from form input
  [check('user').isLength({ min: 4 }).withMessage(l10n.errors.user),
    check('email').isEmail().withMessage(l10n.errors.emailSignup),
    check('password').isLength({ min: 5 }).withMessage(l10n.errors.password),
    // Checking of the equality between password and confirmPassword (only works if req is past as parameter due to interaction express validator and bodyparser)
    check('password', 'invalid password').custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error(l10n.errors.confirmPassword);
      } else {
        return value;
      }
    })
  ],
  // Data insertion in DB with error handling
  (request, response) => {
    /**
     * @callback signupCallback
     * @memberof PostSignup
     * @param {object} request
     * @param {object} response
     * @returns {object} A formatted operation definition.
     * @desc signup callback based on request param, fowarding response from the server
     */
    // If there is an error, return the array of error(s) with to the user with 401 status (Pop up a modal at the Sign Up page)
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      console.log(errors.array(), 'Sign up validation check');
      return response.status(401).send({ success: false, errors: errors.array(), message: l10n.errors.accountSignupFailed }).end();
    }
    // Require model to use method to CRUD in MySQL BDD
    const Signup = require('./models/Signup');
    // Create const with data from Request
    const { user, email, password } = request.body;
    // Use Create method to insert data and return result(s) find in BDD
    Signup.create(user, email, password, (result) => {
      // If there is a result, creation of the JWT and return to the user with 200 status and the token. The token is store in the user's local storage
      if (result.lenght !== 0) {
        console.log(result, 'id du dernier enregistrement de la bdd');
        const payload = {
          id: result.id,
          user: result.user
        };
        jwt.sign(payload, 'JWTzob', {
          expiresIn: 3600
        },
        (error, token) => {
          if (error) {
            console.error(error, 'there is a problem with JWTZOB');
          } else {
            response.status(201).send(
              {
                success: true,
                token: token,
                message: l10n.success.messageSignup
              }
            ).end();
          }
        });
      } else {
        // If there is a problem in the callback return with 401 status to the user
        response.status(401).send({ success: false, message: l10n.errors.accountSignupFailed }).end();
      }
    });
  });


/**
 * @function PostLogin
 * @memberof Server
 * @param {string} route - The route /login.
 * @param {array} verification - Array of each fields of the form.
 * @param {loginCallback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc login function: verifies login form, if valid, return an error array otherwise
 */

// Login Form select into Database
app.post('/login',
  // Data validation from form input
  [check('user').isLength({ min: 4 }).withMessage(l10n.errors.user),
    check('password').isLength({ min: 5 }).withMessage(l10n.errors.password)],
  // Data selection in DB with error handling
  (request, response) => {
    /**
     * @callback loginCallback
     * @memberof PostLogin
     * @param {object} request
     * @param {object} response
     * @returns {object} A formatted operation definition.
     * @desc login callback based on request param, fowarding response from the server
     */
    // If there is an error, return the array of error(s) with to the user with 401 status (Pop up a modal at the Sign Up page)
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      console.log(errors.array(), 'Log in validation check');
      return response.status(401).send({ success: false, errors: errors.array(), message: l10n.errors.accountLoginFailed }).end();
    }
    // Require model to use method to CRUD in MySQL BDD
    const Login = require('./models/Login');
    // Create const with data from Request
    const { user, password } = request.body;
    // Use Create method to insert data and return result(s) find in BDD
    Login.find(user, password, (result) => {
      // If there is a result, creation of the JWT and return to the user with 200 status and the token. The token is store in the user's local storage
      if (user === result.user) {
        const payload = {
          id: result.id,
          user: result.user
        };
        jwt.sign(payload, 'JWTzob', {
          expiresIn: 3600
        },
        (error, token) => {
          if (error) {
            console.error(error, 'there is a problem with JWTZOB');
          } else {
            response.status(201).send(
              {
                success: true,
                token: token,
                message: l10n.success.messageLogin
              }
            ).end();
          }
        });
      } else {
        // If there is a problem in the callback return with 401 status to the user
        response.status(401).send({ success: false, message: l10n.errors.accountLoginFailed }).end();
      }
    });
  });


/**
 * @function PostForgotpassword
 * @memberof Server
 * @param {string} route - The route /forgotpassword.
 * @param {array} verification - Array of each fields of the form.
 * @param {forgotpasswordCallback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc forgotpassword function: verifies forgotpassword form, if valid, return an error array otherwise
 */
// Forgotpassword Form send a email
app.post('/forgotpassword',
  // Data validation from form input
  [check('email').isEmail().withMessage(l10n.errors.emailNotFound)],
  // TODO a valid response with a link to reset the password and request to BDD to find the user
  (request, response) => {
    /**
     * @callback forgotpasswordCallback
     * @memberof PostForgotpassword
     * @param {object} request
     * @param {object} response
     * @returns {object} A formatted operation definition.
     * @desc forgotpassword callback based on request param, fowarding response from the server
     */
    response.status(200).send({ success: true, message: l10n.success.messageForgotpassword });
  });

/**
 * @function QuizzQuestionLevel1
 * @memberof Server
 * @param {string} route - The route /quizz/level1/:id.
 * @param {getlevel1Callback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc quizzlevel1 function: verifies quizzlevel1 form, if valid, return an error array otherwise
 */
// Quizz Level 1 GET to get a question
app.get('/quizz/level1/:id', (request, response) => {
  /**
   * @callback getlevel1Callback
   * @memberof QuizzQuestionLevel1
   * @param {object} request
   * @param {object} response
   * @returns {object} A formatted operation definition.
   * @desc quizzlevel1 callback based on request param, fowarding response from the server
    */
  const QuizzLevel1 = require('./models/QuizzLevel1');
  const { id } = request.params;
  QuizzLevel1.findOneQuestionLevel1ByQuestionId(id, (result) => {
    if (result !== false) {
      response.status(200).send({ success: true, result });
    } else {
      response.status(500).send({ success: false, message: l10n.errors.mysqlrequest }).end();
    }
  });
});

/**
 * @function QuizzAnswerLevel1
 * @memberof Server
 * @param {string} route - The route /quizz/level1/:id.
 * @param {postlevel1Callback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc quizzlevel1 function: verifies quizzlevel1 form, if valid, return an error array otherwise
 */
// Quizz Level 1 POST to get the correct answer and return true or false to the answer
app.post('/quizz/level1/:id', (request, response) => {
  /**
   * @callback postlevel1Callback
   * @memberof QuizzAnswerLevel1
   * @param {object} request
   * @param {object} response
   * @returns {object} A formatted operation definition.
   * @desc quizzlevel1 callback based on request param, fowarding response from the server
    */
  const QuizzLevel1 = require('./models/QuizzLevel1');
  const { id } = request.params;
  const { answerLevel1 } = request.body;
  QuizzLevel1.findOneAnswerLevel1ByQuestionId(answerLevel1, id, (result) => {
    if (result === false) {
      response.status(200).send({ success: false });
    } else if (result !== false) {
      response.status(200).send({ success: true, result });
    } else {
      response.status(500).send({ success: false, message: l10n.errors.mysqlrequest }).end();
    }
  });
});

/**
 * @function QuizzQuestionLevel2
 * @memberof Server
 * @param {string} route - The route /quizz/level2/:id.
 * @param {getlevel2Callback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc quizzlevel2 function: verifies quizzlevel2 form, if valid, return an error array otherwise.
 */
// Quizz Level 2 GET to get a question
app.get('/quizz/level2/:id', (request, response) => {
  /**
   * @callback getlevel2Callback
   * @memberof QuizzQuestionLevel2
   * @param {object} request
   * @param {object} response
   * @returns {object} A formatted operation definition.
   * @desc quizzlevel2 callback based on request param, fowarding response from the server
    */
  const QuizzLevel2 = require('./models/QuizzLevel2');
  const { id } = request.params;
  QuizzLevel2.findOneQuestionLevel2ByQuestionId(id, (result) => {
    if (result !== false) {
      response.status(200).send({ success: true, result });
    } else {
      response.status(500).send({ success: false, message: l10n.errors.mysqlrequest }).end();
    }
  });
});

/**
 * @function QuizzAnswerLevel2
 * @memberof Server
 * @param {string} route - The route /quizz/level2/:id.
 * @param {postlevel2Callback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc quizzlevel2 function: verifies quizzlevel2 form, if valid, return an error array otherwise.
 */
// Quizz Level 2 POST to get the correct answer and return true or false to the answer
app.post('/quizz/level2/:id', (request, response) => {
  /**
   * @callback postlevel2Callback
   * @memberof QuizzAnswerLevel2
   * @param {object} request
   * @param {object} response
   * @returns {object} A formatted operation definition.
   * @desc quizzleve2 callback based on request param, fowarding response from the server
    */
  const QuizzLevel2 = require('./models/QuizzLevel2');
  const { id } = request.params;
  const { answerLevel2 } = request.body;
  QuizzLevel2.findOneAnswerLevel2ByQuestionId(answerLevel2, id, (result) => {
    if (result === false) {
      response.status(200).send({ success: false });
    } else if (result !== false) {
      response.status(200).send({ success: true, result });
    } else {
      response.status(500).send({ success: false, message: l10n.errors.mysqlrequest }).end();
    }
  });
});

/**
 * @function QuizzQuestionLevel3
 * @memberof Server
 * @param {string} route - The route /quizz/level3/:id.
 * @param {getlevel3Callback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc quizzlevel3 function: verifies quizzlevel3 form, if valid, return an error array otherwise.
 */
// Quizz Level 3 GET to get a question
app.get('/quizz/level3/:id', (request, response) => {
  /**
   * @callback getlevel3Callback
   * @memberof QuizzQuestionLevel3
   * @param {object} request
   * @param {object} response
   * @returns {object} A formatted operation definition.
   * @desc quizzlevel3 callback based on request param, fowarding response from the server
    */
  const QuizzLevel3 = require('./models/QuizzLevel3');
  const { id } = request.params;
  QuizzLevel3.findOneQuestionLevel3ByQuestionId(id, (result) => {
    if (result !== false) {
      response.status(200).send({ success: true, result });
    } else {
      response.status(500).send({ success: false, message: l10n.errors.mysqlrequest }).end();
    }
  });
});
/**
 * @function QuizzAnswerLevel3
 * @memberof Server
 * @param {string} route - The route /quizz/level3/:id.
 * @param {postlevel3Callback} (request,response) - The callback that handles the request and the response.
 * @returns {object} A formatted operation definition.
 * @desc quizzlevel3 function: verifies quizzlevel3 form, if valid, return an error array otherwise.
 */
// Quizz Level 3 POST to get the correct answer and return true or false to the answer
app.post('/quizz/level3/:id', (request, response) => {
    /**
   * @callback postlevel3Callback
   * @memberof QuizzAnswerLevel3
   * @param {object} request
   * @param {object} response
   * @returns {object} A formatted operation definition.
   * @desc quizzlevel3 callback based on request param, fowarding response from the server
    */
  const QuizzLevel3 = require('./models/QuizzLevel3');
  const { id } = request.params;
  const { answer1, answer2 } = request.body;
  QuizzLevel3.findOneAnswerLevel3ByQuestionId(answer1, answer2, id, (result) => {
    if (result === false) {
      response.status(200).send({ success: false });
    } else if (result !== false) {
      response.status(200).send({ success: true, result });
    } else {
      response.status(500).send({ success: false, message: l10n.errors.mysqlrequest }).end();
    }
  });
});

/**
 * @function Listen
 * @memberof Server
 * @desc Node server listens on port 3001 (localhost:3001 in dev build)
 */

app.listen(3001, () => {
  console.log('Node Server listens on the port 3001');
});
