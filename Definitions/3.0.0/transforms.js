'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        TRANSFORM CLASSES        */

  let transform = [
    {
      label:         'transform-none',
      detail:        'transform: none;',
      documentation: 'Disable any transformations applied to an element.'
    },
    {
      label:         'transform-gpu',
      detail:        '',
      documentation: 'Enable transformations to be executed on the GPU instead of the CPU.'
    }
  ]

  /*        SCALE CLASSES        */

    let scale = []

    config.scales.SCALE_SCALE.forEach(scaleObj => {
      scale.push(
        {
          label:         `scale-${scaleObj.name}`,
          detail:        `transform: scale(${scaleObj.value});`,
          documentation: `Set an element's scale value to ${scaleObj.value}.`,
          allowNegation: true
        },
        {
          label:         `scale-x-${scaleObj.name}`,
          detail:        `transform: scaleX(${scaleObj.value});`,
          documentation: `Set an element's scale x value to ${scaleObj.value}.`,
          allowNegation: true
        },
        {
          label:         `scale-y-${scaleObj.name}`,
          detail:        `transform: scaleY(${scaleObj.value});`,
          documentation: `Set an element's scale y value to ${scaleObj.value}.`,
          allowNegation: true
        }
      )
    })

  /*        ROTATE CLASSES        */

  let rotate = []

  config.scales.ROTATE_SCALE.forEach(scaleObj => {
    rotate.push(
      {
        label:         `rotate-${scaleObj.name}`,
        detail:        `transform: rotate(${scaleObj.value});`,
        documentation: `Set an element's rotation angle to ${scaleObj.value}.`,
        allowNegation: true
      }
    )
  })

  /*        TRANSLATE CLASSES        */

  const TRANSLATE_SCALE = [...config.scales.DEFAULT_SPACING_SCALE, ...config.scales.CORE_DEFAULT_FRACTIONAL_SCALE]

  let translate = []

  TRANSLATE_SCALE.forEach(scaleObj => {
    translate.push(
      {
        label:         `translate-x-${scaleObj.name}`,
        detail:        `transform: translateX(${scaleObj.value});`,
        documentation: `Set an element's x-axis translate value to ${scaleObj.value}.`,
        allowNegation: true
      },
      {
        label:         `translate-y-${scaleObj.name}`,
        detail:        `transform: translateY(${scaleObj.value};)`,
        documentation: `Set an element's y-axis translate value to ${scaleObj.value}.`,
        allowNegation: true
      }
    )
  })

  /*        SKEW CLASSES        */

  let skew          = []

  config.scales.SKEW_SCALE.forEach(scaleObj => {
    skew.push(
      {
        label:         `skew-x-${scaleObj.name}`,
        detail:        `transform: skewX(${scaleObj.value});`,
        documentation: `Set an element's x-axis skew angle to ${scaleObj.value}.`,
        allowNegation: true
      },
      {
        label:         `skew-y-${scaleObj.name}`,
        detail:        `transform: skewY(${scaleObj.value});`,
        documentation: `Set an element's y-axis skew angle to ${scaleObj.value}.`,
        allowNegation: true
      }
    )
  })

  /*        TRANSFORM ORIGIN CLASSES        */

  let transformOrigin = [
    {
      label:         'origin-center',
      detail:        'transform-origin: center;',
      documentation: 'Set an element\'s transform origin to center.'
    },
    {
      label:         'origin-top',
      detail:        'transform-origin: top;',
      documentation: 'Set an element\'s transform origin to top.'
    },
    {
      label:         'origin-top-right',
      detail:        'transform-origin: top right;',
      documentation: 'Set an element\'s transform origin to top right.'
    },
    {
      label:         'origin-right',
      detail:        'transform-origin: right;',
      documentation: 'Set an element\'s transform origin to right.'
    },
    {
      label:         'origin-bottom-right',
      detail:        'transform-origin: bottom right;',
      documentation: 'Set an element\'s transform origin to bottom right.'
    },
    {
      label:         'origin-bottom',
      detail:        'transform-origin: bottom;',
      documentation: 'Set an element\'s transform origin to bottom.'
    },
    {
      label:         'origin-bottom-left',
      detail:        'transform-origin: bottom left;',
      documentation: 'Set an element\'s transform origin to bottom left.'
    },
    {
      label:         'origin-left',
      detail:        'transform-origin: left;',
      documentation: 'Set an element\'s transform origin to left.'
    },
    {
      label:         'origin-top-left',
      detail:        'transform-origin: top left;',
      documentation: 'Set an element\'s transform origin to top left.'
    }
  ]

  transformOrigin = FUNCTIONS.addStringToDocumentation(transformOrigin, 'The transform origin is the point of an element where the transition pivots.')

  return {
    transforms: {
      transform:       transform,
      scale:           scale,
      rotate:          rotate,
      translate:       translate,
      skew:            skew,
      transformOrigin: transformOrigin
    }
  }
}
