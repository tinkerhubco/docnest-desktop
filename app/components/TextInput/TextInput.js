import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';

export function TextInput(props) {
  return <MUITextField {...props}>{props.children}</MUITextField>;
}

TextInput.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default TextInput;
