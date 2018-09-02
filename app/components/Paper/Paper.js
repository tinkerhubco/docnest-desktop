import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUIPaper from '@material-ui/core/Paper';

Paper.propTypes = {
  elevation: PropTypes.number
};

Paper.defaultProps = {
  elevation: 2
};

function Paper(props) {
  return <MUIPaper {...props} />;
}

const StyledPaper = styled(Paper)``;

export { StyledPaper as Paper };

export default StyledPaper;
