export function PatientSearchConnector(props) {
  return props.children({
    patientSearchUpdater: {
      // TODO: Redux action
      execute: draft => console.log(draft)
    }
  });
}

export default PatientSearchConnector;
