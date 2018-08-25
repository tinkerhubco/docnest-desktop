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
  rows: PropTypes.array
};

Table.defaultProps = {
  rowOptions: {
    hover: false
  },
  columns: [],
  rows: []
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
  const { rowOptions, columns, rows } = props;

  return (
    <MUITable>
      <MUITableHead>
        <MUITableRow>
          {columns.map(column => (
            <TableCell
              key={column.key}
              numeric={column.numeric}
              value={column.label}
            >
              {column.label}
            </TableCell>
          ))}
        </MUITableRow>
      </MUITableHead>
      <MUITableBody>
        {rows.map(row => (
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
        ))}
      </MUITableBody>
    </MUITable>
  );
}

const StyledTable = styled(Table)``;

export { StyledTable as Table };
export default StyledTable;
