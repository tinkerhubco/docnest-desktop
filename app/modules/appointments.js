export const STATE_KEY = 'appointments';

export const ADD_APPOINTMENTS = 'app.appointments.ADD_APPOINTMENTS';

export const addAppointments = entities => ({
  type: ADD_APPOINTMENTS,
  payload: entities
});

export default function appointments(state = {}, { payload, type }) {
  switch (type) {
    case ADD_APPOINTMENTS:
      return {
        ...state,
        ...payload[STATE_KEY]
      };

    default:
      return state;
  }
}
