import React from 'react';
import { storiesOf } from '@storybook/react';

import DateTimePicker from './DateTimePicker';

const placeholderDateDefault = new Date('2018-09-05T08:00:00Z');
const placeholderDatePast = new Date('2017-09-05T08:00:00Z');

storiesOf('DateTimePicker', module)
  .add('default', () => (
    <DateTimePicker
      label="Default"
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('autoOk', () => (
    <DateTimePicker
      label="Auto Ok"
      autoOk
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('clearable', () => (
    <DateTimePicker
      label="Clearable"
      clearable
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('Turn off AM PM', () => (
    <DateTimePicker
      label="AM PM"
      ampm={false}
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('showTodayButton', () => (
    <DateTimePicker
      label="Show Today Button"
      showTodayButton
      todayLabel="Now"
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('Disable Future', () => (
    <DateTimePicker
      label="Default"
      disableFuture
      value={placeholderDatePast}
      onChange={() => {}}
    />
  ))
  .add('Disable Past', () => (
    <DateTimePicker
      label="Default"
      disablePast
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ));
