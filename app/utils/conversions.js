// TODO: Currying

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
    return values;
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
