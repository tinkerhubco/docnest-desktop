import React from 'react';
import PropTypes from 'prop-types';
import MUITableCell from '@material-ui/core/TableCell';

import { TableCellButton } from './TableCellButton';
import { TableCellDate } from './TableCellDate';

TableCell.propTypes = {
  children: PropTypes.node,
  dateFormat: PropTypes.string,
  isDate: PropTypes.bool,
  isButton: PropTypes.bool,
  numeric: PropTypes.bool,
  buttonProps: PropTypes.object,
  value: PropTypes.any
};

TableCell.defaultProps = {
  children: undefined,
  dateFormat: undefined,
  isDate: false,
  isButton: false,
  numeric: false,
  buttonProps: undefined,
  value: ''
};

export function TableCell(props) {
  const {
    children,
    dateFormat,
    isDate,
    isButton,
    numeric,
    buttonProps,
    value
  } = props;
  if (isDate) {
    return (
      <TableCellDate numeric={numeric} value={value} dateFormat={dateFormat} />
    );
  } else if (isButton) {
    // For this to send an event.. Should we run it through Redux?
    // Create a "special" event for the button clicked in the table?
    // Or pass the event handler?
    return <TableCellButton numeric={numeric} buttonProps={buttonProps} />;
  }
  return <MUITableCell numeric={numeric}>{children}</MUITableCell>;
}

export default TableCell;
