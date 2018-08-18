import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  children: undefined,
};

function Button(props) {
  return <MUIButton {...props}>{props.children}</MUIButton>;
}

export default Button;
