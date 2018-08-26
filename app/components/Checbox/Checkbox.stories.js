import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox />)
  .add('primary', () => <Checkbox color="primary" />)
  .add('secondary', () => <Checkbox color="secondary" />)
  .add('disabled', () => <Checkbox disabled />);

storiesOf('Checkbox/Checked', module)
  .add('default', () => <Checkbox checked />)
  .add('primary', () => <Checkbox checked color="primary" />)
  .add('secondary', () => <Checkbox checked color="secondary" />)
  .add('disabled', () => <Checkbox checked disabled />);
