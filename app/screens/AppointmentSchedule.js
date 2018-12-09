import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
    showCreateForm: false
  };

  handleClose = () => {
    return this.setState({ showCreateForm: false });
  };

  handleActionClick = () => {
    return this.setState({ showCreateForm: true });
  };

  render() {
    const { showCreateForm } = this.state;

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
        <Query
          query={gql`
            {
              appointments @client {
                id
                date
                name
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
                  value: 'date',
                  isDate: true,
                  dateFormat: 'HH:mm aa'
                }
              ]}
              rows={data.appointments}
            />
          )}
        </Query>

        <AppointmentScheduleCreateConnector>
          {({ appointmentScheduleCreator }) => (
            <AppointmentScheduleCreateForm
              open={showCreateForm}
              initialValues={{
                patient: '',
                schedule: new Date()
              }}
              onClose={this.handleClose}
              onSubmit={(values, formikBag) => {
                appointmentScheduleCreator.execute(
                  createConversions.formValuesToRequest(values)
                );

                formikBag.resetForm();

                this.handleClose();
              }}
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
