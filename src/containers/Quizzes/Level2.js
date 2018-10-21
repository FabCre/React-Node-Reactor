import { connect } from 'react-redux';

import Level2 from 'src/components/Quizzes/Level2';

import { SET_ANSWERS_QUIZZ_LEVEL2 } from 'src/store/actions/modalActions';

/**
 * @alias Level2Container
 * @memberof Container
 * @desc Level2 container.
 */
const mapStateToProps = state => ({
  level2: state.level2,
  // REACTOR props
  open: state.reactor.open,
  quizzState: state.reactor.quizzState
});

const mapDispatchToProps = dispatch => ({
  answerQuizzLevel2: (id, title, level, question, answer1, answer2, answer3, answer4) => {
    dispatch({
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level2);
