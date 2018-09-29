import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientInformation from './PatientInformation';

storiesOf('Screens/PatientInformation', module).add('default', () => (
  <PatientInformation />
));
