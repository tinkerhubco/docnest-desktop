import React from 'react';
import { storiesOf } from '@storybook/react';

import InfoIcon from '@material-ui/icons/Info';

import GridList from './GridList';

const items = [
  {
    image: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast Image'
  },
  {
    image: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    title: 'Burgers Image'
  },
  {
    image: 'https://material-ui.com/static/images/grid-list/camera.jpg',
    title: 'Camera Image'
  }
];

const itemsWithGridTile = [
  {
    image: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast Image',
    tile: {
      title: 'Tile Bar Title',
      subTitle: 'Tile Bar Subtitle',
      actionIcon: <InfoIcon />
    }
  },
  {
    image: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    title: 'Burgers Image',
    tile: {
      title: 'My Burger Title Tile',
      subTitle: 'My Burger Title Tile Subtitle',
      actionIcon: <InfoIcon />
    }
  }
];

const gridTitle = 'Grid Title Sample';

storiesOf('Grid', module).add('default', () => <GridList items={items} />);

storiesOf('Grid/Title', module).add('default', () => (
  <GridList title={gridTitle} items={items} />
));

storiesOf('Grid/Tile', module).add('default', () => (
  <GridList items={itemsWithGridTile} />
));
