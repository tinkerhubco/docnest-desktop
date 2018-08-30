import React from 'react';
import { storiesOf } from '@storybook/react';

import DateTimePicker from './DateTimePicker';

const currentDate = new Date();

storiesOf('DateTimePicker', module)
  .add('default', () => <DateTimePicker label="Default" value={currentDate} onChange={() => {}} />)
  .add('autoOk', () => <DateTimePicker label="Auto Ok" autoOk value={currentDate} onChange={() => {}} />)
  .add('clearable', () => <DateTimePicker label="Clearable" clearable value={currentDate} onChange={() => {}} />)
  .add('Turn off AM PM', () => <DateTimePicker label="AM PM" ampm={false} value={currentDate} onChange={() => {}} />)
  .add('showTodayButton', () => <DateTimePicker label="Show Today Button" showTodayButton todayLabel="Now" value={currentDate} onChange={() => {}} />)
  .add('Disable Future', () => <DateTimePicker label="Default" disableFuture value={currentDate} onChange={() => {}} />)
  .add('Disable Past', () => <DateTimePicker label="Default" disablePast value={currentDate} onChange={() => {}} />)
