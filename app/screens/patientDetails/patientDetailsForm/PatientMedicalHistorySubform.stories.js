import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientMedicalHistorySubform from './PatientMedicalHistorySubform';

storiesOf('Screens/PatientDetails/PatientMedicalForm', module).add(
  'default',
  () => <PatientMedicalHistorySubform />
);
