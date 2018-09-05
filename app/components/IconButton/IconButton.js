import React from 'react';
import PropTypes from 'prop-types';
import MUIButtonIcon from '@material-ui/core/IconButton';

IconButton.propTypes = {
  /**
   * The icon element.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool
};

IconButton.defaultProps = {
  color: 'default',
  disabled: false
};

export function IconButton(props) {
  return <MUIButtonIcon {...props} />;
}

export default IconButton;
