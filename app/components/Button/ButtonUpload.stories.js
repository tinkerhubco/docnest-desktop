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
    <ButtonUpload color="primary">{placeholderText}</ButtonUpload>
  ))
  .add('secondary', () => (
    <ButtonUpload color="secondary">{placeholderText}</ButtonUpload>
  ))
  .add('disabled', () => (
    <ButtonUpload disabled>{placeholderText}</ButtonUpload>
  ));

storiesOf('ButtonUpload/Contained', module)
  .add('default', () => (
    <ButtonUpload variant="contained">{placeholderText}</ButtonUpload>
  ))
  .add('primary', () => (
    <ButtonUpload color="primary" variant="contained">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('secondary', () => (
    <ButtonUpload color="secondary" variant="contained">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('disabled', () => (
    <ButtonUpload variant="contained" disabled>
      {placeholderText}
    </ButtonUpload>
  ));
