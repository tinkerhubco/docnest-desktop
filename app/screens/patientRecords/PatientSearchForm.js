import React from 'react';
import PropTypes from 'prop-types';
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

export function PatientSearchForm(props) {
  const { initialValues, onSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        // TODO: encapsulate attaching state handling
        // upon submission within the form. The details/create
        // component just `addHandlers` to it's mutation.
        onSubmit(values);
      }}
      render={formikProps => {
        const { handleSubmit } = formikProps;

        const form = (
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
        );

        return props.children({
          form,
          formik: formikProps
        });
      }}
    />
  );
}

PatientSearchForm.propTypes = {
  children: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PatientSearchForm;
