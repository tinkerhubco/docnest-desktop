import React from 'react';
import { storiesOf } from '@storybook/react';

import AppointmentScheduleSearch from './AppointmentScheduleSearch';

storiesOf('Screens/AppointmentSchedule/AppointmentScheduleSearch', module).add(
  'default',
  () => <AppointmentScheduleSearch />
);
