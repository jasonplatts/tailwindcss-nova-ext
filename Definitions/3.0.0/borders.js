'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        BORDER RADIUS CLASSES        */

  let borderRadius = []

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded${scale.name}`,
        detail:        `border-radius: ${scale.value};`,
        documentation: `Set the border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-t${scale.name}`,
        detail:        `border-top-left-radius: ${scale.value}; border-top-right-radius: ${scale.value};`,
        documentation: `Set the top left and top right border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-r${scale.name}`,
        detail:        `border-top-right-radius: ${scale.value}; border-bottom-right-radius: ${scale.value};`,
        documentation: `Set the top right and bottom right border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-b${scale.name}`,
        detail:        `border-bottom-right-radius: ${scale.value}; border-bottom-left-radius: ${scale.value};`,
        documentation: `Set the bottom left and bottom right border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-l${scale.name}`,
        detail:        `border-top-left-radius: ${scale.value}; border-bottom-left-radius: ${scale.value};`,
        documentation: `Set the top left and bottom left border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-tl${scale.name}`,
        detail:        `border-top-left-radius: ${scale.value};`,
        documentation: `Set the top left border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-tr${scale.name}`,
        detail:        `border-top-right-radius: ${scale.value};`,
        documentation: `Set the top right border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-br${scale.name}`,
        detail:        `border-bottom-right-radius: ${scale.value};`,
        documentation: `Set the bottom right border radius to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_RADIUS_SCALE.forEach(scale => {
    borderRadius.push(
      {
        label:         `rounded-bl${scale.name}`,
        detail:        `border-bottom-left-radius: ${scale.value};`,
        documentation: `Set the bottom left border radius to ${scale.value}.`
      }
    )
  })

  /*        BORDER WIDTH CLASSES        */

  let borderWidth = []

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border${scale.name}`,
        detail:        `border-width: ${scale.value};`,
        documentation: `Set the border width for all sides of an element to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border-x${scale.name}`,
        detail:        `border-left-width: ${scale.value}; border-right-width: ${scale.value};`,
        documentation: `Set the horizontal border width on two sides of an element to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border-y${scale.name}`,
        detail:        `border-top-width: ${scale.value}; border-bottom-width: ${scale.value};`,
        documentation: `Set the vertical border width on two sides of an element to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border-t${scale.name}`,
        detail:        `border-top-width: ${scale.value};`,
        documentation: `Set the top border width of an element to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border-r${scale.name}`,
        detail:        `border-right-width: ${scale.value};`,
        documentation: `Set the right border width of an element to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border-b${scale.name}`,
        detail:        `border-bottom-width: ${scale.value};`,
        documentation: `Set the bottom border width of an element to ${scale.value}.`
      }
    )
  })

  config.scales.BORDER_WIDTH_SCALE.forEach(scale => {
    borderWidth.push(
      {
        label:         `border-l${scale.name}`,
        detail:        `border-left-width: ${scale.value};`,
        documentation: `Set the left border width of an element to ${scale.value}.`
      }
    )
  })

  /*        BORDER COLOR CLASSES        */

  let borderColor = [
    {
      label:         'border-inherit',
      detail:        'border-color: inherit;',
      documentation: 'Set the border color of an element to that of the parent element.'
    },
    {
      label:         'border-current',
      detail:        'border-color: currentColor;',
      documentation: 'Set the border color of an element to the currentColor.'
    },
    {
      label:'border-transparent',
      color:          new Color('rgb', [0, 0, 0, 0]),
      detail:        'border-color: transparent;',
      documentation: 'Set the border color of an element to transparent.'
    }
  ]

  config.colors.forEach(color => {
    borderColor.push(
      {
        label:         `border-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `border-color: rgb(${color.rgb});`,
        documentation: `Set the border color of an element to #${color.hex}.`
      }
    )
  })

  /*        BORDER STYLE CLASSES        */

  let borderStyle = [
    {
      label:         'border-solid',
      detail:        'border-style: solid;',
      documentation: 'Set an element\'s border style to solid.'
    },
    {
      label:         'border-dashed',
      detail:        'border-style: dashed;',
      documentation: 'Set an element\'s border style to dashed.'
    },
    {
      label:         'border-dotted',
      detail:        'border-style: dotted;',
      documentation: 'Set an element\'s border style to dotted.'
    },
    {
      label:         'border-double',
      detail:        'border-style: double;',
      documentation: 'Set an element\'s border style to double.'
    },
    {
      label:         'border-hidden',
      detail:        'border-style: hidden;',
      documentation: 'Hide an element\'s border style.'
    },
    {
      label:         'border-none',
      detail:        'border-style: none;',
      documentation: 'Remove an element\'s border style.'
    }
  ]

  /*        DIVIDE WIDTH CLASSES        */

  let divideWidth = []

  config.scales.DIVIDE_WIDTH_SCALE.forEach(scale => {
    divideWidth.push(
      {
        label:         `divide-x${scale.name}`,
        detail:        `--tw-divide-y-reverse: 0; border-right-width: calc(${scale.value} * var(--tw-divide-x-reverse)); border-left-width: calc(${scale.value} * calc(1 - var(--tw-divide-x-reverse)));`,
        documentation: `Set border width between horizontal children elements to ${scale.value}.`
      }
    )
  })

  config.scales.DIVIDE_WIDTH_SCALE.forEach(scale => {
    divideWidth.push(
      {
        label:         `divide-y${scale.name}`,
        detail:        `--tw-divide-y-reverse: 0; border-top-width: calc(${scale.value} * calc(1 - var(--tw-divide-y-reverse))); border-bottom-width: calc(${scale.value} * var(--tw-divide-y-reverse));`,
        documentation: `Set border width between vertical (stacked) children elements to ${scale.value}.`
      }
    )
  })

  divideWidth.push(
    {
      label:         'divide-y-reverse',
      detail:        '--tw-divide-y-reverse: 1;',
      documentation: 'Set border to correct side of each element when using "flex-col-reverse".'
    },
    {
      label:         'divide-x-reverse',
      detail:        '--tw-divide-x-reverse: 1;',
      documentation: 'Set border to correct side of each element when using "flex-row-reverse".'
    }
  )

  /*        DIVIDE COLOR CLASSES        */

  let divideColor = []

  divideColor.push(
    {
      label:         'divide-inherit',
      detail:        'border-color: inherit;',
      documentation: 'Set the border color between elements using divide utilities to that of the parent element.'
    },
    {
      label:         'divide-current',
      detail:        'border-color: currentColor;',
      documentation: 'Set the border color between elements using divide utilities to the currentColor.'
    },
    {
      label:         'divide-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'border-color: transparent;',
      documentation: 'Set the border color between elements using divide utilities to transparent.'
    }
  )

  config.colors.forEach(color => {
    divideColor.push(
      {
        label:         `divide-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `border-color: rgb(${color.rgb});`,
        documentation: `Set the border color between elements using divide utilities to #${color.hex}.`
      }
    )
  })

  /*        DIVIDE STYLE CLASSES        */

  let divideStyle = [
    {
      label:         'divide-solid',
      detail:        'border-style: solid;',
      documentation: 'Set the styles of the borders between elements using the divide utilities to solid.'
    },
    {
      label:         'divide-dashed',
      detail:        'border-style: dashed;',
      documentation: 'Set the styles of the borders between elements using the divide utilities to dashed.'
    },
    {
      label:         'divide-dotted',
      detail:        'border-style: dotted;',
      documentation: 'Set the styles of the borders between elements using the divide utilities to dotted.'
    },
    {
      label:         'divide-double',
      detail:        'border-style: double;',
      documentation: 'Set the styles of the borders between elements using the divide utilities to double.'
    },
    {
      label:         'divide-none',
      detail:        'border-style: none;',
      documentation: 'Remove the styles of the borders between elements using the divide utilities.'
    }
  ]

  /*        OUTLINE WIDTH CLASSES        */

  let outlineWidth = []

  config.scales.OUTLINE_WIDTH_SCALE.forEach(scale => {
    outlineWidth.push(
      {
        label:         `outline-${scale.name}`,
        detail:        `outline-width: ${scale.value};`,
        documentation: `Set the width of an element's outline to ${scale.value}.`
      }
    )
  })

  /*        OUTLINE COLOR CLASSES        */

  let outlineColor = []

  outlineColor.push(
    {
      label:         'outline-inherit',
      detail:        'outline-color: inherit;',
      documentation: 'Set the outline color of an element to that of the parent element.'
    },
    {
      label:         'outline-current',
      detail:        'outline-color: currentColor;',
      documentation: 'Set the outline color of an element to the currentColor.'
    },
    {
      label:         'outline-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'outline-color: transparent;',
      documentation: 'Set the outline color of an element to transparent.'
    }
  )

  config.colors.forEach(color => {
    outlineColor.push(
      {
        label:         `outline-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `outline-color: rgb(${color.rgb});`,
        documentation: `Set the outline color of an element to #${color.hex}.`
      }
    )
  })

  /*        OUTLINE STYLE CLASSES        */

    let outlineStyle = [
      {
        label:         'outline-none',
        detail:        'outline: 2px solid transparent; outline-offset: 2px;',
        documentation: 'Remove an element\'s outline style.'
      },
      {
        label:         'outline',
        detail:        'outline-style: solid;',
        documentation: 'Set an element\'s outline style to solid.'
      },
      {
        label:         'outline-dashed',
        detail:        'outline-style: dashed;',
        documentation: 'Set an element\'s outline style to dashed.'
      },
      {
        label:         'outline-dotted',
        detail:        'outline-style: dotted;',
        documentation: 'Set an element\'s outline style to dotted.'
      },
      {
        label:         'outline-double',
        detail:        'outline-style: double;',
        documentation: 'Set an element\'s outline style to double.'
      },
      {
        label:         'outline-hidden',
        detail:        'outline-style: hidden;',
        documentation: 'Hide an element\'s outline style.'
      }
    ]

  /*        OUTLINE OFFSET CLASSES        */

  let outlineOffset = []

  config.scales.OUTLINE_OFFSET_SCALE.forEach(scale => {
    outlineOffset.push(
      {
        label:         `outline-offset-${scale.name}`,
        detail:        `outline-offset: ${scale.value};`,
        documentation: `Set the offset of an element's outline to ${scale.value}.`
      }
    )
  })

  /*        RING WIDTH CLASSES        */

  let ringWidth = []

  config.scales.RING_WIDTH_SCALE.forEach(scale => {
    ringWidth.push(
      {
        label:         `ring${scale.name}`,
        detail:        `box-shadow: var(--tw-ring-inset) 0 0 0 calc(${scale.value} + var(--tw-ring-offset-width)) var(--tw-ring-color);`,
        documentation: `Apply a solid box-shadow of ${scale.value}.`
      }
    )
  })

  ringWidth.push(
    {
      label:         'ring-inset',
      detail:        '--tw-ring-inset: inset;',
      documentation: 'Force a ring to render on the inside of an element instead of the outside.'
    }
  )

  /*        RING COLOR CLASSES        */

  let ringColor = [
    {
      label:         'ring-inherit',
      detail:        '--tw-ring-color: inherit;',
      documentation: 'Set the outline ring color to that of the parent element.'
    },
    {
      label:         'ring-current',
      detail:        '--tw-ring-color: currentColor;',
      documentation: 'Set the outline ring color to the currentColor.'
    },
    {
      label:         'ring-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        '--tw-ring-color: transparent;',
      documentation: 'Set the outline ring color to transparent.'
    }
  ]

  config.colors.forEach(color => {
    ringColor.push(
      {
        label:         `ring-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `--tw-ring-color: rgb(${color.rgb});`,
        documentation: `Set the outline ring color to #${color.hex}.`
      }
    )
  })

  /*        RING OFFSET WIDTH CLASSES        */

  let ringOffsetWidth = []

  config.scales.RING_OFFSET_WIDTH_SCALE.forEach(scale => {
    ringOffsetWidth.push(
      {
        label:         `ring-offset-${scale.name}`,
        detail:        `--tw-ring-offset-width: ${scale.value}; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`,
        documentation: `Set the outline ring width to ${scale.value}. Use to simulate an offset.`
      }
    )
  })

  /*        RING OFFSET COLOR CLASSES        */

  let ringOffsetColor = [
    {
      label:         'ring-offset-inherit',
      detail:        '--tw-ring-offset-color: inherit; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);',
      documentation: 'Set the outline ring color to the currentColor.'
    },
    {
      label:         'ring-offset-current',
      detail:        '--tw-ring-offset-color: currentColor; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);',
      documentation: 'Set the outline ring color to the currentColor.'
    },
    {
      label:         'ring-offset-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        '--tw-ring-offset-color: transparent; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);',
      documentation: 'Set the outline ring color to transparent.'
    }
  ]

  config.colors.forEach(color => {
    ringOffsetColor.push(
      {
        label:         `ring-offset-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `--tw-ring-offset-color: #${color.hex}; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`,
        documentation: `Set the outline ring offset color to #${color.hex}.`
      }
    )
  })

  return {
    borders: {
      borderRadius:    borderRadius,
      borderWidth:     borderWidth,
      borderColor:     borderColor,
      borderStyle:     borderStyle,
      divideWidth:     divideWidth,
      divideColor:     divideColor,
      divideStyle:     divideStyle,
      outlineWidth:    outlineWidth,
      outlineColor:    outlineColor,
      outlineStyle:    outlineStyle,
      outlineOffset:   outlineOffset,
      ringWidth:       ringWidth,
      ringColor:       ringColor,
      ringOffsetWidth: ringOffsetWidth,
      ringOffsetColor: ringOffsetColor
    }
  }
}
