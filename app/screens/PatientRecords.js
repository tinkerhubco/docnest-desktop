import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import MainContent from '../components/MainContent/MainContent';
import Table from '../components/Table/Table';

import PatientSearchConnector from './patientRecords/PatientSearchConnector';
import PatientSearchForm from './patientRecords/PatientSearchForm';

import { Redirect } from '../Routes';
import { patientSearchConversions as conversions } from '../utils/conversions';

export class PatientRecords extends React.Component {
  state = {
    redirectTo: undefined
  };

  handleActionClick = () => {
    this.setState({ redirectTo: `patients/add` });
  };

  render() {
    const { redirectTo } = this.state;

    return (
      <PatientSearchConnector>
        {({ patientSearchUpdater }) => (
          <PatientSearchForm
            initialValues={{
              search: ''
            }}
            onSubmit={values =>
              patientSearchUpdater.execute(
                conversions.formValuesToRequest(values)
              )
            }
          >
            {({ form }) => (
              <MainContent
                title="Patient Records"
                onActionClick={this.handleActionClick}
              >
                <Redirect to={redirectTo} />
                {form}
                <Query
                  query={gql`
                    {
                      patients @client {
                        id
                        firstName
                        lastName
                        created
                      }
                    }
                  `}
                >
                  {({ data }) => (
                    <Table
                      rowOptions={{
                        hover: true,
                        onClick: row => {
                          console.log('row', row);
                        }
                      }}
                      columns={[
                        {
                          key: 'firstName',
                          label: 'First name',
                          value: 'firstName'
                        },
                        {
                          key: 'lastName',
                          label: 'Last name',
                          value: 'lastName'
                        },
                        {
                          key: 'created',
                          label: 'Created',
                          value: 'created',
                          isDate: true,
                          dateFormat: 'MM/dd/yyyy'
                        }
                      ]}
                      rows={data.patients}
                    />
                  )}
                </Query>
              </MainContent>
            )}
          </PatientSearchForm>
        )}
      </PatientSearchConnector>
    );
  }
}

export default PatientRecords;
