'use strict'

exports.twClasses = function twClasses(config) {
  /*        WIDTH CLASSES        */

  const COMBINED_WIDTH_SCALE = [
    ...config.scales.DEFAULT_SPACING_SCALE,
    ...config.scales.CORE_DEFAULT_FRACTIONAL_SCALE,
    ...config.scales.FIFTHS_FRACTIONAL_SCALE,
    ...config.scales.SIXTHS_FRACTIONAL_SCALE,
    ...config.scales.TWELFTHS_FRACTIONAL_SCALE
  ]

  let width = []

  width.push(
    {
      label:         'w-auto',
      detail:        'width: auto;',
      documentation: 'Let the browser calculate and select the width for an element.'
    }
  )

  for(let i = 0; i < COMBINED_WIDTH_SCALE.length; i++) {
    width.push(
      {
        label:         `w-${COMBINED_WIDTH_SCALE[i].name}`,
        detail:        `width: ${COMBINED_WIDTH_SCALE[i].value};`,
        documentation: `Set the width of an element to ${COMBINED_WIDTH_SCALE[i].value}.`
      }
    )
  }

  width.push(
    {
      label:         'w-screen',
      detail:        'width: 100vw;',
      documentation: 'Make an element span the entire width of the viewport.'
    },
    {
      label:         'w-min',
      detail:        'width: min-content;',
      documentation: 'Set an element width to the minimum content width.'
    },
    {
      label:         'w-max',
      detail:        'width: max-content;',
      documentation: 'Set an element width to the maximum content width.'
    }
  )

  /*        MIN-WIDTH CLASSES        */

  let minWidth = []

  minWidth.push(
    {
      label:         'min-w-0',
      detail:        'min-width: 0;',
      documentation: 'Set the minimum element width to 0.'
    },
    {
      label:         'min-w-full',
      detail:        'min-width: 100%;',
      documentation: 'Set the minimum element width to 100%.'
    },
    {
      label:         'min-w-min',
      detail:        'min-width: min-content',
      documentation: 'Set the minimum width of an element to the minimum content width.'
    },
    {
      label:         'min-w-max',
      detail:        'min-width: max-content',
      documentation: 'Set the minimum width of an element to the maximum content width.'
    }
  )

  /*        MAX-WIDTH CLASSES        */

  let maxWidth = []

  for(let i = 0; i < config.scales.MAX_WIDTH_SCALE.length; i++) {
    maxWidth.push(
      {
        label:         `max-w-${config.scales.MAX_WIDTH_SCALE[i].name}`,
        detail:        `max-width: ${config.scales.MAX_WIDTH_SCALE[i].value};`,
        documentation: `Set the maximum element width to ${config.scales.MAX_WIDTH_SCALE[i].value}.`
      }
    )
  }

  /*        HEIGHT CLASSES        */

  const COMBINED_HEIGHT_SCALE = [
    ...config.scales.DEFAULT_SPACING_SCALE,
    ...config.scales.CORE_DEFAULT_FRACTIONAL_SCALE,
    ...config.scales.FIFTHS_FRACTIONAL_SCALE,
    ...config.scales.SIXTHS_FRACTIONAL_SCALE
  ]

  let height = []

  for(let i = 0; i < COMBINED_HEIGHT_SCALE.length; i++) {
    height.push(
      {
        label:         `h-${COMBINED_HEIGHT_SCALE[i].name}`,
        detail:        `height: ${COMBINED_HEIGHT_SCALE[i].value};`,
        documentation: `Set an element's height to ${COMBINED_HEIGHT_SCALE[i].value}.`
      }
    )
  }

  height.push(
    {
      label:         'h-auto',
      detail:        'height: auto;',
      documentation: 'Let the browser determine the height for an element.'
    },
    {
      label:         'h-screen',
      detail:        'height: 100vh;',
      documentation: 'Make an element to span the entire height of the viewport.'
    }
  )

  /*        MIN-HEIGHT CLASSES        */

  let minHeight = [
    {
      label:         'min-h-0',
      detail:        'min-height: 0;',
      documentation: 'Set the minimum element height to 0.'
    },
    {
      label:         'min-h-full',
      detail:        'min-height: 100%;',
      documentation: 'Set the minimum element height to 100% of its parent, as long as the parent has a defined height.'
    },
    {
      label:         'min-h-screen',
      detail:        'min-height: 100vh;',
      documentation: 'Set the minimum element height to span the entire height of the viewport.'
    }
  ]

  /*        MAX-HEIGHT CLASSES        */

  let maxHeight = []

  for(let i = 0; i < config.scales.DEFAULT_SPACING_SCALE.length; i++) {
    maxHeight.push(
      {
        label:         `max-h-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `max-height: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the maximum height of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      }
    )
  }

  maxHeight.push(
    {
      label:         'max-h-full',
      detail:        'max-height: 100%;',
      documentation: 'Set the maximum element height to 100% of its parent, as long as the parent has a defined height.'
    },
    {
      label:         'max-h-screen',
      detail:        'max-height: 100vh;',
      documentation: 'Set the maximum element height to span the entire height of the viewport.'
    }
  )

  return {
    sizing: {
      width:     width,
      minWidth:  minWidth,
      maxWidth:  maxWidth,
      height:    height,
      minHeight: minHeight,
      maxHeight: maxHeight
    }
  }
}
