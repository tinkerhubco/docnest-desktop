import React from 'react';
import { storiesOf } from '@storybook/react';

import TextField from './TextField';

storiesOf('TextField', module).add('default', () => <TextField />);

storiesOf('TextField/Label', module).add('With Label', () => (
  <TextField label="Label" />
));

storiesOf('TextField/Error', module)
  .add('With Error', () => <TextField error />)
  .add('With Error And Label', () => <TextField error label="Error" />);

storiesOf('TextField/HelperText', module)
  .add('With Helper Text', () => <TextField helperText="Helper Text" />)
  .add('With Helper Text And Label', () => (
    <TextField helperText="Helper Text" label="Label" />
  ))
  .add('With Helper Text And Error', () => (
    <TextField helperText="Helper Text" error />
  ))
  .add('With Helper Text, Error And Label', () => (
    <TextField helperText="Helper Text" error label="Label" />
  ));

storiesOf('TextField/Number', module)
  .add('With Helper Text', () => (
    <TextField type="number" helperText="Helper Text" />
  ))
  .add('With Helper Text And Label', () => (
    <TextField type="number" helperText="Helper Text" label="Label" />
  ))
  .add('With Helper Text And Error', () => (
    <TextField type="number" helperText="Helper Text" error />
  ))
  .add('With Helper Text, Error And Label', () => (
    <TextField type="number" helperText="Helper Text" error label="Label" />
  ));

storiesOf('TextField/Password', module)
  .add('With Helper Text', () => (
    <TextField type="password" helperText="Helper Text" />
  ))
  .add('With Helper Text And Label', () => (
    <TextField type="password" helperText="Helper Text" label="Label" />
  ))
  .add('With Helper Text And Error', () => (
    <TextField type="password" helperText="Helper Text" error />
  ))
  .add('With Helper Text, Error And Label', () => (
    <TextField type="password" helperText="Helper Text" error label="Label" />
  ));
