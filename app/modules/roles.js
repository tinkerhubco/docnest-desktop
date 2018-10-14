export const STATE_KEY = 'roles';

export const ADD_ROLES = 'app.roles.ADD_ROLES';

export const addRoles = entities => ({
  type: ADD_ROLES,
  payload: entities
});

export default function roles(state = {}, { payload, type }) {
  switch (type) {
    case ADD_ROLES:
      return {
        ...state,
        ...payload[STATE_KEY]
      };

    default:
      return state;
  }
}
