import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
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
  position: relative;
  white-space: nowrap;
  width: ${drawerWidth}px;
  ${props => (props.open ? '' : 'overflow-x: hidden')};
`;

const StyledToolbarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
`;

export function LeftSidebar(props) {
  const { menuItems, open, renderMenuItems, onCollapseClick } = props;

  return (
    <StyledRootDiv>
      <StyledDrawer variant="permanent" open={open}>
        <StyledToolbarDiv>
          <IconButton onClick={event => onCollapseClick(event, open)}>
            <ChevronLeftIcon />
          </IconButton>
        </StyledToolbarDiv>
        <Divider />
        <List>{renderMenuItems(menuItems)}</List>
      </StyledDrawer>
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
      <ListItem button>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText key={title} primary={title} />
      </ListItem>
    ))
};

export default LeftSidebar;
