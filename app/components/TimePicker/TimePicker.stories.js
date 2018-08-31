import React from 'react';
import { storiesOf } from '@storybook/react';

import TimePicker from './TimePicker';

const placeholderDateDefault = new Date('2018-09-05T00:00:00Z');

storiesOf('TimePicker', module)
  .add('default', () => (
    <TimePicker
      label="Default"
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('autoOk', () => (
    <TimePicker
      label="Auto Ok"
      autoOk
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('clearable', () => (
    <TimePicker
      label="Clearable"
      clearable
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('Turn off AM PM', () => (
    <TimePicker
      label="AM PM"
      ampm={false}
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ))
  .add('showTodayButton', () => (
    <TimePicker
      label="Show Today Button"
      showTodayButton
      todayLabel="Now"
      value={placeholderDateDefault}
      onChange={() => {}}
    />
  ));
