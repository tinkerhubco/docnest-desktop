import React from 'react';

import SaveIcon from '@material-ui/icons/Save';

import PatientCreateConnector from './patientDetails/PatientCreateConnector';
import PatientDetailsConnector from './patientDetails/PatientDetailsConnector';
import PatientDetailsForm from './patientDetails/PatientDetailsForm';
import MainContent from '../components/MainContent/MainContent';

import { patientDetailsConversions as conversions } from '../utils/conversions';

export class PatientDetails extends React.Component {
  render() {
    const createOperation = true;

    return (
      <PatientCreateConnector>
        {({ patientCreator }) => (
          <PatientDetailsConnector>
            {({ patientFetcher, patientUpdater }) => (
              <PatientDetailsForm
                initialValues={conversions.responseToFormValues(
                  patientFetcher.patient
                )}
                onSubmit={(values, formikBag) => {
                  const draft = conversions.formValuesToRequest(values);

                  if (createOperation) {
                    patientCreator.execute(draft);
                  } else {
                    patientUpdater.execute(draft);
                  }

                  formikBag.resetForm();
                }}
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
        )}
      </PatientCreateConnector>
    );
  }
}

export default PatientDetails;
