import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientDemographicsForm from './PatientDemographicsForm';

storiesOf('Screens/PatientInformation/PatientDemoGraphicsForm', module).add(
  'default',
  () => <PatientDemographicsForm />
);
