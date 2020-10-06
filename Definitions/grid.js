/*        GRID TEMPLATE COLUMNS CLASSES        */

let gridTemplateColumns = [];

for(i = 1; i <= 12; i++) {  
  gridTemplateColumns.push(
    {
      label:"grid-cols-" + i,
      detail:"grid-template-columns: repeat(" + i + ", minmax(0, 1fr));",
      documentation:"Creates a " + i + " column grid."
    }
  );
}

gridTemplateColumns.push(
  {
    label:"grid-cols-none",
    detail:"grid-template-columns: none;",
    documentation:"Indicates no explicit grid column template."
  }
)

/*        GRID COLUMN START/END CLASSES        */

let gridColumnStartEnd = [];

gridColumnStartEnd.push(
  {
    label:"col-auto",
    detail:"grid-column: auto;",
    documentation:"Indicates no explicit grid item placement or column span (default span of 1)."
  }
)

for(i = 1; i <= 12; i++) {
  gridColumnStartEnd.push(
    {
      label:"col-span-" + i,
      detail:"grid-column: span " + i + " / span" + i + ";",
      documentation:"Makes an element span " + i + " columns."
    }
  )
}

for(i = 1; i <= 13; i++) {
  gridColumnStartEnd.push(
    {
      label:"col-start-" + i,
      detail:"grid-column-start: " + i + ";",
      documentation:"Makes an element start at column " + i + "."
    }
  )
}

gridColumnStartEnd.push(
  {
    label:"col-start-auto",
    detail:"grid-column-start: auto;",
    documentation:"Indicates no explicit grid item start placement."
  }
)

for(i = 1; i <= 13; i++) {
  gridColumnStartEnd.push(
    {
      label:"col-end-" + i,
      detail:"grid-column-end: " + i + ";",
      documentation:"Makes an element end at column " + i + "."
    }
  )
}

gridColumnStartEnd.push(
  {
    label:"col-end-auto",
    detail:"grid-column-end: auto;",
    documentation:"Indicates no explicit grid item end placement."
  }
)

/*        GRID TEMPLATE ROWS CLASSES        */

let gridTemplateRows = [];

for(i = 1; i <= 6; i++) {  
  gridTemplateRows.push(
    {
      label:"grid-rows-" + i,
      detail:"grid-template-rows: repeat(" + i + ", minmax(0, 1fr));",
      documentation:"Creates a grid with " + i + " rows."
    }
  );
}

gridTemplateRows.push(
  {
    label:"grid-rows-none",
    detail:"grid-template-columns: none;",
    documentation:"Indicates no explicit grid row template."
  }
)

let classes = [];

classes = classes.concat(
  gridTemplateColumns,
  gridColumnStartEnd,
  gridTemplateRows
);

exports.classes = classes;