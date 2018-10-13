/**
 * TODO: Stand alone form with formik
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

import DateRangeIcon from '@material-ui/icons/DateRange';

import DatePicker from '../../../components/DatePicker/DatePicker';
import Grid from '../../../components/Grid/Grid';
import InputChip from '../../../components/InputChip/InputChip';
import InputAdornment from '../../../components/Input/InputAdornment';
import TextInput from '../../../components/TextInput/TextInput';
import Typography from '../../../components/Typography/Typography';

const StyledDatePicker = styled(DatePicker)`
  > div {
    align-items: unset;
  }
`;

const StyledInputChip = styled(InputChip)`
  && > div {
    margin-top: 20px;
  }
`;

export function PatientMedicalHistorySubform(props) {
  const { formik } = props;
  const {
    values: { healthConditions, medications, treatments },
    setFieldValue
  } = formik;

  return (
    <React.Fragment>
      <Typography variant="title">Medical History</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Field
            name="healthConditions"
            render={({ field }) => (
              <StyledInputChip
                {...field}
                fullWidth
                id="healthCondition"
                label="Health Conditions"
                margin="normal"
                onAdd={healthCondition => {
                  const newHealthConditions = [
                    ...healthConditions,
                    healthCondition
                  ];

                  setFieldValue(field.name, newHealthConditions);
                }}
                onDelete={(healthCondition, index) => {
                  const newHealthConditions = [
                    ...healthConditions.slice(0, index),
                    ...healthConditions.slice(index + 1)
                  ];

                  setFieldValue(field.name, newHealthConditions);
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="medications"
            render={({ field }) => (
              <StyledInputChip
                {...field}
                fullWidth
                id="medications"
                label="Medications"
                margin="normal"
                onAdd={medication => {
                  const newMedications = [...medications, medication];

                  setFieldValue(field.name, newMedications);
                }}
                onDelete={(medication, index) => {
                  const newMedications = [
                    ...medications.slice(0, index),
                    ...medications.slice(index + 1)
                  ];

                  setFieldValue(field.name, newMedications);
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="treatments"
            render={({ field }) => (
              <StyledInputChip
                {...field}
                fullWidth
                id="treatments"
                label="Treatments"
                margin="normal"
                onAdd={treatment => {
                  const newTreatments = [...treatments, treatment];

                  setFieldValue(field.name, newTreatments);
                }}
                onDelete={(treatment, index) => {
                  const newTreatments = [
                    ...treatments.slice(0, index),
                    ...treatments.slice(index + 1)
                  ];

                  setFieldValue(field.name, newTreatments);
                }}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item>
          <Field
            name="diagnostic"
            render={({ field }) => (
              <TextInput
                {...field}
                id="diagnostic"
                label="Diagnostic"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="diagnosticDate"
            render={({ field }) => (
              <StyledDatePicker
                {...field}
                autoOk
                id="diagnosticDate"
                label="Diagnostic Date"
                margin="normal"
                onChange={date => setFieldValue(field.name, date)}
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
    </React.Fragment>
  );
}

PatientMedicalHistorySubform.propTypes = {
  formik: PropTypes.object.isRequired
};

export default PatientMedicalHistorySubform;
