import React from 'react';
import { storiesOf } from '@storybook/react';

import PasswordInput from './PasswordInput';

storiesOf('PasswordInput', module)
  .add('default', () => <PasswordInput />)
  .add('show password', () => <PasswordInput showPassword />);
