import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import TableCell from './TableCell';

TableCellDate.propTypes = {
  /**
   * The table cell contents.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  dateFormat: PropTypes.string,
  /**
   * If `true`, content will align to the right.
   */
  numeric: PropTypes.bool,
  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value.
   */
  padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none']),
  /**
   * Set scope attribute.
   */
  scope: PropTypes.string,
  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.oneOf(['asc', 'desc', false]),
  /**
   * Specify the cell type.
   * By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant: PropTypes.oneOf(['head', 'body', 'footer'])
};

TableCellDate.defaultProps = {
  numeric: false,
  dateFormat: `yyyy-MM-dd'T'HH:mm:ssZ`
};

export function TableCellDate(props) {
  const { value, dateFormat } = props;

  const formattedDate = format(value, dateFormat);

  return <TableCell {...props}>{formattedDate}</TableCell>;
}

export default TableCellDate;
