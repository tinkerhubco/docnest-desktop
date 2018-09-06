import React from 'react';

import Table from '../../components/Table/Table';
import Paper from '../../components/Paper/Paper';

export default class AppointmentSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableOptions: {
        columns: [
          {
            key: 'appointmentName',
            label: 'Appointment Schedule',
            value: 'name'
          },
          {
            key: 'appointmentDate',
            label: 'Date',
            value: 'date',
            isDate: true,
            dateFormat: 'MM/dd/yyyy'
          },
          {
            key: 'appointmentTime',
            label: 'Time',
            value: 'time',
            isDate: true,
            dateFormat: 'MM/dd/yyyy'
          }
        ]
      },
      tableData: [
        {
          id: 1,
          name: 'Test',
          date: '2018-08-25T02:44:44Z',
          time: '2018-08-25T02:44:44Z'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Paper>
          <Table
            rowOptions={this.state.tableOptions.rowOptions}
            columns={this.state.tableOptions.columns}
            rows={this.state.tableData}
          />
        </Paper>
      </div>
    );
  }
}
