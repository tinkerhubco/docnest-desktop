import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './Divider';

storiesOf('Divider', module)
  .add('default', () => <Divider />)
  .add('inset', () => <Divider inset />)
  .add('light', () => <Divider light />);
