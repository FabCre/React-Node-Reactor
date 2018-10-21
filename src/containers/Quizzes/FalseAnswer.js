import { connect } from 'react-redux';

import FalseAnswer from 'src/components/Quizzes/FalseAnswer';

/**
 * @alias FalseAnswerContainer
 * @memberof Container
 * @desc False answer container.
 */
const mapStateToProps = state => ({
  // REACTOR props
  open: state.reactor.open,
  quizzState: state.reactor.quizzState
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FalseAnswer);
