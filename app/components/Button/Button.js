import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUIButton from '@material-ui/core/Button';

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

function Button(props) {
  return <MUIButton {...props}>{props.children}</MUIButton>;
}

export const StyledButton = styled(Button)``;

export default StyledButton;
