import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUIDivider from '@material-ui/core/Divider';

Divider.propTypes = {
  absolute: PropTypes.bool,
  classes: PropTypes.object,
  component: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  inset: PropTypes.bool,
  light: PropTypes.bool
};

Divider.defaultProps = {
  inset: false
};

function Divider(props) {
  return <MUIDivider {...props} />;
}

const StyledDivider = styled(Divider)``;

export { StyledDivider as Divider };
export default StyledDivider;
