import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';

export class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.path} {...itemProps} />;

  render() {
    const { icon, title } = this.props;

    return (
      <ListItem key={title} button component={this.renderLink}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={title} />
      </ListItem>
    );
  }
}

ListItemLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.node
};

export default ListItemLink;
