import React from 'react';
import { storiesOf } from '@storybook/react';

import PasswordField from './PasswordField';

storiesOf('PasswordField', module)
  .add('default', () => <PasswordField />)
  .add('show password', () => <PasswordField showPassword />);
