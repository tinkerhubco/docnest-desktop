import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export function PatientCreateConnector(props) {
  return (
    <Mutation
      mutation={gql`
        mutation AddPatient(
          $address: String!
          $birthdate: String!
          $bloodType: String!
          $diagnostic: String!
          $diagnosticDate: String!
          $emergencyContact: String!
          $firstName: String!
          $gender: String!
          $healthCard: String!
          $healthConditions: [String]!
          $height: String!
          $lastName: String!
          $medications: [String]!
          $middleName: String!
          $phone: String!
          $treatments: [String]!
          $weight: String!
        ) {
          addPatient(
            address: $address
            birthdate: $birthdate
            bloodType: $bloodType
            diagnostic: $diagnostic
            diagnosticDate: $diagnosticDate
            emergencyContact: $emergencyContact
            firstName: $firstName
            gender: $gender
            healthCard: $healthCard
            healthConditions: $healthConditions
            height: $height
            lastName: $lastName
            medications: $medications
            middleName: $middleName
            phone: $phone
            treatments: $treatments
            weight: $weight
          ) @client
        }
      `}
    >
      {addPatient => {
        return props.children({
          patientCreator: {
            execute: draft => {
              addPatient({
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

PatientCreateConnector.propTypes = {
  children: PropTypes.func.isRequired
};

export default PatientCreateConnector;
