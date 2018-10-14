// @flow
import { combineReducers } from 'redux';
import appointments, {
  STATE_KEY as APPOINTMENTS_STATE_KEY
} from './appointments';
import currentUser, {
  STATE_KEY as CURRENT_USER_STATE_KEY
} from './currentUser';
import roles, { STATE_KEY as ROLES_STATE_KEY } from './roles';
import users, { STATE_KEY as USERS_STATE_KEY } from './users';

const rootReducer = combineReducers({
  [APPOINTMENTS_STATE_KEY]: appointments,
  [CURRENT_USER_STATE_KEY]: currentUser,
  [ROLES_STATE_KEY]: roles,
  [USERS_STATE_KEY]: users
});

export default rootReducer;
