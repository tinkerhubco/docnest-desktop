import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectInput from './SelectInput';

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

storiesOf('SelectInput', module)
  .add('default', () => (
    <SelectInput
      id={placeholderId}
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
    />
  ))
  .add('disabled', () => (
    <SelectInput
      id={placeholderId}
      disabled
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
    />
  ))
  .add('required', () => (
    <SelectInput
      id={placeholderId}
      required
      value={1}
      label="Name"
      onChange={onChangeHandler}
      items={menuItems}
    />
  ));

storiesOf('SelectInput/Label', module).add('default', () => (
  <SelectInput
    id={placeholderId}
    label="Items"
    value={1}
    onChange={onChangeHandler}
    items={menuItems}
  />
));

storiesOf('SelectInput/HelperText', module)
  .add('default', () => (
    <SelectInput
      id={placeholderId}
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
      helperText="Helper Text"
    />
  ))
  .add('With Label', () => (
    <SelectInput
      id={placeholderId}
      label="Items"
      value={1}
      onChange={onChangeHandler}
      items={menuItems}
      helperText="Helper Text"
    />
  ));
