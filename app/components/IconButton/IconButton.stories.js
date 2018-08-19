import React from 'react';
import { storiesOf } from '@storybook/react';
import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from './';

const placeholderIcon = <DeleteIcon />;

storiesOf('IconButton', module).add('default', () => (
  <IconButton>{placeholderIcon}</IconButton>
));
