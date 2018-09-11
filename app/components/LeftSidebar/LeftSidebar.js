import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import { withTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Divider from '../Divider/Divider';
import IconButton from '../IconButton/IconButton';
import List from '../List/List';
import ListItem from '../List/ListItem';
import ListItemIcon from '../List/ListItemIcon';
import ListItemText from '../List/ListItemText';

const drawerWidth = 240;

const StyledRootDiv = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 440px;
  z-index: 1;
  overflow: hidden;
`;

const StyledDrawer = styled(Drawer)`
  > div {
    position: relative;
    white-space: nowrap;
    width: ${drawerWidth}px;
    ${props =>
      props.open
        ? `transition: ${props.theme.transitions.create('width', {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.enteringScreen
          })};`
        : `transition: ${props.theme.transitions.create('width', {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.leavingScreen
          })};
        overflow-x: hidden;
        width: ${props.theme.spacing.unit * 7}px;
        ${props.theme.breakpoints.up('sm')} {
          width: ${props.theme.spacing.unit * 9}px;
        }
  `};
  }
`;

const StyledDrawerWithTheme = withTheme()(StyledDrawer);

const StyledToolbarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (min-width: 600px) {
    min-height: 64px;
  }
  min-height: 56px;
`;

const StyledToolbarDivWithTheme = withTheme()(StyledToolbarDiv);

export function LeftSidebar(props) {
  const { menuItems, open, renderMenuItems, onCollapseClick } = props;

  return (
    <StyledRootDiv>
      <StyledDrawerWithTheme variant="permanent" open={open}>
        <StyledToolbarDivWithTheme>
          {open && (
            <IconButton onClick={event => onCollapseClick(event, open)}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        </StyledToolbarDivWithTheme>
        <Divider />
        <List>{renderMenuItems(menuItems)}</List>
      </StyledDrawerWithTheme>
    </StyledRootDiv>
  );
}

LeftSidebar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onCollapseClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
  renderMenuItems: PropTypes.func
};

LeftSidebar.defaultProps = {
  renderMenuItems: menuItems =>
    menuItems.map(({ title, icon }) => (
      <ListItem key={title} button>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={title} />
      </ListItem>
    ))
};

export default LeftSidebar;
