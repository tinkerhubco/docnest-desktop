import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';
import Button from '../Button';

TableCellButton.propTypes = {
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

TableCellButton.defaultProps = {
  numeric: false
};

export function TableCellButton(props) {
  const { buttonProps, ...tableCellProps } = props;

  return (
    <TableCell {...tableCellProps}>
      <Button {...buttonProps} />
    </TableCell>
  );
}

export default TableCellButton;
