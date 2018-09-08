import React from 'react';
import PropTypes from 'prop-types';

import MUIInput from '@material-ui/core/Input';

Input.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * The CSS class name of the wrapper element.
   */
  className: PropTypes.string,
  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense', 'none']),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onEmpty: PropTypes.func,
  /**
   * @ignore
   */
  onFilled: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the input will be required.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,
  /**
   * The input value, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ])
};

Input.muiName = 'Input';

Input.defaultProps = {
  disableUnderline: false,
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};

Input.contextTypes = {
  muiFormControl: PropTypes.object
};

export function Input(props) {
  return <MUIInput {...props} />;
}

export default Input;
