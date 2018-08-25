import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import format from 'date-fns/format';

import MUITableCell from '@material-ui/core/TableCell';

import Button from '../Button/Button';

TableCell.propTypes = {
  children: PropTypes.node,
  dateFormat: PropTypes.string,
  isDate: PropTypes.bool,
  isButton: PropTypes.bool,
  numeric: PropTypes.bool,
  ownProps: PropTypes.object,
  rawValue: PropTypes.string,
  value: PropTypes.any
};

TableCell.defaultProps = {
  children: undefined,
  dateFormat: '',
  isDate: false,
  isButton: false,
  numeric: false,
  ownProps: {},
  rawValue: '',
  value: ''
};

/**
 * Should we create different Cell for this?
 * example: <TableDateCell /> and <TableButtonCell />
 */

function TableCell(props) {
  const {
    children,
    dateFormat,
    isDate,
    isButton,
    numeric,
    ownProps,
    rawValue,
    value
  } = props;
  if (isDate) {
    const date = format(value, dateFormat);
    return <MUITableCell numeric={numeric}>{date}</MUITableCell>;
  } else if (isButton) {
    // For this to send an event.. Should we run it through Redux?
    // Create a "special" event for the button clicked in the table?
    // Or pass the event handler?
    return (
      <MUITableCell numeric={numeric}>
        <Button {...ownProps}>{rawValue}</Button>
      </MUITableCell>
    );
  }
  return <MUITableCell numeric={numeric}>{children}</MUITableCell>;
}

const StyledTableCell = styled(TableCell)``;

export { StyledTableCell as TableCell };
export default TableCell;
