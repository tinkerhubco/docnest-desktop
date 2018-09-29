import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientMedicalForm from './PatientMedicalForm';

storiesOf('Screens/PatientInformation/PatientMedicalForm', module).add(
  'default',
  () => <PatientMedicalForm />
);
