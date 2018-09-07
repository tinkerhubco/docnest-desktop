import React from 'react';
import PropTypes from 'prop-types';

import MUIInputAdornment from '@material-ui/core/InputAdornment';

InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: PropTypes.oneOf(['start', 'end'])
};

InputAdornment.defaultProps = {
  component: 'div',
  disableTypography: false
};

export function InputAdornment(props) {
  return <MUIInputAdornment {...props} />;
}

export default InputAdornment;
