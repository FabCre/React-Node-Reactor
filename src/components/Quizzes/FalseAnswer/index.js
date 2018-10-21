import React from 'react';
import Dialog from 'material-ui/Dialog';
import l10n from 'src/data/l10n';
import FlatButton from 'material-ui/FlatButton';
import { reduxForm } from 'redux-form';
import { closeModal } from 'src/store/middlewares/closeModalM';

/**
 * @function submit
 * @memberof Component.FalseAnswer
 * @desc Submit the form and send a request to the server.
 */
const submit = () => {
  const quizzState = 0
  return closeModal(quizzState);
};

/**
 * @class FalseAnswer
 * @memberof Component
 * @hideconstructor
 * @classdesc Class FalseAnswer
 */
class FalseAnswer extends React.Component {

  /**
   * @method render
   * @memberof Component.FalseAnswer
   * @desc Render the FalseAnswer component.
   */
  render() {
    const { handleSubmit, open } = this.props;
    const actions = [
      <FlatButton
        label={l10n.quizzes.submit}
        label={l10n.global.ok}
        primary={true}
        type="submit"
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
          <p className="quizz__wording">{l10n.quizzes.falseAnswer}</p>
        </Dialog>
      </form>
    );
  }
}

export default reduxForm({
  form: 'falseanswer' // a unique identifier for this form
})(FalseAnswer);
