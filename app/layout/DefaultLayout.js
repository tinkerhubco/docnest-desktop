import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ROUTES } from '../Routes';
import Header from '../components/Header/Header';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import ListItemLink from '../components/List/ListItemLink';

const StyledRootDiv = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
`;

const StyledMain = styled.main`
  @media (min-width: 0px) and (orientation: landscape) {
    margin-top: 48px;
  }
  @media (min-width: 600px) {
    margin-top: 64px;
  }
  flex: 1;
  margin-top: 56px;
  overflow: auto;
`;

export class DefaultLayout extends React.Component {
  state = {
    openSidebar: false
  };

  handleLeftMenuIconClicked = () =>
    this.setState({
      openSidebar: true
    });

  handleCollapseClick = () =>
    this.setState({
      openSidebar: false
    });

  render() {
    const { openSidebar } = this.state;
    const { location } = this.props;

    return (
      <StyledRootDiv>
        <Header
          title="DocNest"
          onLeftMenuIconClicked={this.handleLeftMenuIconClicked}
          open={openSidebar}
        />
        <LeftSidebar
          menuItems={ROUTES}
          renderMenuItems={menuItems =>
            menuItems.map(({ icon, title, path }) => (
              <ListItemLink
                key={path}
                path={path}
                title={title}
                icon={icon}
                active={location.pathname === path}
              />
            ))
          }
          onCollapseClick={this.handleCollapseClick}
          open={openSidebar}
        />
        <StyledMain>{this.props.children}</StyledMain>
      </StyledRootDiv>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
};

export default DefaultLayout;
