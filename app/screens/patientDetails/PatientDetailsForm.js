import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import Tabs from '../../components/Tabs/Tabs';
import Tab from '../../components/Tab/Tab';
import Form from '../../components/Form/Form';
import PatientDemographicsSubform from './patientDetailsForm/PatientDemographicsSubform';
import PatientMedicalHistorySubform from './patientDetailsForm/PatientMedicalHistorySubform';

const StyledFormSectionContainer = styled.div`
  margin: 24px 0 12px;
`;

const StyledTabsContainer = styled.div`
  margin: 8px 0 12px;
`;

const TABS = {
  DEMOGRAPHICS: 0,
  MEDICAL_HISTORY: 1
};

export class PatientDetailsForm extends React.Component {
  state = {
    tabIndex: 0
  };

  handleActionClick = () => {
    console.log('save');
  };

  handleTabsChange = (event, tabIndex) => {
    this.setState({
      tabIndex
    });
  };

  render() {
    const { initialValues, onSubmit } = this.props;
    const { tabIndex } = this.state;

    return (
      <Formik
        initialValues={initialValues}
        // TODO: Validation - schema or use validate?
        onSubmit={values => {
          // TODO: encapsulate attaching state handling
          // upon submission within the form. The details/create
          // component just `addHandlers` to it's mutation.
          onSubmit(values);
        }}
        render={formikProps => {
          const form = (
            <React.Fragment>
              <StyledTabsContainer>
                <Tabs
                  fullWidth
                  value={tabIndex}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleTabsChange}
                >
                  <Tab icon={<AccountBoxIcon />} label="Demographics" />
                  <Tab icon={<LocalHospitalIcon />} label="Medical History" />
                </Tabs>
              </StyledTabsContainer>
              <Form>
                {tabIndex === TABS.DEMOGRAPHICS && (
                  <StyledFormSectionContainer>
                    <PatientDemographicsSubform formik={formikProps} />
                  </StyledFormSectionContainer>
                )}

                {tabIndex === TABS.MEDICAL_HISTORY && (
                  <StyledFormSectionContainer>
                    <PatientMedicalHistorySubform formik={formikProps} />
                  </StyledFormSectionContainer>
                )}
              </Form>
            </React.Fragment>
          );

          return this.props.children({
            form,
            formik: formikProps
          });
        }}
      />
    );
  }
}

PatientDetailsForm.propTypes = {
  children: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PatientDetailsForm;
