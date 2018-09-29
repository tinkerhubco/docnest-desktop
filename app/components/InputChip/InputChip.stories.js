import React from 'react';
import { storiesOf } from '@storybook/react';

import InputChip from './InputChip';

const placeholderText = 'Placeholder';
const placeholderLabel = 'Label';

storiesOf('InputChip', module)
  .add('default', () => <InputChip />)
  .add('with placeholder', () => <InputChip placeholder={placeholderText} />)
  .add('with floating label', () => <InputChip label={placeholderLabel} />)
  .add('with placeholder and label', () => (
    <InputChip label={placeholderLabel} placeholder={placeholderText} />
  ))
  .add('with default value', () => <InputChip defaultValue={['foo', 'bar']} />);
