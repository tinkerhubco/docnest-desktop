import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import Form from '../../components/Form/Form';
import TextField from '../../components/FormField/TextField';
import DatePicker from '../../components/DatePicker/DatePicker';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';

const StyledContainer = styled.div``;
const StyledFormContainer = styled.div``;
const StyledForm = styled(Form)``;

export function PatientMedicalForm() {
  return (
    <StyledContainer>
      <Typography variant="title">Medical History</Typography>
      <StyledFormContainer>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={values => {
            console.log(values);
          }}
          render={() => (
            <StyledForm>
              <Field
                name="healthCondition"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="healthCondition"
                    label="Health Condition"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="treatment"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="treatment"
                    label="Treatment"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="date"
                render={({ field }) => <DatePicker {...field} autoOk />}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add Patient Medical
              </Button>
            </StyledForm>
          )}
        />
      </StyledFormContainer>
    </StyledContainer>
  );
}

export default PatientMedicalForm;
