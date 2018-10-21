import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import l10n from 'src/data/l10n';
import { loginError } from 'src/auth/setUser';

/**
 * @class DialogLoginAlert
 * @memberof Component
 * @hideconstructor
 * @classdesc Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class DialogLoginAlert extends React.Component {
 /**
  * @method handleClose
  * @memberof Component.DialogLoginAlert
  * @desc Trigger local modal closure.
  */
  handleClose = () => {
    loginError();
  };

  /**
   * @method render
   * @memberof Component.DialogLoginAlert
   * @desc Render the DialogLoginAlert form if the server return an error.
   */
  render() {
    const actions = [
      <FlatButton
        label={l10n.global.ok}
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <React.Fragment>
        <Dialog
          contentClassName="modal__wrapper"
          paperClassName="modal"
          bodyClassName="modal__content"
          actionsContainerClassName="modal__footer"
          actions={actions}
          modal={false}
          open={this.props.open}
        >
          <p>{this.props.message}</p>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DialogLoginAlert;
