import React from 'react';
import PropTypes from 'prop-types';
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

export function Divider(props) {
  return <MUIDivider {...props} />;
}

export default Divider;
