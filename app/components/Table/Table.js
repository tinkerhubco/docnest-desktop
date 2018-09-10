import React from 'react';
import PropTypes from 'prop-types';
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
  renderBodyRow: PropTypes.func,
  renderBodyRowCell: PropTypes.func
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
  renderBodyRow: (columns, rows, rowOptions, renderBodyRowCell) =>
    rows.map(row => (
      <MUITableRow
        key={row.id}
        {...rowOptions}
        onClick={() => rowOptions.onClick(row)}
      >
        {renderBodyRowCell(columns, row)}
      </MUITableRow>
    )),
  renderBodyRowCell: (columns, row) =>
    columns.map(column => (
      <TableCell {...column} numeric={column.numeric} value={row[column.value]}>
        {row[column.value]}
      </TableCell>
    ))
};

/**
 * Todos:
 * Support for schema based data x
 * Enhance schema based table (wip) x
 * Support for customize TableCell (can be a button) x
 * Support for ordering/sorting
 * Support for events? x
 * Support for Table colors
 */

export function Table(props) {
  const {
    rowOptions,
    columns,
    rows,
    renderHead,
    renderBodyRow,
    renderBodyRowCell
  } = props;

  return (
    <MUITable>
      <MUITableHead>
        <MUITableRow>{renderHead(columns)}</MUITableRow>
      </MUITableHead>
      <MUITableBody>
        {renderBodyRow(columns, rows, rowOptions, renderBodyRowCell)}
      </MUITableBody>
    </MUITable>
  );
}

export default Table;
