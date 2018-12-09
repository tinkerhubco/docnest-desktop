import React from 'react';
import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';

import Button from '../../components/Button/Button';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import Dialog from '../../components/Dialog/Dialog';
import TextInput from '../../components/TextInput/TextInput';

export function AppointmentScheduleCreateForm(props) {
  const { initialValues, open, onClose, onSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikBag) => {
        // TODO: encapsulate attaching state handling
        // upon submission within the form. The details/create
        // component just `addHandlers` to it's mutation.
        onSubmit(values, formikBag);
      }}
      render={formikProps => {
        const { handleSubmit, setFieldValue } = formikProps;

        const form = (
          <Dialog
            open={open}
            onClose={onClose}
            title="Add Appointment"
            subtitle="Patient appointment schedule"
            dialogContentNodeChildren={
              <React.Fragment>
                <Field
                  name="patient"
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      autoFocus
                      margin="dense"
                      id={field.name}
                      label="Patient Name"
                      fullWidth
                    />
                  )}
                />

                <Field
                  name="schedule"
                  render={({ field }) => (
                    <DateTimePicker
                      {...field}
                      label="Appointment Schedule"
                      showTodayButton
                      todayLabel="Now"
                      onChange={date => setFieldValue(field.name, date)}
                    />
                  )}
                />
              </React.Fragment>
            }
            dialogActionNodeChildren={
              <React.Fragment>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                >
                  Add Appointment
                </Button>
              </React.Fragment>
            }
          />
        );

        return props.children({
          form,
          formik: formikProps
        });
      }}
    />
  );
}

AppointmentScheduleCreateForm.propTypes = {
  children: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool
};

export default AppointmentScheduleCreateForm;
