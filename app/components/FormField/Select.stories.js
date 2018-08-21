import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './Select';

const menuItems = [
  {
    label: 'None'
  },
  {
    value: 1,
    label: 'One'
  },
  {
    value: 2,
    label: 'Two'
  },
  {
    value: '3',
    label: 'Three'
  }
];

const onChangeHandler = event => {
  alert(`You have selected ${event.target.value}`);
};

storiesOf('Select', module)
  .add('default', () => (
    <Select value={1} onChange={onChangeHandler} items={menuItems} />
  ))
  .add('disabled', () => (
    <Select disabled value={1} onChange={onChangeHandler} items={menuItems} />
  ))
  .add('required', () => (
    <Select
      required
      value={1}
      label="Name"
      onChange={onChangeHandler}
      items={menuItems}
    />
  ));

storiesOf('Select/Label', module).add('default', () => (
  <Select
    label="Items"
    value={1}
    onChange={onChangeHandler}
    items={menuItems}
  />
));

storiesOf('Select/HelperText', module)
  .add('default', () => (
    <Select
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
      helper-text="Helper Text"
    />
  ))
  .add('With Label', () => (
    <Select
      label="Items"
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
      helper-text="Helper Text"
    />
  ));
