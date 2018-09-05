import React from 'react';
import PropTypes from 'prop-types';
import MUIDateTimePicker from 'material-ui-pickers/DateTimePicker';
import MUIPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

DateTimePicker.propTypes = {
  ampm: PropTypes.bool,
  autoOk: PropTypes.bool,
  clearable: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disablePast: PropTypes.bool,
  label: PropTypes.string,
  showTodayButton: PropTypes.bool,
  todayLabel: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};

DateTimePicker.defaultProps = {
  value: new Date(), // oohhhh side-effect?
  onChange: () => {}
};

export function DateTimePicker(props) {
  return (
    <MUIPickersUtilsProvider utils={DateFnsUtils}>
      <MUIDateTimePicker {...props} />
    </MUIPickersUtilsProvider>
  );
}

export default DateTimePicker;
