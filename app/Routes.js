/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from './App';

import DefaultLayout from './layout/DefaultLayout';

import Login from './screens/Login';
import AppointmentSchedule from './screens/AppointmentSchedule';

function ProtectedRoute({ component: Component, ...rest }) {
  // This will supplied by `AuthService`
  const authenticated = true;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <React.Fragment>
            <DefaultLayout>
              <Component {...props} />
            </DefaultLayout>
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
}

export function Routes() {
  return (
    <App>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" component={AppointmentSchedule} />
      </Switch>
    </App>
  );
}

export default Routes;
