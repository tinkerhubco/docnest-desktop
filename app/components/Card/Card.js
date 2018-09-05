import React from 'react';
import PropTypes from 'prop-types';
import MUICard from '@material-ui/core/Card';

Card.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
};

Card.defaultProps = {
  raised: false
};

export function Card(props) {
  return <MUICard {...props} />;
}

export default Card;
