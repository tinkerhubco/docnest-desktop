import React from 'react';
import { storiesOf } from '@storybook/react';

import MenuItem from './MenuItem';

const placeholderText = 'MenuItem';

storiesOf('MenuItem', module).add('simple', () => (
  <MenuItem>{placeholderText}</MenuItem>
));
