import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`;

addDecorator(story => (
  <JssProvider generateClassName={generateClassName}>{story()}</JssProvider>
));

const req = require.context('../app/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
