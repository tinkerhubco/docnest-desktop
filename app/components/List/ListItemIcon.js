import React from 'react';
import PropTypes from 'prop-types';

import MUIListItemIcon from '@material-ui/core/ListItemIcon';

export function ListItemIcon(props) {
  return <MUIListItemIcon {...props} />;
}

ListItemIcon.propTypes = {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   */
  children: PropTypes.element.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default ListItemIcon;
