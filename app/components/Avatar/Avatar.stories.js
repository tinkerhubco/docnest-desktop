import React from 'react';
import { storiesOf } from '@storybook/react';
import PageviewIcon from '@material-ui/icons/Pageview';

import Avatar from './';

const placeholderImageUrl = 'https://via.placeholder.com/64x64';
const placeholderAltText = 'avatar';
const placeholderIcon = <PageviewIcon />;
const placeholderLetter = 'J';

storiesOf('Avatar', module)
  .add('image', () => (
    <Avatar alt={placeholderAltText} src={placeholderImageUrl} />
  ))
  .add('icon', () => (
    <Avatar alt={placeholderAltText}>{placeholderIcon}</Avatar>
  ))
  .add('letter', () => <Avatar>{placeholderLetter}</Avatar>);
