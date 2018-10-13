import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientDemographicsSubform from './PatientDemographicsSubform';

storiesOf('Screens/PatientDetails/PatientDemoGraphicsForm', module).add(
  'default',
  () => <PatientDemographicsSubform />
);
