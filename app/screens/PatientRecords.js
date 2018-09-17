import React from 'react';

import MainContent from '../components/MainContent/MainContent';
import Table from '../components/Table/Table';

import PatientRecordsSearch from './patientRecords/PatientRecordsSearch';

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
    ]
  };

  handleActionClick = () => {};

  render() {
    const {
      tableOptions: { rowOptions, columns },
      tableData
    } = this.state;
    return (
      <MainContent
        title="Patient Records"
        onActionClick={this.handleActionClick}
      >
        <PatientRecordsSearch />
        <Table rowOptions={rowOptions} columns={columns} rows={tableData} />
      </MainContent>
    );
  }
}

export default PatientRecords;
