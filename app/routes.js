/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './screens/App';

export default () => (
  <App>
    <Switch>
      <Route path="/" render={() => <div>DocNest Desktop</div>} />
    </Switch>
  </App>
);
