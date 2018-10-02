import React from 'react';

import SaveIcon from '@material-ui/icons/Save';

import PatientDetailsConnector from './patientDetails/PatientDetailsConnector';
import PatientDetailsForm from './patientDetails/PatientDetailsForm';
import MainContent from '../components/MainContent/MainContent';

import { patientDetailsConversions as conversions } from '../utils/conversions';

export class PatientDetails extends React.Component {
  render() {
    return (
      <PatientDetailsConnector>
        {({ patientFetcher, patientUpdater }) => (
          <PatientDetailsForm
            initialValues={conversions.responseToFormValues(
              patientFetcher.patient
            )}
            onSubmit={values =>
              patientUpdater.execute(conversions.formValuesToRequest(values))
            }
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
        )}
      </PatientDetailsConnector>
    );
  }
}

export default PatientDetails;
