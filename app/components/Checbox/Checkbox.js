import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUICheckbox from '@material-ui/core/Checkbox';

Checkbox.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false,
  color: 'primary',
  disabled: false
};

function Checkbox(props) {
  return <MUICheckbox {...props} />;
}

const StyledCheckbox = styled(Checkbox)``;

export { StyledCheckbox as Checkbox };
export default StyledCheckbox;
