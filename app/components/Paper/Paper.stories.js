import React from 'react';
import { storiesOf } from '@storybook/react';

import Typography from '../Typography/Typography';
import Paper from './Paper';

storiesOf('Paper', module).add('default', () => (
  <Paper>
    <h1>I am inside a Paper</h1>
  </Paper>
));

paperElevationStories();

function paperElevationStories() {
  const start = 0;
  const end = 24;

  for (let i = start; i <= end; i += 1) {
    const elevationName = `elevation${i}`;
    storiesOf('Paper/Elevation', module).add(elevationName, () => (
      <Paper elevation={i}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper with Elevation Value: `elevation
          {i}`
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    ));
  }
}
