import axios from 'axios';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import l10n from 'src/data/l10n';
import { Field, reduxForm } from 'redux-form';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { resolveQuizzLevel1 } from 'src/store/middlewares/level1M';
import { falseAnswer } from 'src/store/middlewares/falseAnswerM';

/**
 * @function renderRadioGroup
 * @param {object} input
 * @param {spread} rest
 * @memberof Component.Level1
 * @desc Generate a radioGroup for the question Level1 form.
 */
const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

/**
 * @function getRandomInt
 * @memberof Component.Level1
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
const randomQuestionId = getRandomInt(1, 10);

/**
 * @function submit
 * @param {object} values
 * @memberof Component.Level1
 * @desc Submit the form and send a request to the server.
 */
const submit = (values) => {
  const URL = 'http://localhost:3001';

  const { answerLevel1 } = values;
  axios.post(`${URL}/quizz/level1/${randomQuestionId}`,
    { answerLevel1 },
    {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      // TODO check answer with server return succes true or false
      console.log(response.data.result[0].answerquote);
      const { success } = response.data;
      if (success === true) {
        return resolveQuizzLevel1();
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
 * @class Level1
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Level1
 */
class Level1 extends React.Component {

  /**
   * @method componentDidMount
   * @memberof Component.Level1
   * @desc Code to execute after component update.
   */
  componentDidMount() {
    const URL = 'http://localhost:3001';
    // Axios call to the server to get quizz
    axios.get(`${URL}/quizz/level1/${randomQuestionId}`,
      {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        const { id, title, level, question, answer1, answer2 } = response.data.result[0];
        this.props.answerQuizzLevel1(id, title, level, question, answer1, answer2);
      })
      .catch(function({ response }) {
        // TODO catch error
        console.log(response.data.message);
      });
  };

  /**
   * @method render
   * @memberof Component.Level1
   * @desc Render the Level1 chest question.
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
              <span className="quizz__name">{this.props.level1.title}</span>,&nbsp;
              <span className="quizz__level">{this.props.level1.level}</span>
            </p>
            <p className="quizz__question">{this.props.level1.question}</p>
            <Field
              className="quizz__answers"
              name="answerLevel1"
              component={renderRadioGroup}
            >
              <RadioButton className="quizz__answer" value="1" label={this.props.level1.answer1} />
              <RadioButton className="quizz__answer" value="2" label={this.props.level1.answer2} />
            </Field>
          </div>
          <p className="quizz__wording">{l10n.quizzes.wording}</p>
        </Dialog>
      </form>
    );
  }
}

export default reduxForm({
  form: 'submitLevel1' // a unique identifier for this form
})(Level1);
