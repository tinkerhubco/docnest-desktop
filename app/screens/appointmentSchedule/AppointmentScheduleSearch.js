import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import DateIcon from '@material-ui/icons/DateRange';

import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import Form from '../../components/Form/Form';
import Grid from '../../components/Grid/Grid';
import InputAdornment from '../../components/Input/InputAdornment';
import TextField from '../../components/FormField/TextField';

const StyledSearchTextField = styled(TextField)``;

const StyledForm = styled(Form)`
  display: flex;
  margin: 2.5em 0 1.5em;
`;

const StyledDatePicker = styled(DatePicker)`
  > div {
    align-items: unset;
  }
`;

export function AppointmentScheduleSearch() {
  return (
    <Formik
      initialValues={{
        search: '',
        fromDate: new Date(),
        toDate: new Date()
      }}
      onSubmit={values => console.log(values)}
      render={({ handleSubmit, setFieldValue }) => (
        <StyledForm>
          <Grid container spacing={24}>
            <Grid item>
              <Field
                name="search"
                render={({ field }) => (
                  <StyledSearchTextField
                    {...field}
                    id="appointment-search-field"
                    placeholder="Search Appointment"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Field
                name="fromDate"
                render={({ field }) => (
                  <StyledDatePicker
                    {...field}
                    onChange={date => setFieldValue('fromDate', date)}
                    autoOk
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DateIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Field
                name="toDate"
                render={({ field }) => (
                  <StyledDatePicker
                    {...field}
                    onChange={date => setFieldValue('toDate', date)}
                    autoOk
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DateIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </StyledForm>
      )}
    />
  );
}

export default AppointmentScheduleSearch;
