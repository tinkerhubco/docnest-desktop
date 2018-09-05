import React from 'react';
import PropTypes from 'prop-types';
import MUILinearProgress from '@material-ui/core/LinearProgress';

LinearProgress.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary'])
};

LinearProgress.defaultProps = {
  color: 'primary'
};

export function LinearProgress(props) {
  return <MUILinearProgress {...props} />;
}

export default LinearProgress;
