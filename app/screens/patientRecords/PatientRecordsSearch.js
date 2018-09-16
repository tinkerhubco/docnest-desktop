import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

import Button from '../../components/Button/Button';
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

export function PatientRecordsSearch() {
  return (
    <StyledFilterContainer>
      <Formik
        initialValues={{
          search: '',
          fromDate: new Date(),
          toDate: new Date()
        }}
        onSubmit={values => console.log(values)}
        render={({ handleSubmit }) => (
          <StyledForm>
            <StyledSearchFilterContainer>
              <Field
                name="search"
                render={({ field }) => (
                  <StyledSearchTextField
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
            </StyledSearchFilterContainer>
            <StyledSearchFilterContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Search Patient Record
              </Button>
            </StyledSearchFilterContainer>
          </StyledForm>
        )}
      />
    </StyledFilterContainer>
  );
}

export default PatientRecordsSearch;
