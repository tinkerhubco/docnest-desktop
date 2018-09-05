import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';

TextField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export function TextField(props) {
  return <MUITextField {...props}>{props.children}</MUITextField>;
}

export default TextField;
