'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        TRANSFORM CLASSES        */

  let transform = [
    {
      label:         'transform',
      detail:        '--tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));',
      documentation: 'Add to an element to enable transformations.'
    },
    {
      label:         'transform-gpu',
      detail:        '--tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));',
      documentation: 'Enable transformations to be executed on the GPU instead of the CPU.'
    },
    {
      label:         'transform-none',
      detail:        'transform: none;',
      documentation: 'Disable any transformations applied to an element.'
    }
  ]

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

  /*        SCALE CLASSES        */

  let scale = []

  config.scales.SCALE_SCALE.forEach(scaleObj => {
    scale.push(
      {
        label:         `scale-${scaleObj.name}`,
        detail:        `--transform-scale-x: ${scaleObj.value}; --transform-scale-y: ${scaleObj.value};`,
        documentation: `Set an element's scale x and y percentages to ${scaleObj.value}.`
      }
    )
  })

  config.scales.SCALE_SCALE.forEach(scaleObj => {
    scale.push(
      {
        label:         `scale-x-${scaleObj.name}`,
        detail:        `--transform-scale-x: ${scaleObj.value};`,
        documentation: `Set an element's scale x percentages to ${scaleObj.value}.`
      }
    )
  })

  config.scales.SCALE_SCALE.forEach(scaleObj => {
    scale.push(
      {
        label:         `scale-y-${scaleObj.name}`,
        detail:        `--transform-scale-y: ${scaleObj.value};`,
        documentation: `Set an element's scale y percentage to ${scaleObj.value}.`
      }
    )
  })

  /*        ROTATE CLASSES        */

  let rotate = []

  rotate.push(
    {
      label:         'rotate-0',
      detail:        '--tw-transform-rotate: 0;',
      documentation: 'Set an element\'s rotation angle to 0deg.'
    }
  )

  config.scales.ROTATE_SCALE.forEach(scaleObj => {
    rotate.push(
      {
        label:         `rotate-${scaleObj.name}`,
        detail:        `--tw-transform-rotate: ${scaleObj.value};`,
        documentation: `Set an element's rotation angle to ${scaleObj.value}.`
      }
    )
  })

  let negativeRotate = []

  config.scales.ROTATE_SCALE.forEach(scaleObj => {
    negativeRotate.push(
      {
        label:         `-rotate-${scaleObj.name}`,
        detail:        `--tw-transform-rotate: -${scaleObj.value};`,
        documentation:` Set an element's rotation angle to -${scaleObj.value}.`
      }
    )
  })

  negativeRotate.reverse()

  rotate = [...rotate, ...negativeRotate]

  /*        TRANSLATE CLASSES        */

  const TRANSLATE_SCALE = [...config.scales.DEFAULT_SPACING_SCALE, ...config.scales.CORE_DEFAULT_FRACTIONAL_SCALE]

  let translate = []

  TRANSLATE_SCALE.forEach(scaleObj => {
    translate.push(
      {
        label:         `translate-x-${scaleObj.name}`,
        detail:        `--tw-transform-translate-x: ${scaleObj.value};`,
        documentation: `Set an element's x-axis translate amount to ${scaleObj.value}.`
      }
    )
  })

  TRANSLATE_SCALE.forEach(scaleObj => {
    translate.push(
      {
        label:         `-translate-x-${scaleObj.name}`,
        detail:        `--tw-transform-translate-x: -${scaleObj.value};`,
        documentation: `Set an element's x-axis translate amount to -${scaleObj.value}.`
      }
    )
  })

  TRANSLATE_SCALE.forEach(scaleObj => {
    translate.push(
      {
        label:         `translate-y-${scaleObj.name}`,
        detail:        `--tw-transform-translate-y: ${scaleObj.value};`,
        documentation: `Set an element's y-axis translate amount to ${scaleObj.value}.`
      }
    )
  })

  TRANSLATE_SCALE.forEach(scaleObj => {
    translate.push(
      {
        label:         `-translate-y-${scaleObj.name}`,
        detail:        `--tw-transform-translate-y: -${scaleObj.value};`,
        documentation: `Set an element's y-axis translate amount to -${scaleObj.value}.`
      }
    )
  })

  /*        SKEW CLASSES        */

  let skew          = []
  let negativeXSkew = []
  let negativeYSkew = []

  skew.push(
    {
      label:         'skew-x-0',
      detail:        '--tw-transform-skew-x: 0deg;',
      documentation: 'Set an element\'s x-axis skew angle to 0.'
    }
  )

  config.scales.SKEW_SCALE.forEach(scaleObj => {
    skew.push(
      {
        label:         `skew-x-${scaleObj.name}`,
        detail:        `--tw-transform-skew-x: ${scaleObj.value};`,
        documentation: `Set an element's x-axis skew angle to ${scaleObj.value}.`
      }
    )
  })

  config.scales.SKEW_SCALE.forEach(scaleObj => {
    negativeXSkew.push(
      {
        label:         `-skew-x-${scaleObj.name}`,
        detail:        `--tw-transform-skew-x: -${scaleObj.value};`,
        documentation: `Set an element's x-axis skew angle to -${scaleObj.value}.`
      }
    )
  })

  skew = [...skew, ...negativeXSkew.reverse()]

  skew.push(
    {
      label:         'skew-y-0',
      detail:        '--tw-transform-skew-y: 0deg;',
      documentation: 'Set an element\'s y-axis skew angle to 0.'
    }
  )

  config.scales.SKEW_SCALE.forEach(scaleObj => {
    skew.push(
      {
        label:         `skew-y-${scaleObj.name}`,
        detail:        `--tw-transform-skew-y: ${scaleObj.value};`,
        documentation: `Set an element's y-axis skew angle to ${scaleObj.value}.`
      }
    )
  })

  config.scales.SKEW_SCALE.forEach(scaleObj => {
    negativeYSkew.push(
      {
        label:         `-skew-y-${scaleObj.name}`,
        detail:        `--tw-transform-skew-y: -${scaleObj.value};`,
        documentation: `Set an element's y-axis skew angle to -${scaleObj.value}.`
      }
    )
  })

  skew = [...skew, ...negativeYSkew.reverse()]

  transformOrigin = FUNCTIONS.addRequiredClass(transformOrigin, 'transform')
  scale           = FUNCTIONS.addRequiredClass(scale, 'transform')
  rotate          = FUNCTIONS.addRequiredClass(rotate, 'transform')
  translate       = FUNCTIONS.addRequiredClass(translate, 'transform')
  skew            = FUNCTIONS.addRequiredClass(skew, 'transform')

  return {
    transforms: {
      transform:       transform,
      transformOrigin: transformOrigin,
      scale:           scale,
      rotate:          rotate,
      translate:       translate,
      skew:            skew
    }
  }
}
