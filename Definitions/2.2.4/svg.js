'use strict'

/*        FILL CLASSES        */

let fill = [
  {
    label:'fill-current',
    detail:'fill: currentColor;',
    documentation:'Set the fill color of an SVG to the current text color.'
  }
]

/*        STROKE CLASSES        */

let stroke = [
  {
    label:'stroke-current',
    detail:'stroke: currentColor;',
    documentation:'Set the stroke color of an SVG to the current text color.'
  }
]

/*        STROKE WIDTH CLASSES        */

let strokeWidth = [
  {
    label:'stroke-0',
    detail:'stroke-width: 0;',
    documentation:'Set the stroke width of an SVG to 0.'
  },
  {
    label:'stroke-1',
    detail:'stroke-width: 1;',
    documentation:'Set the stroke width of an SVG to 1.'
  },
  {
    label:'stroke-2',
    detail:'stroke-width: 2;',
    documentation:'Set the stroke width of an SVG to 2.'
  }
]

exports.svg = {
  fill:        fill,
  stroke:      stroke,
  strokeWidth: strokeWidth
}
