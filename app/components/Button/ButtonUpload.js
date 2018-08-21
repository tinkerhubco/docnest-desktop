import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

ButtonUpload.propTypes = {
  accept: PropTypes.string,
  buttonProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  disabled: PropTypes.bool
};

ButtonUpload.defaultProps = {
  accept: 'image/*',
  children: undefined,
  disabled: false,
  buttonProps: {}
};

const StyledInput = styled('input')`
  display: none;
`;

function ButtonUpload(props) {
  const { accept, disabled, buttonProps } = props;
  // this is intended because it is not allowed to have buttonProps (camel case)
  const buttonprops = buttonProps;

  // Might cause issue if all instance of <ButtonUpload> have a the same id
  // Might trigger other instances
  const uniqueElementId = `button-upload-input-${Date.now()}`;
  return (
    <div>
      <StyledInput
        accept={accept}
        type="file"
        id={uniqueElementId}
        disabled={disabled}
      />
      <label htmlFor={uniqueElementId}>
        <Button {...buttonprops} component="span" disabled={disabled}>
          {props.children}
        </Button>
      </label>
    </div>
  );
}

const StyledUploadButton = styled(ButtonUpload)``;

export { StyledUploadButton as UploadButton };

export default StyledUploadButton;
