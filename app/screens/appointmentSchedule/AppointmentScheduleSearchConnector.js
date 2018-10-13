export function AppointmentScheduleSearchConnector(props) {
  return props.children({
    appointmentScheduleSearchUpdater: {
      // TODO: Redux action
      execute: draft => console.log(draft)
    }
  });
}

export default AppointmentScheduleSearchConnector;
