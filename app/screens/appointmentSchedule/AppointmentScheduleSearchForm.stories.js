import React from 'react';
import { storiesOf } from '@storybook/react';

import AppointmentScheduleSearchForm from './AppointmentScheduleSearchForm';

storiesOf(
  'Screens/AppointmentSchedule/AppointmentScheduleSearchForm',
  module
).add('default', () => <AppointmentScheduleSearchForm />);
