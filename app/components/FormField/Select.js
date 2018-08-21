import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

SelectFormField.propTypes = {
  label: PropTypes.string,
  'helper-text': PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ),
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

SelectFormField.defaultProps = {
  items: []
};

const StyledInputLabel = styled(InputLabel)`
  ${props => toggleDisplay(props.label)};
`;
const StyledFormHelperText = styled(FormHelperText)`
  ${props => toggleDisplay(props['helper-text'])};
`;

function toggleDisplay(determinator) {
  return `
    display: ${determinator ? 'none' : 'block'}
  `;
}

function SelectFormField(props) {
  const { disabled, required } = props;
  const uniqueElementId = `select-form-field-${Date.now()}`;
  return (
    <FormControl required={required}>
      <StyledInputLabel hidden={!props.label} htmlFor={uniqueElementId}>
        {props.label}
      </StyledInputLabel>
      <Select
        {...props}
        inputProps={{ id: uniqueElementId, readOnly: disabled }}
      >
        {props.items.map((item = {}) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <StyledFormHelperText>{props['helper-text']}</StyledFormHelperText>
    </FormControl>
  );
}

const StyledSelect = styled(SelectFormField)``;

export { StyledSelect as SelectFormField };

export default StyledSelect;
