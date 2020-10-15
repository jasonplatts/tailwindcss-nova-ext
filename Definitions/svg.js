/*        FILL CLASSES        */

let fill = [
  {
    label:"fill-current",
    detail:"fill: currentColor;",
    documentation:"Use to set the fill color of an SVG to the current text color."
  }
];

/*        STROKE CLASSES        */

let stroke = [
  {
    label:"stroke-current",
    detail:"stroke: currentColor;",
    documentation:"Use to set the stroke color of an SVG to the current text color."
  }
];

let classes = [];
  
classes = classes.concat(
  fill,
  stroke
);

exports.classes = classes;