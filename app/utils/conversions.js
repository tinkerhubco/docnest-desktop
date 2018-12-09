// TODO: Currying

export const appointmentScheduleCreateConversions = {
  formValuesToRequest: values => {
    // conversions here
    return {
      ...values,
      date: values.schedule.toJSON(),
      name: values.patient
    };
  }
};

export const appointmentScheduleSearchConversions = {
  formValuesToRequest: values => {
    // conversions here
    return values;
  }
};

export const patientDetailsConversions = {
  responseToFormValues: response => {
    // conversions here
    return response;
  },
  formValuesToRequest: values => {
    // conversions here
    return {
      ...values,
      birthdate: values.birthdate.toJSON(),
      diagnosticDate: values.diagnosticDate.toJSON()
    };
  }
};

export const patientSearchConversions = {
  formValuesToRequest: values => {
    // conversions here
    return values;
  }
};

export default {
  appointmentScheduleSearchConversions,
  patientDetailsConversions,
  patientSearchConversions
};
