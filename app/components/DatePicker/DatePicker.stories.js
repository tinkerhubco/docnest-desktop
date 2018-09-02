import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from './DatePicker';

const placeholderDate = new Date('2018-09-05T00:00:00Z');

storiesOf('DatePicker', module).add('default', () => (
  <DatePicker value={placeholderDate} onChange={() => {}} />
));
