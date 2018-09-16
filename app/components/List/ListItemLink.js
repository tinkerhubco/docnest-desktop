import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';

export class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.path} {...itemProps} />;

  render() {
    const { active, icon, title } = this.props;

    return (
      <ListItem
        button
        key={title}
        component={this.renderLink}
        selected={active}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={title} />
      </ListItem>
    );
  }
}

ListItemLink.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.node
};

ListItemLink.defaultProps = {
  active: false
};

export default ListItemLink;
