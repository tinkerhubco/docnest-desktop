import React from 'react';
import { storiesOf } from '@storybook/react';

import TimePicker from './TimePicker';

const currentDate = new Date();

storiesOf('TimePicker', module)
  .add('default', () => <TimePicker label="Default" value={currentDate} onChange={() => {}} />)
  .add('autoOk', () => <TimePicker label="Auto Ok" autoOk value={currentDate} onChange={() => {}} />)
  .add('clearable', () => <TimePicker label="Clearable" clearable value={currentDate} onChange={() => {}} />)
  .add('Turn off AM PM', () => <TimePicker label="AM PM" ampm={false} value={currentDate} onChange={() => {}} />)
  .add('showTodayButton', () => <TimePicker label="Show Today Button" showTodayButton todayLabel="Now" value={currentDate} onChange={() => {}} />)
