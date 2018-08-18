import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

const StyledCard = Card.extend`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const placeholderContent = <div>Card container</div>;

storiesOf('Button/Card', module).add('container', () => (
  <StyledCard>{placeholderContent}</StyledCard>
));
