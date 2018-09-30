import React from 'react';
import styled from 'styled-components';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SaveIcon from '@material-ui/icons/Save';

import PatientDemographicsForm from './patientInformation/PatientDemographicsForm';
import PatientMedicalForm from './patientInformation/PatientMedicalForm';
import MainContent from '../components/MainContent/MainContent';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tab/Tab';

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

export class PatientDetails extends React.Component {
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
    const { tabIndex } = this.state;

    return (
      <MainContent
        title="Patient Information"
        buttonIcon={<SaveIcon />}
        onActionClick={this.handleActionClick}
      >
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

        {tabIndex === TABS.DEMOGRAPHICS && (
          <StyledFormSectionContainer>
            <PatientDemographicsForm />
          </StyledFormSectionContainer>
        )}

        {tabIndex === TABS.MEDICAL_HISTORY && (
          <StyledFormSectionContainer>
            <PatientMedicalForm />
          </StyledFormSectionContainer>
        )}
      </MainContent>
    );
  }
}

export default PatientDetails;
