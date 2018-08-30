import React from 'react';
import PropTypes from 'prop-types';

import MUIPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MUIDatePicker from 'material-ui-pickers/DatePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};

DatePicker.defaultProps = {
  value: new Date(), // oohhhh side-effect?
  onChange: () => {}
};

function DatePicker (props) {
  return (
    <MUIPickersUtilsProvider utils={DateFnsUtils}>
      <MUIDatePicker {...props} />
    </MUIPickersUtilsProvider>
  )
}

export { DatePicker };
export default DatePicker;
