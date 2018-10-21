import axios from 'axios';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import l10n from 'src/data/l10n';
import { Field, reduxForm } from 'redux-form';
import Checkbox from 'material-ui/Checkbox';
import { resolveQuizzLevel3 } from 'src/store/middlewares/level3M';
import { falseAnswer } from 'src/store/middlewares/falseAnswerM';

/**
 * @function renderCheckbox
 * @param {object} input
 * @param {object} label
 * @memberof Component.Level3
 * @desc Generate Checkboxs for the question Level3 form. Each questions have two correct answers.
 */
const renderCheckbox = ({ input, label }) => (
  <Checkbox
    className="quizz__answers"
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

/**
 * @function getRandomInt
 * @memberof Component.Level3
 * @param {number} min
 * @param {number} max
 * @desc Generate random floored int between 1 and max questions number.
 */
// TODO count how many questions are available with a COUNT in SQL but for now, we create a random number with a harcode number.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const randomQuestionId = getRandomInt(1, 7);

/**
 * @function submit
 * @param {object} values
 * @memberof Component.level3
 * @desc Submit the form and send a request to the server.
 */
const submit = (values) => {
  // TODO move this traitement to the server side.
  // Create an array with checked answers.
  const valuesTrue = [];
  for (let value in values) {
    if (values[value] === true) {
      valuesTrue.push(value);
    }
  };
  // Iterate the array with map function and return the number of the name attribut (see html <Field>) sort by Asc (usefull for the MySQL request, answers are sort by Asc).
  const valuesKeysToInt = valuesTrue.map((value) => parseInt(value.substring(6))).sort((a, b) => { return a - b });
  // Reassign the array in an object.
  const answers = Object.assign({}, valuesKeysToInt);
  // Create two answers which pass to the server to check answers with the database.
  const answer1 = answers[0];
  const answer2 = answers[1];

  const URL = 'http://localhost:3001';
  // Axios post with the random number in param and user's answers.
  axios.post(`${URL}/quizz/level3/${randomQuestionId}`,
    { answer1, answer2 },
    {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      // Questions's answer are display in the user's console
      console.log(response.data.result[0].answerquote);
      const { success } = response.data;
      if (success === true) {
        return resolveQuizzLevel3();
      } else if (success === false) {
        const quizzState = 4;
        return falseAnswer(quizzState);
      }
    })
    .catch(function({ response }) {
      // TODO catch error
      const quizzState = 4;
      return falseAnswer(quizzState);
    });
};

/**
 * @class Level3
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Level3
 */
class Level3 extends React.Component {

  /**
   * @method componentDidMount
   * @memberof Component.Level3
   * @desc Code to execute after component update.
   */
  componentDidMount() {
    const URL = 'http://localhost:3001';
    // Axios call to the server to get a random question from quizz level3 with the random number in param.
    axios.get(`${URL}/quizz/level3/${randomQuestionId}`,
      {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        // The response from the server return an objet with all data for one question.
        const { id, title, level, question, answer1, answer2, answer3, answer4 } = response.data.result[0];
        this.props.answerQuizzLevel3(id, title, level, question, answer1, answer2, answer3, answer4);
      })
      .catch(response => {
        // TODO catch error
        console.log(response.data);
      });
  };

  /**
   * @method render
   * @memberof Component.Level3
   * @desc Render the Level3 chest question.
   */
  render() {
    const { handleSubmit, pristine, submitting, open } = this.props;
    const actions = [
      <FlatButton
        label={l10n.quizzes.submit}
        primary={true}
        type="submit"
        disabled={pristine || submitting}
        onClick={handleSubmit(submit)}
      />
    ];

    return (
      <form onSubmit={handleSubmit(submit)}>
        <Dialog
          contentClassName="modal__wrapper"
          paperClassName="modal"
          bodyClassName="modal__content"
          actionsContainerClassName="modal__footer"
          actions={actions}
          modal={false}
          open={open}
        >
          <div className="quizz">
            <p className="quizz__title">
              <span className="quizz__name">{this.props.level3.title}</span>,&nbsp;
              <span className="quizz__level">{this.props.level3.level}</span>
            </p>
            <p className="quizz__question">{this.props.level3.question}</p>
            <Field name="answer1" component={renderCheckbox} label={this.props.level3.answer1} />
            <Field name="answer2" component={renderCheckbox} label={this.props.level3.answer2} />
            <Field name="answer3" component={renderCheckbox} label={this.props.level3.answer3} />
            <Field name="answer4" component={renderCheckbox} label={this.props.level3.answer4} />
          </div>
          <p className="quizz__wording">{l10n.quizzes.wording}</p>
        </Dialog>
      </form>
    );
  }
}

export default reduxForm({
  form: 'submitLevel3' // a unique identifier for this form
})(Level3);
