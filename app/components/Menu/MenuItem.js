import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUIMenuItem from '@material-ui/core/MenuItem';

MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * @ignore
   */
  selected: PropTypes.bool
};

MenuItem.defaultProps = {
  component: 'li',
  role: 'menuitem'
};

function MenuItem(props) {
  return <MUIMenuItem {...props} />;
}

const StyledMenuItem = styled(MenuItem)``;

export { StyledMenuItem as MenuItem };
export default StyledMenuItem;
