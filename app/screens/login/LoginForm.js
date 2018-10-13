import React from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';

import { Redirect } from '../../Routes';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import TextInput from '../../components/TextInput/TextInput';
import Paper from '../../components/Paper/Paper';

const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: auto;
  margin: 0;
  padding: 20px 40px 48px;
`;

const StyledButton = styled(Button)`
  && {
    margin: 36px 0px 0px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function LoginForm() {
  return (
    <StyledPaper>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values, { setFieldValue }) => {
          setFieldValue('redirectTo', '/');
        }}
        render={({ values }) => (
          <StyledForm>
            <Redirect to={values.redirectTo} />
            <Field
              name="email"
              render={({ field }) => (
                <TextInput
                  {...field}
                  id="email"
                  label="Email"
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <Field
              name="password"
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  id="password"
                  label="Password"
                  margin="normal"
                  fullWidth
                />
              )}
            />
            <StyledButton
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </StyledButton>
          </StyledForm>
        )}
      />
    </StyledPaper>
  );
}

export default LoginForm;
