import React from 'react';
import { storiesOf } from '@storybook/react';

import LinearProgress from './LinearProgress';

storiesOf('LinearProgress', module)
  .add('default', () => <LinearProgress />)
  .add('primary', () => <LinearProgress color="primary" />)
  .add('secondary', () => <LinearProgress color="secondary" />);
