import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';

let tableData = [];
const columns = [
  {
    key: 'desert',
    label: 'Dessert (100g serving)',
    value: 'name'
  },
  {
    key: 'calories',
    label: 'Calories',
    value: 'calories',
    numeric: true
  }
];
const tableOptions = {
  rowOptions: {
    hover: false
  },
  columns: [...columns]
};

const TableRowHoverStory = {
  default: {
    rowOptions: {
      hover: true
    },
    columns: [...columns]
  },
  disabled: {
    rowOptions: {
      hover: false
    },
    columns: [...columns]
  }
};

const TableCellButtonStory = {
  default: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'action',
        label: 'Action',
        numeric: true,
        isButton: true,
        ownProps: {
          children: 'Click Me'
        }
      }
    ]
  },
  primary: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'action',
        label: 'Action',
        numeric: true,
        isButton: true,
        ownProps: {
          color: 'primary',
          children: 'Click Me'
        }
      }
    ]
  },
  secondary: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'action',
        label: 'Action',
        numeric: true,
        isButton: true,
        ownProps: {
          color: 'secondary',
          children: 'Click Me'
        }
      }
    ]
  },
  disabled: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'action',
        label: 'Action',
        numeric: true,
        isButton: true,
        ownProps: {
          disabled: true,
          children: 'Click Me'
        }
      }
    ]
  },
  contained: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'action',
        label: 'Action',
        numeric: true,
        isButton: true,
        ownProps: {
          variant: 'contained',
          color: 'primary',
          children: 'Click Me'
        }
      }
    ]
  }
};

const TableCellDateStory = {
  default: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'date',
        label: 'Created',
        value: 'date',
        numeric: true,
        isDate: true
      }
    ]
  },
  formatted: {
    rowOptions: { ...tableOptions.rowOptions },
    columns: [
      ...columns,
      {
        key: 'date',
        label: 'Created',
        value: 'date',
        numeric: true,
        isDate: true,
        dateFormat: 'MM/dd/yyyy'
      }
    ]
  }
};

initializeTableData();

storiesOf('Table', module).add('default', () => (
  <Table
    rowOptions={tableOptions.rowOptions}
    columns={tableOptions.columns}
    rows={tableData}
  />
));

storiesOf('Table/RowHover', module)
  .add('default', () => (
    <Table
      rowOptions={TableRowHoverStory.default.rowOptions}
      columns={TableRowHoverStory.default.columns}
      rows={tableData}
    />
  ))
  .add('disabled', () => (
    <Table
      rowOptions={TableRowHoverStory.disabled.rowOptions}
      columns={TableRowHoverStory.disabled.columns}
      rows={tableData}
    />
  ));

storiesOf('Table/Cell/Button', module)
  .add('default', () => (
    <Table
      rowOptions={TableCellButtonStory.default.rowOptions}
      columns={TableCellButtonStory.default.columns}
      rows={tableData}
    />
  ))
  .add('primary', () => (
    <Table
      rowOptions={TableCellButtonStory.primary.rowOptions}
      columns={TableCellButtonStory.primary.columns}
      rows={tableData}
    />
  ))
  .add('secondary', () => (
    <Table
      rowOptions={TableCellButtonStory.secondary.rowOptions}
      columns={TableCellButtonStory.secondary.columns}
      rows={tableData}
    />
  ))
  .add('disabled', () => (
    <Table
      rowOptions={TableCellButtonStory.disabled.rowOptions}
      columns={TableCellButtonStory.disabled.columns}
      rows={tableData}
    />
  ))
  .add('contained', () => (
    <Table
      rowOptions={TableCellButtonStory.contained.rowOptions}
      columns={TableCellButtonStory.contained.columns}
      rows={tableData}
    />
  ));

storiesOf('Table/Cell/Date', module)
  .add('default', () => (
    <Table
      rowOptions={TableCellDateStory.default.rowOptions}
      columns={TableCellDateStory.default.columns}
      rows={tableData}
    />
  ))
  .add('format', () => (
    <Table
      rowOptions={TableCellDateStory.formatted.rowOptions}
      columns={TableCellDateStory.formatted.columns}
      rows={tableData}
    />
  ));

function initializeTableData() {
  let id = 0;
  const createData = (name, calories, fat, carbs, protein, date) => {
    id += 1;
    return { id, name, calories, fat, carbs, protein, date };
  };
  tableData = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '2018-08-25T02:44:44Z'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, '2018-08-25T02:44:44Z'),
    createData('Eclair', 262, 16.0, 24, 6.0, '2018-08-25T02:44:44Z'),
    createData('Cupcake', 305, 3.7, 67, 4.3, '2018-08-25T02:44:44Z'),
    createData('Gingerbread', 356, 16.0, 49, 3.9, '2018-08-25T02:44:44Z')
  ];
}
