import { connect } from 'react-redux';

import Level1 from 'src/components/Quizzes/Level1';

import { SET_ANSWERS_QUIZZ_LEVEL1 } from 'src/store/actions/modalActions';

/**
 * @alias Level1Container
 * @memberof Container
 * @desc Level1 container.
 */
const mapStateToProps = state => ({
  level1: state.level1,
  // REACTOR props
  open: state.reactor.open,
  quizzState: state.reactor.quizzState
});

const mapDispatchToProps = dispatch => ({
  answerQuizzLevel1: (id, title, level, question, answer1, answer2) => {
    dispatch({
      type: SET_ANSWERS_QUIZZ_LEVEL1,
      id,
      title,
      level,
      question,
      answer1,
      answer2
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level1);
