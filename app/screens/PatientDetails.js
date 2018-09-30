import React from 'react';

import SaveIcon from '@material-ui/icons/Save';

import PatientDetailsForm from './patientDetails/PatientDetailsForm';
import MainContent from '../components/MainContent/MainContent';

// TODO: Will be supplied by 'PatientDetailsForm'
// with the help of connector or/and conversions module

const initialValues = {
  healthConditions: [],
  medications: [],
  treatments: [],
  diagnostic: '',
  diagnosticDate: new Date(),
  firstName: '',
  middleName: '',
  lastName: '',
  birthDate: new Date(),
  gender: '',
  weight: '',
  height: '',
  healthCard: '',
  emergencyContact: '',
  address: '',
  phone: '',
  bloodType: ''
};

export class PatientDetails extends React.Component {
  render() {
    return (
      <PatientDetailsForm
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {({ form, formik: { handleSubmit } }) => (
          <MainContent
            title="Patient Information"
            buttonIcon={<SaveIcon />}
            onActionClick={handleSubmit}
          >
            {form}
          </MainContent>
        )}
      </PatientDetailsForm>
    );
  }
}

export default PatientDetails;
