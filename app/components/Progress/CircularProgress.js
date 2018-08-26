import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUICircularProgress from '@material-ui/core/CircularProgress';

CircularProgress.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary'])
};

CircularProgress.defaultProps = {
  color: 'primary'
};

function CircularProgress(props) {
  return <MUICircularProgress {...props} />;
}

const StyledCircularProgress = styled(CircularProgress)``;

export { StyledCircularProgress as CircularProgress };
export default StyledCircularProgress;
