const SCALES = require('./includes/scales.js');

/*        GRID TEMPLATE COLUMNS CLASSES        */

let gridTemplateColumns = [];

for(i = 1; i <= 12; i++) {  
  gridTemplateColumns.push(
    {
      label:`grid-cols-${i}`,
      detail:`grid-template-columns: repeat(${i}, minmax(0, 1fr));`,
      documentation:`Create a grid with ${i} equally sized columns.`
    }
  );
}

gridTemplateColumns.push(
  {
    label:"grid-cols-none",
    detail:"grid-template-columns: none;",
    documentation:"Specify no explicit grid column template."
  }
)

/*        GRID COLUMN START/END CLASSES        */

let gridColumnStartEnd = [];

gridColumnStartEnd.push(
  {
    label:"col-auto",
    detail:"grid-column: auto;",
    documentation:"Specify no explicit grid item placement or column span."
  }
)

for(i = 1; i <= 12; i++) {
  gridColumnStartEnd.push(
    {
      label:`col-span-${i}`,
      detail:`grid-column: span ${i} / span ${i};`,
      documentation:`Make an element span ${i} columns.`
    }
  )
}

gridColumnStartEnd.push(
  {
    label:`col-span-full`,
    detail:`grid-column: 1 / -1;`,
    documentation:`Make an element span all columns.`
  }
)

for(i = 1; i <= 13; i++) {
  gridColumnStartEnd.push(
    {
      label:`col-start-${i}`,
      detail:`grid-column-start: ${i};`,
      documentation:`Make an element start at grid line ${i}.`
    }
  )
}

gridColumnStartEnd.push(
  {
    label:"col-start-auto",
    detail:"grid-column-start: auto;",
    documentation:"Specify no explicit grid item column start placement."
  }
)

for(i = 1; i <= 13; i++) {
  gridColumnStartEnd.push(
    {
      label:`col-end-${i}`,
      detail:`grid-column-end: ${i};`,
      documentation:`Make an element end at grid line ${i}.`
    }
  )
}

gridColumnStartEnd.push(
  {
    label:"col-end-auto",
    detail:"grid-column-end: auto;",
    documentation:"Specify no explicit grid item column end placement."
  }
)

/*        GRID TEMPLATE ROWS CLASSES        */

let gridTemplateRows = [];

for(i = 1; i <= 6; i++) {  
  gridTemplateRows.push(
    {
      label:`grid-rows-${i}`,
      detail:`grid-template-rows: repeat(${i}, minmax(0, 1fr));`,
      documentation:`Create a grid with ${i} equally sized rows.`
    }
  );
}

gridTemplateRows.push(
  {
    label:"grid-rows-none",
    detail:"grid-template-rows: none;",
    documentation:"Specify no explicit grid row template."
  }
)

/*        GRID ROW START/END CLASSES        */

let gridRowStartEnd = [];

gridRowStartEnd.push(
  {
    label:"row-auto",
    detail:"grid-row: auto;",
    documentation:"Specify no explicit grid item placement or row span."
  }
)

for(i = 1; i <= 6; i++) {
  gridRowStartEnd.push(
    {
      label:`row-span-${i}`,
      detail:`grid-row: span ${i} / span ${i};`,
      documentation:`Make an element span ${i} rows.`
    }
  )
}

gridRowStartEnd.push(
  {
    label:`row-span-full`,
    detail:`grid-row: 1 / -1;`,
    documentation:`Make an element span all rows.`
  }
)

for(i = 1; i <= 7; i++) {
  gridRowStartEnd.push(
    {
      label:`row-start-${i}`,
      detail:`grid-row-start: ${i};`,
      documentation:`Make an element start at grid line ${i}.`
    }
  )
}

gridRowStartEnd.push(
  {
    label:"row-start-auto",
    detail:"grid-row-start: auto;",
    documentation:"Specify no explicit grid item row start placement."
  }
)

for(i = 1; i <= 7; i++) {
  gridRowStartEnd.push(
    {
      label:`row-end-${i}`,
      detail:`grid-row-end: ${i};`,
      documentation:`Make an element end at grid line ${i}.`
    }
  )
}

gridRowStartEnd.push(
  {
    label:"row-end-auto",
    detail:"grid-row-end: auto;",
    documentation:"Specify no explicit grid item row end placement."
  }
)

/*        GRID AUTO FLOW CLASSES        */

let gridAutoFlow = [
  {
    label:"grid-flow-row",
    detail:"grid-auto-flow: row;",
    documentation:"Specify that grid items fill each row, adding new rows as needed."
  },
  {
    label:"grid-flow-col",
    detail:"grid-auto-flow: column;",
    documentation:"Specify that grid items fill each column, adding new columns as needed."
  },
  {
    label:"grid-flow-row-dense",
    detail:"grid-auto-flow: row dense;",
    documentation:"Specify that grid items fill each row using an algorithm that attempts to fill holes earlier in the grid."
  },
  {
    label:"grid-flow-col-dense",
    detail:"grid-auto-flow: column dense;",
    documentation:"Specify that grid items fill each column using an algorithm that attempts to fill holes earlier in the grid."
  }
];

/*        GRID AUTO COLUMNS CLASSES        */

let gridAutoColumns = [
  {
    label:"auto-cols-auto",
    detail:"grid-auto-columns: auto;",
    documentation:"Specify that in an implicitly-created grid, column size should be determined by the size of the parent container."
  },
  {
    label:"auto-cols-min",
    detail:"grid-auto-columns: min-content;",
    documentation:"Specify that in an implicitly-created grid, column size should be determined by the smallest item in the column."
  },
  {
    label:"auto-cols-max",
    detail:"grid-auto-columns: max-content;",
    documentation:"Specify that in an implicitly-created grid, column size should be determined by the largest item in the column."
  },
  {
    label:"auto-cols-fr",
    detail:"grid-auto-columns: minmax(0, 1fr);",
    documentation:"Specify that implicit grid columns should have no minimum size and a maximum size no larger than one part of available space."
  }
];

/*        GRID AUTO ROWS CLASSES        */

let gridAutoRows = [
  {
    label:"auto-rows-auto",
    detail:"grid-auto-rows: auto;",
    documentation:"Specify that in an implicitly-created grid, row size should be determined by the size of the parent container."
  },
  {
    label:"auto-rows-min",
    detail:"grid-auto-rows: min-content;",
    documentation:"Specify that in an implicitly-created grid, row size should be determined by the smallest item in the row."
  },
  {
    label:"auto-rows-max",
    detail:"grid-auto-rows: max-content;",
    documentation:"Specify that in an implicitly-created grid, row size should be determined by the largest item in the row."
  },
  {
    label:"auto-rows-fr",
    detail:"grid-auto-rows: minmax(0, 1fr);",
    documentation:"Specify that implicit grid rows should have no minimum size and a maximum size no larger than one part of available space."
  }
];

/*        GAP CLASSES        */

let gap = [];

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  gap.push(
    {
      label:`gap-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`gap: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation:`Change the gutter size in a grid layout to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`  
    }
  );
}

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  gap.push(
    {
      label:`gap-x-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`column-gap: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation:`Change the gutter size between columns in grid layouts to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`  
    }
  );
}

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  gap.push(
    {
      label:`gap-y-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`row-gap: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation:`Change the gutter size between rows in grid layouts to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`  
    }
  );
}

let classes = [];

classes = classes.concat(
  gridTemplateColumns,
  gridColumnStartEnd,
  gridTemplateRows,
  gridRowStartEnd,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gap
);

exports.classes = classes;