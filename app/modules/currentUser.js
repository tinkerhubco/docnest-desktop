export const STATE_KEY = 'currentUser';

export const SET_CURRENT_USER = 'app.currentUser.SET_CURRENT_USER';

export const setCurrentUser = userId => ({
  type: SET_CURRENT_USER,
  payload: {
    userId
  }
});

export default function currentUser(state = '', { payload, type }) {
  switch (type) {
    case SET_CURRENT_USER:
      return payload.userId;

    default:
      return state;
  }
}
