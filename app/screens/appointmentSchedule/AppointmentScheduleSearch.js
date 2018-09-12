import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import DateIcon from '@material-ui/icons/DateRange';

import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import Form from '../../components/Form/Form';
import InputAdornment from '../../components/Input/InputAdornment';
import TextField from '../../components/FormField/TextField';

const StyledSearchTextField = styled(TextField)``;

const StyledFilterContainer = styled.div`
  display: flex;
  margin: 3em 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const StyledSearchFilterContainer = styled.div`
  flex: 1;
`;

const StyledDatePicker = styled(DatePicker)`
  &&& > .MuiInput-root {
    align-items: unset;
  }
`;

export function AppointmentScheduleSearch() {
  return (
    <StyledFilterContainer>
      <Formik
        initialValues={{
          search: '',
          fromDate: new Date(),
          toDate: new Date()
        }}
        onSubmit={values => console.log(values)}
        render={({ handleSubmit, setFieldValue }) => (
          <StyledForm>
            <StyledSearchFilterContainer>
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
            </StyledSearchFilterContainer>
            <StyledSearchFilterContainer>
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
            </StyledSearchFilterContainer>
            <StyledSearchFilterContainer>
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
            </StyledSearchFilterContainer>
            <StyledSearchFilterContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Search Appointment
              </Button>
            </StyledSearchFilterContainer>
          </StyledForm>
        )}
      />
    </StyledFilterContainer>
  );
}

export default AppointmentScheduleSearch;
