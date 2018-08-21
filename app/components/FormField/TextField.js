import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';

TextField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

function TextField(props) {
  return <MUITextField {...props}>{props.children}</MUITextField>;
}

const StyledTextField = styled(TextField)``;

export { StyledTextField as TextField };

export default StyledTextField;
