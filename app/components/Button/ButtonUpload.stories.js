import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonUpload from './ButtonUpload';

const placeholderText = 'Upload';

function buttonPropsCreator (key, value) {
  return {
    [key]: value
  }
}

storiesOf('ButtonUpload', module)
  .add('default', () => <ButtonUpload>{placeholderText}</ButtonUpload>)

storiesOf('ButtonUploadText', module)
  .add('default', () => <ButtonUpload>{ placeholderText }</ButtonUpload>)
  .add('primary', () => <ButtonUpload buttonProps={ buttonPropsCreator('color', 'primary') }>{ placeholderText }</ButtonUpload>)
  .add('secondary', () => <ButtonUpload buttonProps={ buttonPropsCreator('color', 'secondary') }>{ placeholderText }</ButtonUpload>)
  .add('disabled', () => <ButtonUpload disabled>{ placeholderText }</ButtonUpload>)

storiesOf('ButtonUploadContained', module)
  .add('default', () => <ButtonUpload buttonProps={ buttonPropsCreator('variant', 'contained') }>{ placeholderText }</ButtonUpload>)
  .add('primary', () => <ButtonUpload buttonProps={ Object.assign({}, buttonPropsCreator('color', 'primary'), buttonPropsCreator('variant', 'contained')) }>{ placeholderText }</ButtonUpload>)
  .add('secondary', () => <ButtonUpload buttonProps={ Object.assign({}, buttonPropsCreator('color', 'secondary'), buttonPropsCreator('variant', 'contained')) }>{ placeholderText }</ButtonUpload>)
  .add('disabled', () => <ButtonUpload buttonProps={ buttonPropsCreator('variant', 'contained') } disabled>{ placeholderText }</ButtonUpload>)
