export const STATE_KEY = 'users';

export const ADD_USERS = 'app.users.ADD_USERS';

export const ADD_USER_APPOINTMENT =
  'app.user.appointments.ADD_USER_APPOINTMENT';

export const addUsers = entities => ({
  type: ADD_USERS,
  payload: entities
});

export const addUserAppointment = ({ userId, appointmentId }) => ({
  type: ADD_USER_APPOINTMENT,
  payload: { userId, appointmentId }
});

export default function users(state = {}, { payload, type }) {
  switch (type) {
    case ADD_USERS:
      return {
        ...state,
        ...payload[STATE_KEY]
      };

    case ADD_USER_APPOINTMENT:
      return {
        ...state,
        [payload.userId]: {
          ...state[payload.userId],
          appointments: [
            ...state[payload.userId].appointments,
            payload.appointmentId
          ]
        }
      };

    default:
      return state;
  }
}
