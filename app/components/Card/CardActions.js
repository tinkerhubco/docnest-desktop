import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

function CardActions(props) {
  return <MUICardActions {...props} />;
}

const StyledCardActions = styled(CardActions)``;

export { StyledCardActions as CardActions };

export default StyledCardActions;
