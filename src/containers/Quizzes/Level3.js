import { connect } from 'react-redux';

import Level3 from 'src/components/Quizzes/Level3';

import { SET_ANSWERS_QUIZZ_LEVEL3 } from 'src/store/actions/modalActions';

/**
 * @alias Level3Container
 * @memberof Container
 * @desc Level3 container.
 */
const mapStateToProps = state => ({
  level3: state.level3,
  // REACTOR props
  open: state.reactor.open,
  quizzState: state.reactor.quizzState
});

const mapDispatchToProps = dispatch => ({
  answerQuizzLevel3: (id, title, level, question, answer1, answer2, answer3, answer4) => {
    dispatch({
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level3);
