import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Button from '../Button';

const placeholderMenuItems = [
  {
    id: 1,
    text: 'Menu 1'
  },
  {
    id: 2,
    text: 'Menu 2'
  },
  {
    id: 3,
    text: 'Menu 3'
  }
];

storiesOf('Menu/simple', module)
  .add('close', () => (
    <div>
      <Button>Open Menu</Button>
      <Menu open={false}>
        {' '}
        {placeholderMenuItems.map(({ id, text }) => (
          <MenuItem key={id}>{text}</MenuItem>
        ))}
      </Menu>
    </div>
  ))
  .add('open', () => (
    <div>
      <Button>Open Menu</Button>
      <Menu open>
        {' '}
        {placeholderMenuItems.map(({ id, text }) => (
          <MenuItem key={id}>{text}</MenuItem>
        ))}
      </Menu>
    </div>
  ));
