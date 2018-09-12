import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import DateIcon from '@material-ui/icons/DateRange';

import Button from '../../../components/Button/Button';
import DatePicker from '../../../components/DatePicker/DatePicker';
import InputAdornment from '../../../components/Input/InputAdornment';
import TextField from '../../../components/FormField/TextField';

const StyledSearchTextField = styled(TextField)``;

const StyledFilterContainer = styled.div`
  display: flex;
  margin: 3em 0;
`;

const StyledSearchFilterContainer = styled.div`
  flex: 1;
`;

const StyledDatePicker = styled(DatePicker)`
  &&& > .MuiInput-root {
    align-items: unset;
  }
`;

AppointmentScheduleSearch.propTypes = {
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  onFromDateChange: PropTypes.func,
  onToDateChange: PropTypes.func,
  onSearchAppointment: PropTypes.func
};

AppointmentScheduleSearch.defaultProps = {
  fromDate: undefined,
  toDate: undefined,
  onFromDateChange: () => {},
  onToDateChange: () => {},
  onSearchAppointment: () => {}
};

export function AppointmentScheduleSearch(props) {
  const {
    fromDate,
    toDate,
    onFromDateChange,
    onToDateChange,
    onSearchAppointment
  } = props;
  return (
    <StyledFilterContainer>
      <StyledSearchFilterContainer>
        <StyledSearchTextField
          id="appointment-search-field"
          placeholder="Search Appointment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </StyledSearchFilterContainer>
      <StyledSearchFilterContainer>
        <StyledDatePicker
          autoOk
          value={fromDate}
          onChange={onFromDateChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DateIcon />
              </InputAdornment>
            )
          }}
        />
      </StyledSearchFilterContainer>
      <StyledSearchFilterContainer>
        <StyledDatePicker
          autoOk
          value={toDate}
          onChange={onToDateChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DateIcon />
              </InputAdornment>
            )
          }}
        />
      </StyledSearchFilterContainer>
      <StyledSearchFilterContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={onSearchAppointment}
        >
          Search Appointment
        </Button>
      </StyledSearchFilterContainer>
    </StyledFilterContainer>
  );
}

export default AppointmentScheduleSearch;
