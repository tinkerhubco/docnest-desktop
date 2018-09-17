import React from 'react';
import styled from 'styled-components';

import PatientDemographicsForm from './patientInformation/PatientDemogprahicsForm';
import PatientMedicalForm from './patientInformation/PatientMedicalForm';

import MainContent from '../components/MainContent/MainContent';

const StyledSectionContainer = styled.div``;

export class PatientInformation extends React.Component {
  state = {};

  handleActionClick = () => {};

  render() {
    return (
      <MainContent
        title="Patient Information"
        onActionClick={this.handleActionClick}
      >
        <StyledSectionContainer>
          <PatientDemographicsForm />
        </StyledSectionContainer>
        <StyledSectionContainer>
          <PatientMedicalForm />
        </StyledSectionContainer>
      </MainContent>
    );
  }
}

export default PatientInformation;
