'use strict'

/*        BORDER COLLAPSE CLASSES        */

let borderCollapse = [
  {
    label:         'border-collapse',
    detail:        'border-collapse: collapse;',
    documentation: 'Combine adjacent table cell borders into a single border when possible.'
  },
  {
    label:         'border-separate',
    detail:        'border-collapse: separate;',
    documentation: 'Force each table cell to display its own separate borders.'
  }
]

/*        TABLE LAYOUT CLASSES        */

let tableLayout = [
  {
    label:         'table-auto',
    detail:        'table-layout: auto;',
    documentation: 'Allow the table to automatically size columns to fit the contents of the cell.'
  },
  {
    label:         'table-fixed',
    detail:        'table-layout: fixed;',
    documentation: 'Allow the table to ignore the content and use fixed widths for columns. Width of first row columns will set for table.'
  }
]

exports.tables = {
  borderCollapse: borderCollapse,
  tableLayout:    tableLayout
}
