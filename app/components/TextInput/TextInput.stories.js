import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';

storiesOf('TextInput', module).add('default', () => <TextInput />);

storiesOf('TextInput/Label', module).add('With Label', () => (
  <TextInput label="Label" />
));

storiesOf('TextInput/Error', module)
  .add('With Error', () => <TextInput error />)
  .add('With Error And Label', () => <TextInput error label="Error" />);

storiesOf('TextInput/HelperText', module)
  .add('With Helper Text', () => <TextInput helperText="Helper Text" />)
  .add('With Helper Text And Label', () => (
    <TextInput helperText="Helper Text" label="Label" />
  ))
  .add('With Helper Text And Error', () => (
    <TextInput helperText="Helper Text" error />
  ))
  .add('With Helper Text, Error And Label', () => (
    <TextInput helperText="Helper Text" error label="Label" />
  ));

storiesOf('TextInput/Number', module)
  .add('With Helper Text', () => (
    <TextInput type="number" helperText="Helper Text" />
  ))
  .add('With Helper Text And Label', () => (
    <TextInput type="number" helperText="Helper Text" label="Label" />
  ))
  .add('With Helper Text And Error', () => (
    <TextInput type="number" helperText="Helper Text" error />
  ))
  .add('With Helper Text, Error And Label', () => (
    <TextInput type="number" helperText="Helper Text" error label="Label" />
  ));

storiesOf('TextInput/Password', module)
  .add('With Helper Text', () => (
    <TextInput type="password" helperText="Helper Text" />
  ))
  .add('With Helper Text And Label', () => (
    <TextInput type="password" helperText="Helper Text" label="Label" />
  ))
  .add('With Helper Text And Error', () => (
    <TextInput type="password" helperText="Helper Text" error />
  ))
  .add('With Helper Text, Error And Label', () => (
    <TextInput type="password" helperText="Helper Text" error label="Label" />
  ));
