import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

let nextAppointmentId = 0;
let nextPatientId = 0;

export const client = new ApolloClient({
  clientState: {
    defaults: {
      appointments: [],
      patients: []
    },
    // TODO: Extract resolvers to a separate module
    resolvers: {
      Mutation: {
        addAppointment: (_, variables, { cache }) => {
          const { appointments } = cache.readQuery({
            query: gql`
              {
                appointments @client {
                  id
                  date
                  name
                }
              }
            `
          });

          nextAppointmentId += 1;
          const newAppointment = {
            ...variables,
            id: nextAppointmentId,
            __typename: 'Appointment'
          };

          const data = {
            appointments: [...appointments, newAppointment]
          };

          cache.writeData({ data });

          return newAppointment;
        },
        addPatient: (_, variables, { cache }) => {
          const { patients } = cache.readQuery({
            query: gql`
              {
                patients @client {
                  id
                  address
                  birthdate
                  bloodType
                  diagnostic
                  diagnosticDate
                  emergencyContact
                  firstName
                  gender
                  healthCard
                  healthConditions
                  height
                  lastName
                  medications
                  middleName
                  phone
                  treatments
                  weight
                  created
                }
              }
            `
          });

          nextPatientId += 1;
          const newPatient = {
            ...variables,
            id: nextPatientId,
            created: new Date().toJSON(),
            __typename: 'Patient'
          };

          const data = {
            patients: [...patients, newPatient]
          };

          cache.writeData({ data });

          return newPatient;
        }
      }
    }
  },
  // TODO: Inject config via environment variables
  uri: 'http://localhost:8080/graphql'
});

export default client;
