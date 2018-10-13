export function PatientDetailsConnector(props) {
  return props.children({
    patientFetcher: {
      // TODO: Get from redux store
      isLoading: false,
      patient: {
        healthConditions: [],
        medications: [],
        treatments: [],
        diagnostic: '',
        diagnosticDate: new Date(),
        firstName: '',
        middleName: '',
        lastName: '',
        birthdate: new Date(),
        gender: '',
        weight: '',
        height: '',
        healthCard: '',
        emergencyContact: '',
        address: '',
        phone: '',
        bloodType: ''
      }
    },
    patientUpdater: {
      // TODO: Redux action
      execute: draft => console.log(draft)
    }
  });
}

export default PatientDetailsConnector;
