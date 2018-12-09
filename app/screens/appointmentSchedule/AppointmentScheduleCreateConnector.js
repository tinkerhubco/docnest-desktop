import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export function AppointmentScheduleCreateConnector(props) {
  return (
    <Mutation
      mutation={gql`
        mutation AddAppointment($date: String!, $name: String!) {
          addAppointment(date: $date, name: $name) @client
        }
      `}
    >
      {addAppointment => {
        return props.children({
          appointmentScheduleCreator: {
            execute: draft => {
              addAppointment({
                variables: {
                  ...draft
                }
              });
            }
          }
        });
      }}
    </Mutation>
  );
}

AppointmentScheduleCreateConnector.propTypes = {
  children: PropTypes.func.isRequired
};

export default AppointmentScheduleCreateConnector;
