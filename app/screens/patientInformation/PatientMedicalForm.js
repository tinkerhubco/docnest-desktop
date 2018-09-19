import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import DateRangeIcon from '@material-ui/icons/DateRange';

import DatePicker from '../../components/DatePicker/DatePicker';
import Form from '../../components/Form/Form';
import Grid from '../../components/Grid/Grid';
import InputAdornment from '../../components/Input/InputAdornment';
import TextField from '../../components/FormField/TextField';
import Typography from '../../components/Typography/Typography';

const StyledDatePicker = styled(DatePicker)`
  > div {
    align-items: unset;
  }
`;

export function PatientMedicalForm() {
  return (
    <React.Fragment>
      <Typography variant="title">Medical History</Typography>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => {
          console.log(values);
        }}
        render={({ setFieldValue }) => (
          <Form>
            <Grid container spacing={24}>
              <Grid item>
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
              </Grid>
              <Grid item>
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
              </Grid>
              <Grid item>
                <Field
                  name="date"
                  render={({ field }) => (
                    <StyledDatePicker
                      {...field}
                      autoOk
                      id="birthdate"
                      label="Date of Birth"
                      margin="normal"
                      onChange={date => setFieldValue('date', date)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Form>
        )}
      />
    </React.Fragment>
  );
}

export default PatientMedicalForm;
