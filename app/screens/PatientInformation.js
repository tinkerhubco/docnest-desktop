import React from 'react';
import styled from 'styled-components';

import SaveIcon from '@material-ui/icons/Save';

import PatientDemographicsForm from './patientInformation/PatientDemographicsForm';
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
        buttonIcon={<SaveIcon />}
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
