import { SET_ANSWERS_QUIZZ_LEVEL2 } from 'src/store/actions/modalActions';

/**
 * @alias level2_initialState
 * @memberof Reducer
 * @desc Initial state used to set up the app at launch
 */
const initialState = {
  id: '',
  title: '',
  level: '',
  question: '',
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: ''
};

/**
 * @alias level2Reducer
 * @memberof Reducer
 * @param {object} state
 * @param {object} action
 * @desc Set the new state which depend on the action.
 */
const level2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERS_QUIZZ_LEVEL2:
      return {
        ...state,
        id: action.id,
        title: action.title,
        level: action.level,
        question: action.question,
        answer1: action.answer1,
        answer2: action.answer2,
        answer3: action.answer3,
        answer4: action.answer4
      };

    default:
      return state;
  }
};

export default level2Reducer;
