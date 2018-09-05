import React from 'react';
import PropTypes from 'prop-types';
import MUICircularProgress from '@material-ui/core/CircularProgress';

CircularProgress.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary'])
};

CircularProgress.defaultProps = {
  color: 'primary'
};

export function CircularProgress(props) {
  return <MUICircularProgress {...props} />;
}

export default CircularProgress;
