import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUILinearProgress from '@material-ui/core/LinearProgress';

LinearProgress.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary'])
};

LinearProgress.defaultProps = {
  color: 'primary'
};

function LinearProgress(props) {
  return <MUILinearProgress {...props} />;
}

const StyledLinearProgress = styled(LinearProgress)``;

export { StyledLinearProgress as LinearProgress };
export default StyledLinearProgress;
