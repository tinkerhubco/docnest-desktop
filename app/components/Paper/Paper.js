import React from 'react';
import PropTypes from 'prop-types';
import MUIPaper from '@material-ui/core/Paper';

Paper.propTypes = {
  elevation: PropTypes.number
};

Paper.defaultProps = {
  elevation: 2
};

export function Paper(props) {
  return <MUIPaper {...props} />;
}

export default Paper;
