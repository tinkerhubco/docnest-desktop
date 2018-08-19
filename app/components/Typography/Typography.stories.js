import React from 'react';
import { storiesOf } from '@storybook/react';

import Typography from './';

const placeholderText = 'Typography';
const placeholderTextNoWrap = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

storiesOf('Typography', module)
  .add('display 4', () => (
    <Typography variant="display4">{placeholderText}</Typography>
  ))
  .add('display 3', () => (
    <Typography variant="display3">{placeholderText}</Typography>
  ))
  .add('display 2', () => (
    <Typography variant="display2">{placeholderText}</Typography>
  ))
  .add('display 1', () => (
    <Typography variant="display1">{placeholderText}</Typography>
  ))
  .add('headline', () => (
    <Typography variant="headline">{placeholderText}</Typography>
  ))
  .add('title', () => (
    <Typography variant="title">{placeholderText}</Typography>
  ))
  .add('subheading', () => (
    <Typography variant="subheading">{placeholderText}</Typography>
  ))
  .add('body 2', () => (
    <Typography variant="body2">{placeholderText}</Typography>
  ))
  .add('body 1', () => (
    <Typography variant="body1">{placeholderText}</Typography>
  ))
  .add('caption', () => (
    <Typography variant="caption">{placeholderText}</Typography>
  ))
  .add('nowrap', () => (
    <Typography noWrap gutterBottom>
      {placeholderTextNoWrap}
    </Typography>
  ));
