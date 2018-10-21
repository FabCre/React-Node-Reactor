const connection = require('../config/db');


class QuizzLevel2 {
  /**
   * @method findAllQuestionsLevel2ByQuizId
   * @memberof Server
   * @param {number} - quizz id
   * @param {done} - call next action
   * @returns {object} - questions and possible answers
   * @desc This method fetch all question from a level2 randomly selected quizz.
   */
  static findAllQuestionsLevel2ByQuizId(id, done) {
    connection.query(`SELECT * FROM questions_level_2
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
   * @method findOneQuestionLevel2ByQuestionId
   * @memberof Server
   * @param {number} - quizz id
   * @param {done} - call next action
   * @returns {object} - single question and corresponding answers
   * @desc This method fetch one question from the previously selected quizz.
   */
  static findOneQuestionLevel2ByQuestionId(id, done) {
    connection.query(`SELECT * FROM questions_level_2
                      INNER JOIN quizzes
                      ON quizzes_id = quizzes.id
                      WHERE questions_level_2.id = ?`, [id], (error, result) => {
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
   * @method findOneAnswerLevel2ByQuestionId
   * @memberof Server
   * @param {number} - answer id
   * @param {number} - question id
   * @param {done} - call next action
   * @returns {object} - single answer and its description
   * @desc This method fetch one Answer from the user's answer during the game.
   */
  static findOneAnswerLevel2ByQuestionId(answerId, id, done) {
    connection.query(`SELECT question, answerquote, answers_level_2.id, answers_level_2.answer
                      FROM questions_level_2
                      INNER JOIN answers_level_2
                      ON questions_level_2.id = questions_level_2_id
                      WHERE answers_level_2.answer = ?
                      AND questions_level_2.id = ?`, [answerId, id], (error, result) => {
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

module.exports = QuizzLevel2;
