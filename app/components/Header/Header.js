import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withTheme } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '../IconButton/IconButton';
import { drawerWidth } from '../LeftSidebar/LeftSidebar';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Typography from '../Typography/Typography';

const StyledAppBar = styled(AppBar)`
  && {
    z-index: ${props => props.theme.zIndex.drawer + 1};
    transition: ${props =>
      props.theme.transitions.create(['width', 'margin'], {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.leavingScreen
      })};
    ${props =>
      props.open
        ? `margin-left: ${drawerWidth}px;
           width: calc(100% - ${drawerWidth}px);
           transition: ${props.theme.transitions.create(['width', 'margin'], {
             easing: props.theme.transitions.easing.sharp,
             duration: props.theme.transitions.duration.enteringScreen
           })}`
        : ''};
  }
`;

const StyledAppBarWithTheme = withTheme()(StyledAppBar);

const StyledIconButtonMenu = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 20px;
  }
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

export class Header extends Component {
  state = {
    anchorEl: null
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { title, onLeftMenuIconClicked, open } = this.props;
    const openAccountMenu = Boolean(anchorEl);

    return (
      <StyledAppBarWithTheme open={open} position="absolute">
        <Toolbar>
          {!open && (
            <StyledIconButtonMenu
              color="inherit"
              aria-label="Menu"
              onClick={onLeftMenuIconClicked}
            >
              <MenuIcon />
            </StyledIconButtonMenu>
          )}
          <StyledTypography variant="title" color="inherit">
            {title}
          </StyledTypography>
          <IconButton
            aria-owns={openAccountMenu ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenuClick}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={openAccountMenu}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </StyledAppBarWithTheme>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onLeftMenuIconClicked: PropTypes.func.isRequired,
  open: PropTypes.bool
};

Header.defaultProps = {
  open: false
};

export default Header;
