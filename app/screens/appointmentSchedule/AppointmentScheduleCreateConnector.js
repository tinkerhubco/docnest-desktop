export function AppointmentScheduleCreateConnector(props) {
  return props.children({
    appointmentScheduleCreator: {
      // TODO: Redux action
      execute: draft => console.log(draft)
    }
  });
}

export default AppointmentScheduleCreateConnector;
