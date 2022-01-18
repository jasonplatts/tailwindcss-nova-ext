'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        FILL CLASSES        */

  let fill = [
    {
      label:         'fill-inherit',
      detail:        'fill: inherit;',
      documentation: 'Set the fill color of an SVG element to that of the parent element.'
    },
    {
      label:         'fill-current',
      detail:        'fill: currentColor;',
      documentation: 'Set the fill color of an SVG element to the currentColor.'
    },
    {
      label:         'fill-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'fill: transparent;',
      documentation: 'Set the fill color of an SVG element to transparent.'
    }
  ]

  config.colors.forEach(color => {
    fill.push(
      {
        label:         `fill-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `fill: #${color.hex};`,
        documentation: `Set the fill color of an SVG element to #${color.hex}.`
      }
    )
  })

  /*        STROKE CLASSES        */

  let stroke = [
    {
      label:         'stroke-inherit',
      detail:        'stroke: inherit;',
      documentation: 'Set the stroke color of an SVG element to that of the parent element.'
    },
    {
      label:         'stroke-current',
      detail:        'stroke: currentColor;',
      documentation: 'Set the stroke color of an SVG element to the currentColor.'
    },
    {
      label:         'stroke-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'stroke: transparent;',
      documentation: 'Set the stroke color of an SVG element to transparent.'
    }
  ]

  config.colors.forEach(color => {
    stroke.push(
      {
        label:         `stroke-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `stroke: #${color.hex};`,
        documentation: `Set the stroke color of an SVG element to #${color.hex}.`
      }
    )
  })

  /*        STROKE WIDTH CLASSES        */

  let strokeWidth = [
    {
      label:         'stroke-0',
      detail:        'stroke-width: 0;',
      documentation: 'Set the stroke width of an SVG to 0.'
    },
    {
      label:         'stroke-1',
      detail:        'stroke-width: 1;',
      documentation: 'Set the stroke width of an SVG to 1.'
    },
    {
      label:         'stroke-2',
      detail:        'stroke-width: 2;',
      documentation: 'Set the stroke width of an SVG to 2.'
    }
  ]

  return {
    svg: {
      fill:        fill,
      stroke:      stroke,
      strokeWidth: strokeWidth
    }
  }
}
