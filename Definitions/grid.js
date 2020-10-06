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
    documentation:"Indicates no explicit grid item column start placement."
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
    documentation:"Indicates no explicit grid item column end placement."
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
    detail:"grid-template-rows: none;",
    documentation:"Indicates no explicit grid row template."
  }
)

/*        GRID ROW START/END CLASSES        */

let gridRowStartEnd = [];

gridRowStartEnd.push(
  {
    label:"row-auto",
    detail:"grid-row: auto;",
    documentation:"Indicates no explicit grid item placement or row span (default span of 1)."
  }
)

for(i = 1; i <= 12; i++) {
  gridRowStartEnd.push(
    {
      label:"row-span-" + i,
      detail:"grid-row: span " + i + " / span" + i + ";",
      documentation:"Makes an element span " + i + " rows."
    }
  )
}

for(i = 1; i <= 13; i++) {
  gridRowStartEnd.push(
    {
      label:"row-start-" + i,
      detail:"grid-row-start: " + i + ";",
      documentation:"Makes an element start at row " + i + "."
    }
  )
}

gridRowStartEnd.push(
  {
    label:"row-start-auto",
    detail:"grid-row-start: auto;",
    documentation:"Indicates no explicit grid item row start placement."
  }
)

for(i = 1; i <= 13; i++) {
  gridRowStartEnd.push(
    {
      label:"row-end-" + i,
      detail:"grid-row-end: " + i + ";",
      documentation:"Makes an element end at row " + i + "."
    }
  )
}

gridRowStartEnd.push(
  {
    label:"row-end-auto",
    detail:"grid-row-end: auto;",
    documentation:"Indicates no explicit grid item row end placement."
  }
)

let classes = [];

classes = classes.concat(
  gridTemplateColumns,
  gridColumnStartEnd,
  gridTemplateRows,
  gridRowStartEnd
);

exports.classes = classes;