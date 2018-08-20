import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

ButtonUpload.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ButtonUpload.defaultProps = {
  children: undefined,
};

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ButtonUpload(props) {
  const { accept, classes, disabled, buttonProps } = props;
  // this is intended because it is not allowed to have buttonProps (camel case)
  const buttonprops = buttonProps;

  // Might cause issue if all instance of <ButtonUpload> have a the same id
  // Might trigger other instances
  const uniqueElementId = `button-upload-input-${Date.now()}`;
  console.log('props', props);
  return (
    <div>
      <input accept={accept} className={classes.input} type="file" id={uniqueElementId} disabled={disabled}/>
      <label htmlFor={uniqueElementId}>
        <Button {...buttonprops} component="span" className={classes.button} disabled={disabled}>{props.children}</Button>
      </label>
    </div>
  );
}

export default withStyles(styles)(ButtonUpload);
