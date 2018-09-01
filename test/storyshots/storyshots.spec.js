import initStoryshots from '@storybook/addon-storyshots';
import 'jest-styled-components';

// TODO: Find a way to snapshot components injected to the DOM
initStoryshots({
  // Disable storyshots for components that can't be open
  // without interacting with DOM (they are injected in body) (e.g. modal)
  // https://github.com/mui-org/material-ui/issues/10679
  storyKindRegex: /^((?!.*?(Snackbar|Menu(?![A-Za-z]))).)*$/
});
