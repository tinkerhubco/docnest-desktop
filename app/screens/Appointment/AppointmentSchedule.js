import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import Dialog from '../../components/Dialog/Dialog';
import TextField from '../../components/FormField/TextField';
import Table from '../../components/Table/Table';

import MainContent from '../MainContent';

const StyledSearchTextField = styled(TextField)`
  &&& {
    margin: 1em 0;
  }
`;

export default class AppointmentSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {
        schedule: new Date()
      },
      open: false,
      tableOptions: {
        rowOptions: {
          hover: true,
          onClick: row => {
            console.log('row', row);
          }
        },
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
            dateFormat: 'HH:ss aa'
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

  appointmentAddHandler() {
    return () => {
      const tableData = [...this.state.tableData];
      const dateNow = new Date();
      tableData.push({
        id: dateNow.getMilliseconds(),
        name: 'Test',
        date: dateNow,
        time: dateNow
      });
      this.setState({ tableData, open: false });
    };
  }

  handleClose = () => {
    return this.setState({ open: false });
  };

  handleActionClick = () => {
    return this.setState({ open: true });
  };

  render() {
    const {
      tableOptions: { rowOptions, columns },
      appointment: { schedule },
      tableData,
      open
    } = this.state;
    return (
      <MainContent
        title="Appointment Schedule"
        onActionClick={this.handleActionClick()}
      >
        <StyledSearchTextField
          id="appointment-search-field"
          fullWidth
          placeholder="Search Appointment"
        />
        <Table rowOptions={rowOptions} columns={columns} rows={tableData} />
        <Dialog
          open={open}
          onClose={this.handleClose}
          title="Add Appointment"
          subtitle="Patient appointment schedule"
          dialogContentNodeChildren={
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="appointmentName"
                label="Appointment Name"
                fullWidth
              />
              <DateTimePicker
                label="Appointment Schedule"
                showTodayButton
                todayLabel="Now"
                value={schedule}
                onChange={() => {}}
              />
            </div>
          }
          dialogActionNodeChildren={
            <div>
              <Button onClick={this.handleClose()} variant="contained">
                Cancel
              </Button>
              <Button
                onClick={this.appointmentAddHandler()}
                color="primary"
                variant="contained"
              >
                Add Appointment
              </Button>
            </div>
          }
        />
      </MainContent>
    );
  }
}
