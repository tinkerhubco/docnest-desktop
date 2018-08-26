import React from 'react';
import { storiesOf } from '@storybook/react';

import CircularProgress from './CircularProgress';

storiesOf('CircularProgress', module)
  .add('default', () => <CircularProgress />)
  .add('primary', () => <CircularProgress color="primary" />)
  .add('secondary', () => <CircularProgress color="secondary" />)
  .add('static', () => <CircularProgress variant="static" value={25} />);
