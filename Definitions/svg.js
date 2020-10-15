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

/*        STROKE WIDTH CLASSES        */

let strokeWidth = [
  {
    label:"stroke-0",
    detail:"stroke-width: 0;",
    documentation:"Set the stroke width of an SVG to 0."
  },
  {
    label:"stroke-1",
    detail:"stroke-width: 1;",
    documentation:"Set the stroke width of an SVG to 1."
  },
  {
    label:"stroke-2",
    detail:"stroke-width: 2;",
    documentation:"Set the stroke width of an SVG to 2."
  }
];

let classes = [];
  
classes = classes.concat(
  fill,
  stroke,
  strokeWidth
);

exports.classes = classes;