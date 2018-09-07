import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';

import Button from '../components/Button/Button';
import Paper from '../components/Paper/Paper';
import Typography from '../components/Typography/Typography';

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

BaseScreen.propTypes = {
  actionHandler: PropTypes.func,
  buttonIcon: PropTypes.element,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

BaseScreen.defaultProps = {
  actionHandler: () => {},
  buttonIcon: <AddIcon />
};

export function BaseScreen(props) {
  const { actionHandler, buttonIcon, children, title } = props;

  return (
    <StyledScreenContainer>
      <StyledScreenTitle>
        <Typography variant="display2">{title}</Typography>
      </StyledScreenTitle>
      <StyledScreenContent>{children}</StyledScreenContent>
      <StyledActionContainer>
        <StyledFab variant="fab" color="primary" onClick={actionHandler}>
          {buttonIcon}
        </StyledFab>
      </StyledActionContainer>
    </StyledScreenContainer>
  );
}

export default BaseScreen;
