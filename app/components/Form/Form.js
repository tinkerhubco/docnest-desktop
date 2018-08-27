import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { withFormik } from 'formik';

FormikForm.propTypes = {
  schema: PropTypes.object,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

FormikForm.defaultProps = {
  schema: {},
  isSubmitting: false,
  errors: {},
  touched: {},
  handleSubmit: () => {},
  handleChange: () => {},
  handleBlur: () => {}
};

function FormikForm(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    touched,
    schema
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(schema.fields).map(field => (
        // todo: create helper
        <div className="form-group" key={field}>
          <label htmlFor={field}>
            {schema.fields[field].label}
            <input
              id={field}
              name={field}
              type={schema.fields[field].type}
              value={schema.fields[field].value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>

          {errors[field] &&
            touched[field] && (
              <div className="invalid-feedback">{errors[field]}</div>
            )}
        </div>
      ))}
      <button
        type="submit"
        className="btn btn-outline-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'WAIT PLIZ' : 'CLICK ME'}
      </button>
    </form>
  );
}

export default withFormik({
  mapPropsToValues: props => ({
    email: props.schema.fields.email.value,
    username: props.schema.fields.username.value
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  }),
  handleSubmit: values => {
    console.log('values', values);
  }
})(FormikForm);
