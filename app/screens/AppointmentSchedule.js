import React from 'react';

import MainContent from '../components/MainContent/MainContent';
import Table from '../components/Table/Table';

import AppointmentScheduleCreateConnector from './appointmentSchedule/AppointmentScheduleCreateConnector';
import AppointmentScheduleCreateForm from './appointmentSchedule/AppointmentScheduleCreateForm';
import AppointmentScheduleSearchConnector from './appointmentSchedule/AppointmentScheduleSearchConnector';
import AppointmentScheduleSearchForm from './appointmentSchedule/AppointmentScheduleSearchForm';

import {
  appointmentScheduleCreateConversions as createConversions,
  appointmentScheduleSearchConversions as searchConversions
} from '../utils/conversions';

export class AppointmentSchedule extends React.Component {
  state = {
    showCreateForm: false,
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

  handleAppointmentAdd = () => {
    const tableData = [...this.state.tableData];
    const dateNow = new Date();

    tableData.push({
      id: dateNow.getMilliseconds(),
      name: 'Test',
      date: dateNow,
      time: dateNow
    });

    this.setState({ tableData, showCreateForm: false });
  };

  handleClose = () => {
    return this.setState({ showCreateForm: false });
  };

  handleActionClick = () => {
    return this.setState({ showCreateForm: true });
  };

  render() {
    const {
      tableOptions: { rowOptions, columns },
      tableData,
      showCreateForm
    } = this.state;

    return (
      <MainContent
        title="Appointment Schedule"
        onActionClick={this.handleActionClick}
      >
        <AppointmentScheduleSearchConnector>
          {({ appointmentScheduleSearchUpdater }) => (
            <AppointmentScheduleSearchForm
              initialValues={{
                search: '',
                fromDate: new Date(),
                toDate: new Date()
              }}
              onSubmit={values =>
                appointmentScheduleSearchUpdater.execute(
                  searchConversions.formValuesToRequest(values)
                )
              }
            >
              {({ form }) => form}
            </AppointmentScheduleSearchForm>
          )}
        </AppointmentScheduleSearchConnector>
        <Table rowOptions={rowOptions} columns={columns} rows={tableData} />
        <AppointmentScheduleCreateConnector>
          {({ appointmentScheduleCreator }) => (
            <AppointmentScheduleCreateForm
              open={showCreateForm}
              initialValues={{
                patient: '',
                schedule: new Date()
              }}
              onClose={this.handleClose}
              onSubmit={values =>
                appointmentScheduleCreator.execute(
                  createConversions.formValuesToRequest(values)
                )
              }
            >
              {({ form }) => form}
            </AppointmentScheduleCreateForm>
          )}
        </AppointmentScheduleCreateConnector>
      </MainContent>
    );
  }
}

export default AppointmentSchedule;
