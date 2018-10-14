export const STATE_KEY = 'users';

export const ADD_USERS = 'app.users.ADD_USERS';

export const addUsers = entities => ({
  type: ADD_USERS,
  payload: entities
});

export default function users(state = {}, { payload, type }) {
  switch (type) {
    case ADD_USERS:
      return {
        ...state,
        ...payload[STATE_KEY]
      };

    default:
      return state;
  }
}
