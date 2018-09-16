import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import Form from '../../components/Form/Form';
import TextField from '../../components/FormField/TextField';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';

const StyledContainer = styled.div``;
const StyledFormContainer = styled.div``;
const StyledForm = styled(Form)``;

export function PatientDemographicsForm() {
  return (
    <StyledContainer>
      <Typography variant="title">Demographics</Typography>
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
                name="firstName"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="firstName"
                    label="First name"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="middleName"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="middleName"
                    label="Middle name"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="lastName"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="lastName"
                    label="Last name"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="birthdate"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="birthdate"
                    label="Date of Birth"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="gender"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="gender"
                    label="Gender"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="address"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="address"
                    label="Address"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Field
                name="phoneNumber"
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="phoneNumber"
                    label="Phone Number"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add Patient
              </Button>
            </StyledForm>
          )}
        />
      </StyledFormContainer>
    </StyledContainer>
  );
}

export default PatientDemographicsForm;
