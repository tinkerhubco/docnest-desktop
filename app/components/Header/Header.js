import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '../IconButton/IconButton';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Typography from '../Typography/Typography';

const StyledIconButtonMenu = styled(IconButton)`
  && {
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
    const { title, onLeftMenuIconClicked } = this.props;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static">
        <Toolbar>
          <StyledIconButtonMenu
            color="inherit"
            aria-label="Menu"
            onClick={onLeftMenuIconClicked}
          >
            <MenuIcon />
          </StyledIconButtonMenu>
          <StyledTypography variant="title" color="inherit">
            {title}
          </StyledTypography>

          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
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
            open={open}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onLeftMenuIconClicked: PropTypes.func.isRequired
};

Header.defaultProps = {};

export default Header;
