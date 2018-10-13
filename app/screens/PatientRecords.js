import React from 'react';

import MainContent from '../components/MainContent/MainContent';
import Table from '../components/Table/Table';

import PatientSearchConnector from './patientRecords/PatientSearchConnector';
import PatientSearchForm from './patientRecords/PatientSearchForm';

import { Redirect } from '../Routes';
import { patientSearchConversions as conversions } from '../utils/conversions';

export class PatientRecords extends React.Component {
  state = {
    tableOptions: {
      rowOptions: {
        hover: true,
        onClick: row => {
          console.log('row', row);
        }
      },
      columns: [
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
          value: 'date',
          isDate: true,
          dateFormat: 'MM/dd/yyyy'
        }
      ]
    },
    tableData: [
      {
        id: 1,
        firstName: 'Juan',
        lastName: 'Dela Cruz',
        date: '2018-08-25T02:44:44Z'
      }
    ],
    redirectTo: undefined
  };

  handleActionClick = () => {
    this.setState({ redirectTo: `patients/1` });
  };

  render() {
    const {
      tableOptions: { rowOptions, columns },
      tableData
    } = this.state;
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
                <Redirect to={this.state.redirectTo} />
                {form}
                <Table
                  rowOptions={rowOptions}
                  columns={columns}
                  rows={tableData}
                />
              </MainContent>
            )}
          </PatientSearchForm>
        )}
      </PatientSearchConnector>
    );
  }
}

export default PatientRecords;
