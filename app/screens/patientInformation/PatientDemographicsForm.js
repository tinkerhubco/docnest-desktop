import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import DateRangeIcon from '@material-ui/icons/DateRange';

import DatePicker from '../../components/DatePicker/DatePicker';
import Form from '../../components/Form/Form';
import FormControl from '../../components/FormField/FormControl';
import FormControlLabel from '../../components/FormControlLabel/FormControlLabel';
import FormLabel from '../../components/FormLabel/FormLabel';
import Grid from '../../components/Grid/Grid';
import InputAdornment from '../../components/Input/InputAdornment';
import Radio from '../../components/Radio/Radio';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import TextField from '../../components/FormField/TextField';
import Typography from '../../components/Typography/Typography';

const StyledDatePicker = styled(DatePicker)`
  > div {
    align-items: unset;
  }
`;

const StyledGenderFormLabel = styled(FormLabel)`
  margin-top: 12px;
`;

const StyledGenderRadioGroup = styled(RadioGroup)`
  && {
    flex-direction: row;
  }
`;

export function PatientDemographicsForm() {
  return (
    <React.Fragment>
      <Typography variant="title">Demographics</Typography>
      <Formik
        initialValues={{
          firstName: '',
          middleName: '',
          lastName: '',
          birthDate: new Date(),
          gender: ''
        }}
        onSubmit={values => {
          console.log(values);
        }}
        render={({ setFieldValue }) => (
          <Form>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={4}>
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
              </Grid>
              <Grid item xs={12} sm={4}>
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
              </Grid>
              <Grid item xs={12} sm={4}>
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
              </Grid>
              <Grid item>
                <Field
                  name="gender"
                  render={({ field, form: { values } }) => (
                    <FormControl>
                      <StyledGenderFormLabel>Gender</StyledGenderFormLabel>
                      <StyledGenderRadioGroup
                        {...field}
                        aria-label="Gender"
                        value={values.gender}
                        onChange={event =>
                          setFieldValue('gender', event.target.value)
                        }
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Male"
                        />
                      </StyledGenderRadioGroup>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item>
                <Field
                  name="birthdate"
                  render={({ field }) => (
                    <StyledDatePicker
                      {...field}
                      autoOk
                      id="birthdate"
                      label="Date of Birth"
                      margin="normal"
                      onChange={date => setFieldValue('birthdate', date)}
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
              <Grid item>
                <Field
                  name="weight"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="weight"
                      label="Weight"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Field
                  name="height"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="height"
                      label="Height"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Field
                  name="healthCard"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="healthCard"
                      label="Health Card"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Field
                  name="emergencyContact"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="emergencyContact"
                      label="Emergency Contact"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item>
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
              </Grid>
              <Grid item>
                <Field
                  name="phone"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="phone"
                      label="Phone"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Field
                  name="bloodType"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="bloodType"
                      label="Blood Type"
                      margin="normal"
                      fullWidth
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

export default PatientDemographicsForm;
