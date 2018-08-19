import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

function Card(props) {
  return <MUICard {...props} />;
}

const StyledCard = styled(Card)``;

export { StyledCard as Card };

export default StyledCard;
