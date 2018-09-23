import React from 'react';
import styled from 'styled-components';

import SaveIcon from '@material-ui/icons/Save';

import PatientDemographicsForm from './patientInformation/PatientDemographicsForm';
import PatientMedicalForm from './patientInformation/PatientMedicalForm';

import MainContent from '../components/MainContent/MainContent';

const StyledFormSectionContainer = styled.div`
  margin: 24px 0 12px;
`;

export class PatientInformation extends React.Component {
  handleActionClick = () => {
    console.log('save');
  };

  render() {
    return (
      <MainContent
        title="Patient Information"
        buttonIcon={<SaveIcon />}
        onActionClick={this.handleActionClick}
      >
        <StyledFormSectionContainer>
          <PatientDemographicsForm />
        </StyledFormSectionContainer>
        <StyledFormSectionContainer>
          <PatientMedicalForm />
        </StyledFormSectionContainer>
      </MainContent>
    );
  }
}

export default PatientInformation;
