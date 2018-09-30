import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Grid from '../../components/Grid/Grid';
import InputAdornment from '../../components/Input/InputAdornment';
import TextInput from '../../components/TextInput/TextInput';

const StyledForm = styled(Form)`
  display: flex;
  margin: 2.5em 0 1.5em;
`;

export function PatientRecordsSearch() {
  return (
    <Formik
      initialValues={{
        search: '',
        fromDate: new Date(),
        toDate: new Date()
      }}
      onSubmit={values => console.log(values)}
      render={({ handleSubmit }) => (
        <StyledForm>
          <Grid container spacing={24}>
            <Grid item>
              <Field
                name="search"
                render={({ field }) => (
                  <TextInput
                    {...field}
                    id="patient-search-field"
                    placeholder="Search Patient"
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
              <Button
                variant="contained"
                color="primary"
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

export default PatientRecordsSearch;
