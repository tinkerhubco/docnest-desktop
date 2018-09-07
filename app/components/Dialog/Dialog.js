import React from 'react';
import PropTypes from 'prop-types';

import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MUIDialog from '@material-ui/core/Dialog';

Dialog.propTypes = {
  dialogActionNodeChildren: PropTypes.node.isRequired,
  dialogContentNodeChildren: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Dialog.defaultProps = {
  subtitle: ''
};

export function Dialog(props) {
  const {
    dialogActionNodeChildren,
    dialogContentNodeChildren,
    title,
    subtitle,
    ...coreProps
  } = props;
  return (
    <div>
      <MUIDialog {...coreProps}>
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {dialogContentNodeChildren}
        </DialogContent>
        <DialogActions>{dialogActionNodeChildren}</DialogActions>
      </MUIDialog>
    </div>
  );
}

export default Dialog;
