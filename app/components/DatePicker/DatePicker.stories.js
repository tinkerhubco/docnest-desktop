import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from './DatePicker';

const currentDate = new Date();

storiesOf('DatePicker', module)
  .add('default', () => <DatePicker value={currentDate} onChange={() => {}} />)
