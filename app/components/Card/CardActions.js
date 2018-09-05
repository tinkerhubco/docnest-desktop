import React from 'react';
import PropTypes from 'prop-types';
import MUICardActions from '@material-ui/core/CardActions';

CardActions.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: PropTypes.bool
};

CardActions.defaultProps = {
  disableActionSpacing: false
};

export function CardActions(props) {
  return <MUICardActions {...props} />;
}

export default CardActions;
