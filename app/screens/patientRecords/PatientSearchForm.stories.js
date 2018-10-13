import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientSearchForm from './PatientSearchForm';

storiesOf('Screens/PatientRecords/PatientSearchForm', module).add(
  'default',
  () => <PatientSearchForm />
);
