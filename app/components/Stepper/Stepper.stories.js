import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button/Button';
import Stepper from './Stepper';

// support for should select first step?
// Todo: Support for after clicked event

let steps = [
  {
    $$hash: undefined,
    title: 'Select a campaign settings',
    content: `Here's the campaign settings`
  },
  {
    $$hash: undefined,
    title: 'Create an ad group',
    content: 'Created group will be the organization of your ad'
  },
  {
    $$hash: undefined,
    title: 'Create an ad',
    content: 'This is the bit I really care about!'
  }
];

let stepsWithOptional = [
  ...steps,
  {
    $$hash: undefined,
    title: 'What is your name?',
    content: 'Your name will be use for survey purposes',
    optional: true
  }
];

let stepsWithJSXContent = [
  ...steps,
  {
    $$hash: undefined,
    title: 'I have a JSX Content',
    content: (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    )
  }
];

steps = generateBasicHash(steps);
stepsWithOptional = generateBasicHash(stepsWithOptional);
stepsWithJSXContent = generateBasicHash(stepsWithJSXContent);

storiesOf('Stepper', module).add('default', () => <Stepper steps={steps} />);

storiesOf('Stepper/Optional', module).add('default', () => (
  <Stepper steps={stepsWithOptional} />
));

storiesOf('Stepper/JSX Content', module).add('default', () => (
  <Stepper steps={stepsWithJSXContent} />
));

function generateBasicHash(stepperSteps = []) {
  const stepsWithHash = stepperSteps.map((stepperStep = {}) =>
    Object.assign({}, stepperStep, {
      $$hash: Buffer.from(JSON.stringify(stepperStep)).toString('base64')
    })
  );
  return stepsWithHash;
}
