import React from 'react';
import PropTypes from 'prop-types';

import MUIPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MUITimePicker from 'material-ui-pickers/TimePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

TimePicker.propTypes = {
  ampm: PropTypes.bool,
  autoOk: PropTypes.bool,
  clearable: PropTypes.bool,
  label: PropTypes.string,
  showTodayButton: PropTypes.bool,
  todayLabel: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};

TimePicker.defaultProps = {
  value: new Date(), // oohhhh side-effect?
  onChange: () => {}
};

function TimePicker (props) {
  return (
    <MUIPickersUtilsProvider utils={DateFnsUtils}>
      <MUITimePicker {...props} />
    </MUIPickersUtilsProvider>
  )
}

export { TimePicker };
export default TimePicker;
