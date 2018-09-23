import React from 'react';
import PropTypes from 'prop-types';

import MUIInputChip from 'material-ui-chip-input';

export function InputChip(props) {
  return <MUIInputChip {...props} />;
}

InputChip.propTypes = {
  /** Allows duplicate chips if set to true. */
  allowDuplicates: PropTypes.bool,
  /** Behavior when the chip input is blurred: `'clear'` clears the input, `'add'` creates a chip and `'ignore'` keeps the input. */
  blurBehavior: PropTypes.oneOf(['clear', 'add', 'ignore']),
  /** A function of the type `({ value, text, chip, isFocused, isDisabled, handleClick, handleDelete, className }, key) => node` that returns a chip based on the given properties. This can be used to customize chip styles.  Each item in the `dataSource` array will be passed to `chipRenderer` as arguments `chip`, `value` and `text`. If `dataSource` is an array of objects and `dataSourceConfig` is present, then `value` and `text` will instead correspond to the object values defined in `dataSourceConfig`. If `dataSourceConfig` is not set and `dataSource` is an array of objects, then a custom `chipRenderer` must be set. `chip` is always the raw value from `dataSource`, either an object or a string. */
  chipRenderer: PropTypes.func,
  /** Whether the input value should be cleared if the `value` prop is changed. */
  clearInputValueOnChange: PropTypes.bool,
  /** Data source for auto complete. This should be an array of strings or objects. */
  dataSource: PropTypes.array,
  /** Config for objects list dataSource, e.g. `{ text: 'text', value: 'value' }`. If not specified, the `dataSource` must be a flat array of strings or a custom `chipRenderer` must be set to handle the objects. */
  dataSourceConfig: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }),
  /** The chips to display by default (for uncontrolled mode). */
  defaultValue: PropTypes.array,
  /** Disables the chip input if set to true. */
  disabled: PropTypes.bool,
  /** Props to pass through to the `FormHelperText` component. */
  FormHelperTextProps: PropTypes.object,
  /** If true, the chip input will fill the available width. */
  fullWidth: PropTypes.bool,
  /** If true, the input field will always be below the chips and fill the available space. By default, it will try to be beside the chips. */
  fullWidthInput: PropTypes.bool,
  /** Helper text that is displayed below the input. */
  helperText: PropTypes.node,
  /** Props to pass through to the `InputLabel`. */
  InputLabelProps: PropTypes.object,
  /** Props to pass through to the `Input`. */
  InputProps: PropTypes.object,
  /** Use this property to pass a ref callback to the native input component. */
  inputRef: PropTypes.func,
  /* The content of the floating label. */
  label: PropTypes.node,
  /** The key codes used to determine when to create a new chip. */
  newChipKeyCodes: PropTypes.arrayOf(PropTypes.number),
  /** Callback function that is called when a new chip was added (in controlled mode). */
  onAdd: PropTypes.func,
  /** Callback function that is called with the chip to be added and should return true to add the chip or false to prevent the chip from being added without clearing the text input. */
  onBeforeAdd: PropTypes.func,
  /** Callback function that is called when the chips change (in uncontrolled mode). */
  onChange: PropTypes.func,
  /** Callback function that is called when a new chip was removed (in controlled mode). */
  onDelete: PropTypes.func,
  /** Callback function that is called when the input changes. */
  onUpdateInput: PropTypes.func,
  /** A placeholder that is displayed if the input has no values. */
  placeholder: PropTypes.string,
  /** The chips to display (enables controlled mode if set). */
  value: PropTypes.array
};

InputChip.defaultProps = {
  allowDuplicates: false,
  blurBehavior: 'clear',
  clearInputValueOnChange: false,
  newChipKeyCodes: [13]
};

export default InputChip;
