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

const placeholderId = 'select-id';

storiesOf('Select', module)
  .add('default', () => (
    <Select
      id={placeholderId}
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
    />
  ))
  .add('disabled', () => (
    <Select
      id={placeholderId}
      disabled
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
    />
  ))
  .add('required', () => (
    <Select
      id={placeholderId}
      required
      value={1}
      label="Name"
      onChange={onChangeHandler}
      items={menuItems}
    />
  ));

storiesOf('Select/Label', module).add('default', () => (
  <Select
    id={placeholderId}
    label="Items"
    value={1}
    onChange={onChangeHandler}
    items={menuItems}
  />
));

storiesOf('Select/HelperText', module)
  .add('default', () => (
    <Select
      id={placeholderId}
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
      helperText="Helper Text"
    />
  ))
  .add('With Label', () => (
    <Select
      id={placeholderId}
      label="Items"
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
      helperText="Helper Text"
    />
  ));
