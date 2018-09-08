import React from 'react';
import PropTypes from 'prop-types';

import MUIFormControl from '@material-ui/core/FormControl';

FormControl.propTypes = {
  /**
   * The contents of the form control.
   */
  children: PropTypes.node,
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
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool
};

FormControl.defaultProps = {
  component: 'div',
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false
};

export function FormControl(props) {
  return <MUIFormControl {...props} />;
}

export default FormControl;
