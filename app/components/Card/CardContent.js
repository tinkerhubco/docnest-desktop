import React from 'react';
import PropTypes from 'prop-types';
import MUICardContent from '@material-ui/core/CardContent';

CardContent.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ])
};

CardContent.defaultProps = {
  component: 'div'
};

export function CardContent(props) {
  return <MUICardContent {...props} />;
}

export default CardContent;
