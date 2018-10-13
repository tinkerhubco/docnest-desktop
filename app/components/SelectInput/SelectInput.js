import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUISelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '../FormControl/FormControl';

import MenuItem from '../Menu/MenuItem';

const StyledInputLabel = styled(InputLabel)`
  ${props => toggleDisplay(props.label)};
`;
const StyledFormHelperText = styled(FormHelperText)`
  ${props => toggleDisplay(props.helperText)};
`;

function toggleDisplay(determinator) {
  return `
    display: ${determinator ? 'none' : 'block'}
  `;
}

export function SelectInput(props) {
  const {
    disabled,
    helperText,
    id,
    items,
    label,
    required,
    renderMenuItem
  } = props;

  return (
    <FormControl required={required}>
      <StyledInputLabel hidden={!label} htmlFor={id}>
        {label}
      </StyledInputLabel>
      <MUISelect {...props} inputProps={{ id, readOnly: disabled }}>
        {renderMenuItem(items)}
      </MUISelect>
      <StyledFormHelperText>{helperText}</StyledFormHelperText>
    </FormControl>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ).isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  renderMenuItem: PropTypes.func
};

SelectInput.defaultProps = {
  renderMenuItem: items =>
    items.map(({ value, label } = {}) => (
      <MenuItem key={value || label} value={value || label}>
        {label || value}
      </MenuItem>
    ))
};

export default SelectInput;
