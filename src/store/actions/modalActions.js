export const INIT_QUIZZ = 'actions/INIT_QUIZZ';
export const SET_ANSWERS_QUIZZ_LEVEL1 = 'actions/SET_ANSWERS_QUIZZ_LEVEL1';
export const SET_ANSWERS_QUIZZ_LEVEL2 = 'actions/SET_ANSWERS_QUIZZ_LEVEL2';
export const SET_ANSWERS_QUIZZ_LEVEL3 = 'actions/SET_ANSWERS_QUIZZ_LEVEL3';
export const RESOLVE_QUIZZ_LEVEL1 = 'actions/RESOLVE_QUIZZ_LEVEL1';
export const RESOLVE_QUIZZ_LEVEL2 = 'actions/RESOLVE_QUIZZ_LEVEL2';
export const RESOLVE_QUIZZ_LEVEL3 = 'actions/RESOLVE_QUIZZ_LEVEL3';
export const FALSE_ANSWER = 'actions/FALSE_ANSWER';
export const CLOSE_MODAL = 'actions/CLOSE_MODAL';
export const RESET_QUIZZ_ANSWERED_OPEN_CHEST1 = 'actions/RESET_QUIZZ_ANSWERED_OPEN';
export const RESET_QUIZZ_ANSWERED_OPEN_CHEST2 = 'actions/RESET_QUIZZ_ANSWERED_OPEN';

/**
 * @alias initQuizz
 * @memberof Action
 * @param {number} quizzstate
 * @desc Initialization of the quizz state, see reactor initial state in reducer
 */
const initQuizz = (quizzState) => ({
  type: INIT_QUIZZ,
  quizzState
});
export { initQuizz };

/**
 * @alias resolveQuizzLevel1
 * @memberof Action
 * @desc Create a random bonus for Reactor character when it's fire
 */
const resolveQuizzLevel1 = () => ({
  type: RESOLVE_QUIZZ_LEVEL1
});

export { resolveQuizzLevel1 };

/**
 * @alias getLogger
 * @memberof Action
 * @param {number} id
 * @param {string} title
 * @param {number} level
 * @param {string} question
 * @param {string} answer1
 * @param {string} answer2
 * @desc Set question, answers and information for question level 1
 */
const answerQuizzLevel1 = (id, title, level, question, answer1, answer2) => ({
  type: SET_ANSWERS_QUIZZ_LEVEL1,
  id,
  title,
  level,
  question,
  answer1,
  answer2
});

export { answerQuizzLevel1 };

/**
 * @alias resolveQuizzLevel2
 * @memberof Action
 * @desc Create a random bonus for Reactor character when it's fire
 */
const resolveQuizzLevel2 = () => ({
  type: RESOLVE_QUIZZ_LEVEL2
});

export { resolveQuizzLevel2 };

/**
 * @alias answerQuizzLevel2
 * @memberof Action
 * @param {number} id
 * @param {string} title
 * @param {number} level
 * @param {string} question
 * @param {string} answer1
 * @param {string} answer2
 * @param {string} answer3
 * @param {string} answer4
 * @desc Set question, answers and information for question level 2
 */
const answerQuizzLevel2 = (id, title, level, question, answer1, answer2, answer3, answer4) => ({
  type: SET_ANSWERS_QUIZZ_LEVEL2,
  id,
  title,
  level,
  question,
  answer1,
  answer2,
  answer3,
  answer4
});

export { answerQuizzLevel2 };

/**
 * @alias resolveQuizzLevel3
 * @memberof Action
 * @desc Create a random bonus for Reactor character when it's fire
 */
const resolveQuizzLevel3 = () => ({
  type: RESOLVE_QUIZZ_LEVEL3
});

export { resolveQuizzLevel3 };

/**
 * @alias answerQuizzLevel3
 * @memberof Action
 * @param {number} id
 * @param {string} title
 * @param {number} level
 * @param {string} question
 * @param {string} answer1
 * @param {string} answer2
 * @param {string} answer3
 * @param {string} answer4
 * @desc Set question, answers and information for question level 3
 */
const answerQuizzLevel3 = (id, title, level, question, answer1, answer2, answer3, answer4) => ({
  type: SET_ANSWERS_QUIZZ_LEVEL3,
  id,
  title,
  level,
  question,
  answer1,
  answer2,
  answer3,
  answer4
});

export { answerQuizzLevel3 };

/**
 * @alias falseAnswer
 * @memberof Action
 * @param {number} quizzState
 * @desc Set the quizz state to the false answer modal.
 */
const falseAnswer = (quizzState) => ({
  type: FALSE_ANSWER,
  quizzState
});

export { falseAnswer };

/**
 * @alias closeModal
 * @memberof Action
 * @param {number} quizzState
 * @desc Set the quizz state to close the modal.
 */
const closeModal = (quizzState) => ({
  type: FALSE_ANSWER,
  quizzState
});

export { closeModal };

/**
 * @alias resetQuizzAnsweredOpenChest1
 * @memberof Action
 * @param {number} quizzAnsweredChest1
 * @desc Set the state to display the chest open after the quizz.
 */
const resetQuizzAnsweredOpenChest1 = (quizzAnsweredChest1) => ({
  type: RESET_QUIZZ_ANSWERED_OPEN_CHEST1,
  quizzAnsweredChest1
});

export { resetQuizzAnsweredOpenChest1 };

/**
 * @alias resetQuizzAnsweredOpenChest2
 * @memberof Action
 * @param {number} quizzAnsweredChest2
 * @desc Set the state to display the chest open after the quizz.
 */
const resetQuizzAnsweredOpenChest2 = (quizzAnsweredChest2) => ({
  type: RESET_QUIZZ_ANSWERED_OPEN_CHEST2,
  quizzAnsweredChest2
});

export { resetQuizzAnsweredOpenChest2 };
