import { configure, addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import 'material-design-icons/iconfont/material-icons.css';

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`;

addDecorator(story => (
  <JssProvider generateClassName={generateClassName}>{story()}</JssProvider>
));

addDecorator((story, context) => withConsole()(story)(context));

const componentsReq = require.context(
  '../app/components',
  true,
  /\.stories\.js$/
);

const screensReq = require.context('../app/screens', true, /\.stories\.js$/);

function loadStories() {
  componentsReq.keys().forEach(filename => componentsReq(filename));
  screensReq.keys().forEach(filename => screensReq(filename));
}

configure(loadStories, module);
