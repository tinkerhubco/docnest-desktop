import React from 'react';
import MUIButton from '@material-ui/core/Button';

function Button(props) {
  return <MUIButton {...props}>{props.children}</MUIButton>;
}

export default Button;
