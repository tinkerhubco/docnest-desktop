/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import {
  Switch,
  Route,
  Redirect as ReactRouterRedirect
} from 'react-router-dom';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ScheduleIcon from '@material-ui/icons/Schedule';

import App from './App';
import DefaultLayout from './layout/DefaultLayout';
import Login from './screens/Login';
import AppointmentSchedule from './screens/AppointmentSchedule';
import PatientInformation from './screens/PatientInformation';
import PatientRecords from './screens/PatientRecords';

function ProtectedRoute({ component: Component, ...rest }) {
  // This will supplied by `AuthService`
  const authenticated = true;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <DefaultLayout {...props}>
            <Component {...props} />
          </DefaultLayout>
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

export const ROUTES = [
  {
    path: '/',
    exact: true,
    title: 'Dashboard',
    component: () => <div>Dashboard</div>,
    icon: <DashboardIcon />
  },
  {
    path: '/calendar',
    title: 'Calendar',
    component: () => <div>Calendar</div>,
    icon: <CalendarTodayIcon />
  },
  {
    path: '/documents',
    title: 'Documents',
    component: () => <div>Documents</div>,
    icon: <FolderIcon />
  },
  {
    path: '/insurance',
    title: 'Insurance',
    component: () => <div>Insurance</div>,
    icon: <AccountBalanceIcon />
  },
  {
    path: '/pharmacies',
    title: 'Pharmacies',
    component: () => <div>Pharmacies</div>,
    icon: <LocalHospitalIcon />
  },
  {
    path: '/patients',
    title: 'Patient Records',
    component: PatientRoutes,
    icon: <AssignmentIndIcon />
  },
  {
    path: '/appointments',
    title: 'Appointments',
    component: AppointmentSchedule,
    icon: <ScheduleIcon />
  }
];

const PATIENT_ROUTES = [
  {
    path: '/patients',
    component: PatientRecords,
    exact: true
  },
  {
    path: '/patients/:id',
    component: PatientInformation
  }
];

export function Redirect(props) {
  return props.to ? <ReactRouterRedirect {...props} /> : null;
}

export function Routes() {
  return (
    <App>
      <Switch>
        <Route path="/login" component={Login} />
        {ROUTES.map(({ path, component, exact }) => (
          <ProtectedRoute
            key="path"
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </App>
  );
}

export function PatientRoutes() {
  return (
    <Switch>
      {PATIENT_ROUTES.map(({ path, component, exact }) => (
        <Route key="path" path={path} component={component} exact={exact} />
      ))}
    </Switch>
  );
}

export default Routes;
