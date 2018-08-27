import React from 'react';
import { storiesOf } from '@storybook/react';

import FormikForm from '../Form/Form';

const schema = {
  fields: {
    email: {
      value: '',
      required: true,
      type: 'text',
      label: 'Email'
    },
    username: {
      value: '',
      required: true,
      type: 'text',
      label: 'Username'
    }
  }
};

storiesOf('Form', module).add('default', () => <FormikForm schema={schema} />);
