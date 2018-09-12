import React from 'react';
import PropTypes from 'prop-types';

import MUIListItemText from '@material-ui/core/ListItemText';

export function ListItemText(props) {
  return <MUIListItemText {...props} />;
}

ListItemText.propTypes = {
  /**
   * Alias for the `primary` property.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  /**
   * The main content element.
   */
  primary: PropTypes.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: PropTypes.object,
  /**
   * The secondary content element.
   */
  secondary: PropTypes.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: PropTypes.object
};

ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};

export default ListItemText;
