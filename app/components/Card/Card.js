import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUICard from '@material-ui/core/Card';

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

function Card(props) {
  return <MUICard {...props}>{props.children}</MUICard>;
}

export const StyledCard = styled(Card)``;

export default StyledCard;
