import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import l10n from 'src/data/l10n';
import { signupError } from 'src/auth/setUser';

/**
 * @class DialogSignupAlert
 * @memberof Component
 * @hideconstructor
 * @classdesc Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class DialogSignupAlert extends React.Component {

  /**
   * @method handleClose
   * @memberof Component.DialogSignupAlert
   * @desc Trigger local modal closure.
   */
  handleClose = () => {
    signupError();
  };

  /**
   * @method render
   * @memberof Component.DialogSignupAlert
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
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
        >
          <p>{this.props.message}</p>
        </Dialog>
      </div>
    );
  }
}

export default DialogSignupAlert;
