import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox />)
  .add('primary', () => <Checkbox color="primary" />)
  .add('secondary', () => <Checkbox color="secondary" />)
  .add('disabled', () => <Checkbox disabled />);
