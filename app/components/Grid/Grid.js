import React from 'react';
import PropTypes from 'prop-types';
import MUIGrid from '@material-ui/core/Grid';
import MUIGridList from '@material-ui/core/GridList';
import MUIGridListTile from '@material-ui/core/GridListTile';
import MUIGridListTileBar from '@material-ui/core/GridListTileBar';
import MUIListSubheader from '@material-ui/core/ListSubheader';

import IconButton from '../IconButton/IconButton';

Grid.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
};

Grid.defaultProps = {
  items: [],
  title: ''
};

export function Grid(props) {
  const { items, title } = props;
  const displayGridTitle = () => {
    if (!title) return;
    return (
      <MUIGridListTile cols={2}>
        <MUIListSubheader component="div">{title}</MUIListSubheader>
      </MUIGridListTile>
    );
  };

  const displayGridTileBar = item => {
    if (!item || !item.tile) return;

    const { actionIcon, subtitle = '' } = item.tile;
    if (!item.tile.title)
      throw new Error(
        'Grid: No Title. Please see https://material-ui.com/demos/grid-list/#grid-list-with-titlebars for title'
      );
    if (!actionIcon)
      throw new Error(
        'Grid: No Action Icon. Please see https://material-ui.com/demos/grid-list/#grid-list-with-titlebars for actionIcon'
      );

    return (
      <MUIGridListTileBar
        title={item.tile.title}
        subtitle={subtitle}
        actionIcon={<IconButton>{actionIcon}</IconButton>}
      />
    );
  };

  return (
    <MUIGrid>
      {displayGridTitle()}
      {items.map(item => (
        <MUIGridList key={item.title} cols={item.cols || 1}>
          <img src={item.image} alt={item.title} />
          {displayGridTileBar(item)}
        </MUIGridList>
      ))}
    </MUIGrid>
  );
}

export default Grid;
