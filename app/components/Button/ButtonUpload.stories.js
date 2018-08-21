import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonUpload from './ButtonUpload';

const placeholderText = 'Upload';

storiesOf('ButtonUpload', module).add('default', () => (
  <ButtonUpload>{placeholderText}</ButtonUpload>
));

storiesOf('ButtonUpload/Text', module)
  .add('default', () => <ButtonUpload>{placeholderText}</ButtonUpload>)
  .add('primary', () => (
    <ButtonUpload button-color="primary">{placeholderText}</ButtonUpload>
  ))
  .add('secondary', () => (
    <ButtonUpload button-color="secondary">{placeholderText}</ButtonUpload>
  ))
  .add('disabled', () => (
    <ButtonUpload disabled>{placeholderText}</ButtonUpload>
  ));

storiesOf('ButtonUpload/Contained', module)
  .add('default', () => (
    <ButtonUpload button-variant="contained">{placeholderText}</ButtonUpload>
  ))
  .add('primary', () => (
    <ButtonUpload button-color="primary" button-variant="contained">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('secondary', () => (
    <ButtonUpload button-color="secondary" button-variant="contained">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('disabled', () => (
    <ButtonUpload button-variant="contained" disabled>
      {placeholderText}
    </ButtonUpload>
  ));
