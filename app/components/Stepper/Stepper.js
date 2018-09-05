import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUIStepper from '@material-ui/core/Stepper';
import MUIStep from '@material-ui/core/Step';
import MUILabel from '@material-ui/core/StepLabel';

import Button from '../Button/Button';

const StyledStepperContainer = styled('div')``;

const StyledStepperContentContainer = styled('div')`
  margin: 1em;
`;
const StyledStepperActionContainer = styled('div')``;

export class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: -1,
      activeStepContext: undefined,
      activeStepCompleted: false,
      activeStepDisabled: false
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    this.setState({
      activeStepContext: steps[this.state.activeStep]
    });
  }

  getActiveStepContent() {
    const { activeStepContext } = this.state;
    return activeStepContext && activeStepContext.content;
  }

  updateActiveStep(isForward = true, onHandleButtonClick) {
    return isForward
      ? this.updateNextStep(onHandleButtonClick)
      : this.updateBackStep(onHandleButtonClick);
  }

  updateBackStep() {
    const { steps } = this.props;
    let newActiveStep = this.state.activeStep - 1;

    // Do not go down below -1 because clicking "next" will cause undesired index effect
    const hasExceededTheBackStepLimit = newActiveStep <= -1;

    if (hasExceededTheBackStepLimit) {
      // default index step
      newActiveStep = -1;
    }

    const newActiveStepContext = steps[newActiveStep];
    this.setState({
      activeStep: newActiveStep,
      activeStepContext: newActiveStepContext
    });
  }

  updateNextStep() {
    const { steps } = this.props;
    let newActiveStep = this.state.activeStep + 1;
    let isStepFinished = false;

    const hasExceededTheNextStepLimit = newActiveStep >= steps.length;

    if (hasExceededTheNextStepLimit) {
      // finish already, stop incremeting
      newActiveStep = steps.length;
      isStepFinished = true;
    }

    const newActiveStepContext = steps[newActiveStep];
    this.setState({
      activeStep: newActiveStep,
      activeStepContext: newActiveStepContext,
      activeStepCompleted: isStepFinished
    });
  }

  /**
   *  hmm probably this will be like a "callback" style?
   *  or will propagate an "event" after setting a new state.
   *  Use case: The consumer of the "Stepper" wants to run a function after stepping
   *  Use case: The consumer of the "Stepper" wants to know the progress
   *  Render props? Can be BUT it will cause inconsisties and break DRY principle
   * */

  handleButtonClick(isForward) {
    return () => {
      this.updateActiveStep(isForward);
    };
  }

  render() {
    const { activeStep } = this.state;
    const { steps, orientation } = this.props;
    const displayStepperTitle = (title, isOptional) =>
      isOptional ? [title, 'Optional'].join(' - ') : title;

    return (
      <StyledStepperContainer>
        <MUIStepper activeStep={activeStep} orientation={orientation}>
          {steps.map(step => (
            <MUIStep
              key={step.$$hash}
              completed={this.state.activeStepCompleted}
              disabled={this.state.activeStepDisabled}
            >
              <MUILabel>
                {displayStepperTitle(step.title, step.optional)}
              </MUILabel>
            </MUIStep>
          ))}
        </MUIStepper>
        <StyledStepperContentContainer>
          {this.getActiveStepContent()}
        </StyledStepperContentContainer>
        <StyledStepperActionContainer>
          <Button onClick={this.handleButtonClick(false)}>Back</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleButtonClick(true)}
          >
            Next
          </Button>
        </StyledStepperActionContainer>
      </StyledStepperContainer>
    );
  }
}

Stepper.propTypes = {
  steps: PropTypes.array,
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

Stepper.defaultProps = {
  steps: [],
  orientation: 'horizontal'
};

export default Stepper;
