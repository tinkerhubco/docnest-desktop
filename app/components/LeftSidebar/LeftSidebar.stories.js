import React from 'react';
import { storiesOf } from '@storybook/react';

import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

import LeftSidebar from './LeftSidebar';

const placeholderMenuItems = [
  {
    title: 'Menu 1',
    icon: <StarIcon />
  },
  {
    title: 'Menu 2',
    icon: <SendIcon />
  },
  {
    title: 'Menu 3',
    icon: <MailIcon />
  },
  {
    title: 'Menu 4',
    icon: <DeleteIcon />
  },
  {
    title: 'Menu 5',
    icon: <ReportIcon />
  }
];

const placeholderHandleCollapseClick = (event, open) => console.log(open);

storiesOf('LeftSidebar', module)
  .add('default - open', () => (
    <LeftSidebar
      open
      menuItems={placeholderMenuItems}
      onCollapseClick={placeholderHandleCollapseClick}
    />
  ))
  .add('default - close', () => (
    <LeftSidebar
      menuItems={placeholderMenuItems}
      onCollapseClick={placeholderHandleCollapseClick}
    />
  ));
