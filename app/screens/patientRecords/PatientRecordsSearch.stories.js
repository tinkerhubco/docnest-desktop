import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientRecordsSearch from './PatientRecordsSearch';

storiesOf('Screens/PatientRecords/PatientRecordsSearch', module).add(
  'default',
  () => <PatientRecordsSearch />
);
