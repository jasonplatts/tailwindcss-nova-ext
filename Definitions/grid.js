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

let classes = [];

classes = classes.concat(
  gridTemplateColumns
);

exports.classes = classes;