import { configure } from '@storybook/react';

const req = require.context('../app/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
