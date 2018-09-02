import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MUITable from '@material-ui/core/Table';
import MUITableHead from '@material-ui/core/TableHead';
import MUITableBody from '@material-ui/core/TableBody';
import MUITableRow from '@material-ui/core/TableRow';

import TableCell from './TableCell';

Table.propTypes = {
  rowOptions: PropTypes.object,
  columns: PropTypes.array,
  rows: PropTypes.array,
  renderHead: PropTypes.func,
  renderBody: PropTypes.func
};

Table.defaultProps = {
  rowOptions: {
    hover: false
  },
  columns: [],
  rows: [],
  renderHead: columns =>
    columns.map(({ key, numeric, label, value }) => (
      <TableCell key={key} numeric={numeric} value={value || label}>
        {label || value}
      </TableCell>
    )),
  renderBody: ({ columns, rows, rowOptions }) =>
    rows.map(row => (
      <MUITableRow key={row.id} {...rowOptions}>
        {columns.map(column => (
          <TableCell
            {...column}
            numeric={column.numeric}
            value={row[column.value]}
          >
            {row[column.value]}
          </TableCell>
        ))}
      </MUITableRow>
    ))
};

/**
 * Todos:
 * Support for schema based data x
 * Enhance schema based table (wip) x
 * Support for customize TableCell (can be a button) x
 * Support for ordering/sorting
 * Support for events?
 * Support for Table colors
 */

function Table(props) {
  const { rowOptions, columns, rows, renderHead, renderBody } = props;

  return (
    <MUITable>
      <MUITableHead>
        <MUITableRow>{renderHead(columns)}</MUITableRow>
      </MUITableHead>
      <MUITableBody>{renderBody({ columns, rows, rowOptions })}</MUITableBody>
    </MUITable>
  );
}

const StyledTable = styled(Table)``;

export { StyledTable as Table };
export default StyledTable;
