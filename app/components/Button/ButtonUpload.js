import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

ButtonUpload.propTypes = {
  id: PropTypes.string.isRequired,
  accept: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  disabled: PropTypes.bool
};

ButtonUpload.defaultProps = {
  accept: 'image/*',
  children: undefined,
  disabled: false
};

const StyledInput = styled('input')`
  display: none;
`;

export function ButtonUpload(props) {
  const { accept, disabled, id, ...buttonProps } = props;

  // Might cause issue if all instance of <ButtonUpload> have a the same id
  // Might trigger other instancesid={placeholderButtonId}
  return (
    <div>
      <StyledInput
        accept={accept}
        type="file"
        id={`${id}`}
        disabled={disabled}
      />
      <label htmlFor={id}>
        <Button {...buttonProps} component="span" disabled={disabled} />
      </label>
    </div>
  );
}

export default ButtonUpload;
