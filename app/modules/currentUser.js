export const STATE_KEY = 'currentUser';

export const ADD_CURRENT_USER = 'app.currentUser.ADD_CURRENT_USER';
export const ADD_CURRENT_USER_APPOINTMENT =
  'app.currentUser.appointments.ADD_CURRENT_USER_APPOINTMENTS';

export const addCurrentUser = entities => ({
  type: ADD_CURRENT_USER,
  payload: entities
});

export const addCurrentUserAppointment = ({ appointmentId }) => ({
  type: ADD_CURRENT_USER_APPOINTMENT,
  payload: { appointmentId }
});

export default function currentUser(state = {}, { payload, type }) {
  switch (type) {
    case ADD_CURRENT_USER:
      // Remove other properties except id and appointments
      return {
        ...state,
        ...Object.entries(payload[STATE_KEY]).map(([id, data]) => ({
          id,
          appointments: data.appointments
        }))[0]
      };
    case ADD_CURRENT_USER_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, payload.appointmentId]
      };

    default:
      return state;
  }
}
