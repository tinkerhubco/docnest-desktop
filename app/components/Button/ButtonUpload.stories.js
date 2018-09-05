import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonUpload from './ButtonUpload';

const placeholderText = 'Upload';
const placeholderButtonId = 'test-button';

storiesOf('ButtonUpload', module).add('default', () => (
  <ButtonUpload id={placeholderButtonId}>{placeholderText}</ButtonUpload>
));

storiesOf('ButtonUpload/Text', module)
  .add('default', () => (
    <ButtonUpload id={placeholderButtonId}>{placeholderText}</ButtonUpload>
  ))
  .add('primary', () => (
    <ButtonUpload id={placeholderButtonId} color="primary">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('secondary', () => (
    <ButtonUpload id={placeholderButtonId} color="secondary">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('disabled', () => (
    <ButtonUpload id={placeholderButtonId} disabled>
      {placeholderText}
    </ButtonUpload>
  ));

storiesOf('ButtonUpload/Contained', module)
  .add('default', () => (
    <ButtonUpload id={placeholderButtonId} variant="contained">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('primary', () => (
    <ButtonUpload id={placeholderButtonId} color="primary" variant="contained">
      {placeholderText}
    </ButtonUpload>
  ))
  .add('secondary', () => (
    <ButtonUpload
      id={placeholderButtonId}
      color="secondary"
      variant="contained"
    >
      {placeholderText}
    </ButtonUpload>
  ))
  .add('disabled', () => (
    <ButtonUpload id={placeholderButtonId} variant="contained" disabled>
      {placeholderText}
    </ButtonUpload>
  ));
