const connection = require('../config/db');


class QuizzLevel1 {
  /**
   * @method findAllQuestionsLevel1ByQuizId
   * @memberof Server
   * @param {number} - quizz id
   * @param {done} - call next action
   * @returns {object} - questions and possible answers
   * @desc This method fetch all question from a level1 randomly selected quizz.
   */
  static findAllQuestionsLevel1ByQuizId(id, done) {
    connection.query(`SELECT * FROM questions_level_1
                      INNER JOIN quizzes
                      ON quizzes_id = quizzes.id
                      WHERE quizzes_id = ?`, [id], (error, result) => {
      if (error) {
        return done(error);
      }
      if (result.length === 0) {
        return done(false);
      }
      if (result.length !== 0) {
        return done(result);
      }
    }
    );
  };

  /**
   * @method findOneQuestionLevel1ByQuestionId
   * @memberof Server
   * @param {number} - quizz id
   * @param {done} - call next action
   * @returns {object} - single question and corresponding answers
   * @desc This method fetch one question from the previously selected quizz.
   */
  static findOneQuestionLevel1ByQuestionId(id, done) {
    connection.query(`SELECT * FROM questions_level_1
                      INNER JOIN quizzes
                      ON quizzes_id = quizzes.id
                      WHERE questions_level_1.id = ?`, [id], (error, result) => {
      if (error) {
        return done(error);
      }
      if (result.length === 0) {
        return done(false);
      }
      if (result.length !== 0) {
        return done(result);
      }
    });
  };

  /**
   * @method findOneAnswerLevel1ByQuestionId
   * @memberof Server
   * @param {number} - answer id
   * @param {number} - question id
   * @param {done} - call next action
   * @returns {object} - single answer and its description
   * @desc This method fetch one Answer from the user's answer during the game.
   */
  static findOneAnswerLevel1ByQuestionId(answerId, id, done) {
    connection.query(`SELECT question, answers_level_1_id, answerquote, answers_level_1.id, answers_level_1.answer
                      FROM questions_level_1
                      INNER JOIN answers_level_1
                      ON answers_level_1_id = answers_level_1.id
                      WHERE answers_level_1_id = ?
                      AND questions_level_1.id = ?`, [answerId, id], (error, result) => {
      if (error) {
        return done(error);
      }
      if (result.length === 0) {
        return done(false);
      }
      if (result.length !== 0) {
        return done(result);
      }
    });
  };
};

module.exports = QuizzLevel1;
