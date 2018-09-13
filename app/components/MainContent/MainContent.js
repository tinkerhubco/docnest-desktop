import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';

import Button from '../Button/Button';
import Paper from '../Paper/Paper';
import Typography from '../Typography/Typography';

const StyledScreenTitle = styled.div`
  margin: 0 25px 25px 25px;
`;
const StyledScreenContainer = styled(Paper)`
  padding: 25px;
`;

const StyledScreenContent = styled.div`
  margin: 0 25px;
`;

const StyledFab = styled(Button)`
  &&& {
    margin: 0;
    top: auto;
    right: 20px;
    bottom: 20px;
    left: auto;
    position: fixed;
  }
`;

const StyledActionContainer = styled.div`
  padding: 2px;
`;

MainContent.propTypes = {
  onActionClick: PropTypes.func,
  buttonIcon: PropTypes.element,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

MainContent.defaultProps = {
  onActionClick: () => {},
  buttonIcon: <AddIcon />
};

export function MainContent(props) {
  const { onActionClick, buttonIcon, children, title } = props;

  return (
    <StyledScreenContainer>
      <StyledScreenTitle>
        <Typography variant="display2">{title}</Typography>
        <hr />
      </StyledScreenTitle>
      <StyledScreenContent>{children}</StyledScreenContent>
      <StyledActionContainer>
        <StyledFab variant="fab" color="primary" onClick={onActionClick}>
          {buttonIcon}
        </StyledFab>
      </StyledActionContainer>
    </StyledScreenContainer>
  );
}

export default MainContent;
