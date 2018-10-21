const connection = require('../config/db');

class QuizzLevel3 {
  /**
   * @method findAllQuestionsLevel3ByQuizId
   * @memberof Server
   * @param {number} - quizz id
   * @param {done} - call next action
   * @returns {object} - questions and possible answers
   * @desc This method fetch all question from a level3 randomly selected quizz.
   */
  static findAllQuestionsLevel3ByQuizId(id, done) {
    connection.query(`SELECT * FROM questions_level_3
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
   * @method findOneQuestionLevel3ByQuestionId
   * @memberof Server
   * @param {number} - quizz id
   * @param {done} - call next action
   * @returns {object} - single question and corresponding answers
   * @desc This method fetch one question from the previsously selected quizz.
   */
  static findOneQuestionLevel3ByQuestionId(id, done) {
    connection.query(`SELECT * FROM questions_level_3
                      INNER JOIN quizzes
                      ON quizzes_id = quizzes.id
                      WHERE questions_level_3.id = ?`, [id], (error, result) => {
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
   * @method findOneAnswerLevel3ByQuestionId
   * @memberof Server
   * @param {number} - answer id
   * @param {number} - question id
   * @param {done} - call next action
   * @returns {object} - single answer and its description
   * @desc This method fetch one Answer from the user's answer during the game.
   */
  static findOneAnswerLevel3ByQuestionId(answerId1, answerId2, id, done) {
    connection.query(`SELECT question, answerquote, answers_level_3.id, answers_level_3.answer1, answers_level_3.answer2
                      FROM questions_level_3
                      INNER JOIN answers_level_3
                      ON questions_level_3.id = questions_level_3_id
                      WHERE answers_level_3.answer1 = ?
                      AND answers_level_3.answer2 = ?
                      AND questions_level_3.id = ?`, [answerId1, answerId2, id], (error, result) => {
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

module.exports = QuizzLevel3;
