import React from 'react';
import { storiesOf } from '@storybook/react';

import PatientRecords from './PatientRecords';

storiesOf('Screens/PatientRecords', module).add('default', () => (
  <PatientRecords />
));
