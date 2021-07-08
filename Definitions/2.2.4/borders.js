'use strict'

const COLORS    = require('./includes/colors.js')
const FUNCTIONS = require('../../Scripts/functions.js')
const SCALES    = require('./includes/scales.js')

/*        BORDER RADIUS CLASSES        */

let borderRadius = []

for(let i = 0; i < SCALES.BORDER_RADIUS_SCALE.length; i++) {
  borderRadius.push(
    {
      label:         `rounded-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-t-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-top-left-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value}; border-top-right-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the top left and top right border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-r-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-top-right-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value}; border-bottom-right-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the top right and bottom right border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-b-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-bottom-right-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value}; border-bottom-left-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the bottom left and bottom right border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-l-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-top-left-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value}; border-bottom-left-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the top left and bottom left border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-tl-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-top-left-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the top left border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-tr-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-top-right-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the top right border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-br-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-bottom-right-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the bottom right border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:         `rounded-bl-${SCALES.BORDER_RADIUS_SCALE[i].name}`,
      detail:        `border-bottom-left-radius: ${SCALES.BORDER_RADIUS_SCALE[i].value};`,
      documentation: `Set the bottom left border radius to ${SCALES.BORDER_RADIUS_SCALE[i].value}.`
    }
  )
}

/*        BORDER WIDTH CLASSES        */

let borderWidth = []

for(let i = 0; i < SCALES.BORDER_WIDTH_SCALE.length; i++) {
  borderWidth.push(
    {
      label:         `border${SCALES.BORDER_WIDTH_SCALE[i].name}`,
      detail:        `border-width: ${SCALES.BORDER_WIDTH_SCALE[i].value};`,
      documentation: `Set the border width for all sides of an element to ${SCALES.BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:         `border-t${SCALES.BORDER_WIDTH_SCALE[i].name}`,
      detail:        `border-top-width: ${SCALES.BORDER_WIDTH_SCALE[i].value};`,
      documentation: `Set the top border width of an element to ${SCALES.BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:         `border-r${SCALES.BORDER_WIDTH_SCALE[i].name}`,
      detail:        `border-right-width: ${SCALES.BORDER_WIDTH_SCALE[i].value};`,
      documentation: `Set the right border width of an element to ${SCALES.BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:         `border-b${SCALES.BORDER_WIDTH_SCALE[i].name}`,
      detail:        `border-bottom-width: ${SCALES.BORDER_WIDTH_SCALE[i].value};`,
      documentation: `Set the bottom border width of an element to ${SCALES.BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:         `border-l${SCALES.BORDER_WIDTH_SCALE[i].name}`,
      detail:        `border-left-width: ${SCALES.BORDER_WIDTH_SCALE[i].value};`,
      documentation: `Set the left border width of an element to ${SCALES.BORDER_WIDTH_SCALE[i].value}.`
    }
  )
}

/*        BORDER COLOR CLASSES        */

let borderColor = [
  {
    label:'border-transparent',
    color:          new Color('rgb', [0, 0, 0, 0]),
    detail:        'border-color: transparent;',
    documentation: 'Set the border color of an element to transparent.'
  },
  {
    label:         'border-current',
    detail:        'border-color: currentColor;',
    documentation: 'Set the border color of an element to the currentColor.'
  }
]

for(let i = 0; i < COLORS.COLORS.length; i++) {
  borderColor.push(
    {
      label:         `border-${COLORS.COLORS[i].name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:        `--tw-border-opacity: 1; border-color: rgba(${FUNCTIONS.convertHexToRgbArray(COLORS.COLORS[i].value).join(', ')}, var(--tw-divide-opacity));`,
      documentation: `Set the border color of an element to #${COLORS.COLORS[i].value}.`
    }
  )
}

/*        BORDER OPACITY CLASSES        */

let borderOpacity = []

for(let i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  borderOpacity.push(
    {
      label:         `border-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color:         new Color('rgb', [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:        `--tw-border-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation: `Set the opacity of an element's border to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

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
    label:         'border-none',
    detail:        'border-style: none;',
    documentation: 'Remove an element\'s border style.'
  }
]

/*        DIVIDE WIDTH CLASSES        */

let divideWidth = []

for(let i = 0; i < SCALES.DIVIDE_WIDTH_SCALE.length; i++) {
  divideWidth.push(
    {
      label:         `divide-x${SCALES.DIVIDE_WIDTH_SCALE[i].name}`,
      detail:        `--tw-divide-y-reverse: 0; border-right-width: calc(${SCALES.DIVIDE_WIDTH_SCALE[i].value} * var(--tw-divide-x-reverse)); border-left-width: calc(${SCALES.DIVIDE_WIDTH_SCALE[i].value} * calc(1 - var(--tw-divide-x-reverse)));`,
      documentation: `Set border width between horizontal children elements to ${SCALES.DIVIDE_WIDTH_SCALE[i].value}.`
    },
    {
      label:         `divide-y${SCALES.DIVIDE_WIDTH_SCALE[i].name}`,
      detail:        `--tw-divide-y-reverse: 0; border-top-width: calc(${SCALES.DIVIDE_WIDTH_SCALE[i].value} * calc(1 - var(--tw-divide-y-reverse))); border-bottom-width: calc(${SCALES.DIVIDE_WIDTH_SCALE[i].value} * var(--tw-divide-y-reverse));`,
      documentation: `Set border width between vertical (stacked) children elements to ${SCALES.DIVIDE_WIDTH_SCALE[i].value}.`
    }
  )
}

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
    label:         'divide-transparent',
    color:         new Color('rgb', [0, 0, 0, 0]),
    detail:        'border-color: transparent;',
    documentation: 'Set the border color between elements using divide utilities to transparent.'
  },
  {
    label:         'divide-current',
    detail:        'border-color: currentColor;',
    documentation: 'Set the border color between elements using divide utilities to the currentColor.'
  }
)

for(let i = 0; i < COLORS.COLORS.length; i++) {
  divideColor.push(
    {
      label:         'divide-' + COLORS.COLORS[i].name,
      color:         FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:        `--tw-divide-opacity: 1; border-color: rgba(${FUNCTIONS.convertHexToRgbArray(COLORS.COLORS[i].value).join(', ')}, var(--tw-divide-opacity));`,
      documentation: 'Set the border color between elements using divide utilities to #' + COLORS.COLORS[i].value + '.'
    }
  )
}

/*        DIVIDE OPACITY CLASSES        */

let divideOpacity = []

for(let i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  divideOpacity.push(
    {
      label:         `divide-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color:         new Color('rgb', [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:        `--tw-divide-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation: `Set the opacity of the borders between elements using the divide utilities to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

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

/*        RING WIDTH CLASSES        */

let ringWidth = []

for(let i = 0; i < SCALES.RING_WIDTH_SCALE.length; i++) {
  ringWidth.push(
    {
      label:         `ring${SCALES.RING_WIDTH_SCALE[i].name}`,
      detail:        `box-shadow: var(--tw-ring-inset) 0 0 0 calc(${SCALES.RING_WIDTH_SCALE[i].value} + var(--tw-ring-offset-width)) var(--tw-ring-color);`,
      documentation: `Apply a solid box-shadow of ${SCALES.RING_WIDTH_SCALE[i].value}.`
    }
  )
}

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
    label:         'ring-transparent',
    color:         new Color('rgb', [0, 0, 0, 0]),
    detail:        '--tw-ring-color: transparent;',
    documentation: 'Set the outline ring color to transparent.'
  },
  {
    label:         'ring-current',
    detail:        '--tw-ring-color: currentColor;',
    documentation: 'Set the outline ring color to the currentColor.'
  }
]

for(let i = 0; i < COLORS.COLORS.length; i++) {
  ringColor.push(
    {
      label:         `ring-${COLORS.COLORS[i].name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:        `--tw-ring-color: rgba(${FUNCTIONS.convertHexToRgbArray(COLORS.COLORS[i].value).join(', ')}, var(--tw-ring-opacity));`,
      documentation: `Set the outline ring color to #${COLORS.COLORS[i].value}.`
    }
  )
}

/*        RING OPACITY CLASSES        */

let ringOpacity = []

for(let i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  ringOpacity.push(
    {
      label:         `ring-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color:         new Color('rgb', [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:        `--tw-ring-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation: `Set the opacity of an element's outline ring to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

/*        RING OFFSET WIDTH CLASSES        */

let ringOffsetWidth = []

for(let i = 0; i < SCALES.RING_OFFSET_WIDTH_SCALE.length; i++) {
  ringOffsetWidth.push(
    {
      label:         `ring-offset-${SCALES.RING_OFFSET_WIDTH_SCALE[i].name}`,
      detail:        `--tw-ring-offset-width: ${SCALES.RING_OFFSET_WIDTH_SCALE[i].value}; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`,
      documentation: `Set the outline ring width to ${SCALES.RING_OFFSET_WIDTH_SCALE[i].value}. Use to simulate an offset.`
    }
  )
}

/*        RING OFFSET COLOR CLASSES        */

let ringOffsetColor = [
  {
    label:         'ring-offset-transparent',
    color:         new Color('rgb', [0, 0, 0, 0]),
    detail:        'ring-color: transparent;',
    documentation: 'Set the outline ring color to transparent.'
  },
  {
    label:         'ring-offset-current',
    detail:        'ring-color: currentColor;',
    documentation: 'Set the outline ring color to the currentColor.'
  }
]

for(let i = 0; i < COLORS.COLORS.length; i++) {
  ringOffsetColor.push(
    {
      label:         `ring-offset-${COLORS.COLORS[i].name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:        `--tw-ring-offset-color: #${COLORS.COLORS[i].value}; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`,
      documentation: `Set the outline ring offset color to #${COLORS.COLORS[i].value}.`
    }
  )
}

exports.borders = {
  borderRadius:    borderRadius,
  borderWidth:     borderWidth,
  borderColor:     borderColor,
  borderOpacity:   borderOpacity,
  borderStyle:     borderStyle,
  divideWidth:     divideWidth,
  divideColor:     divideColor,
  divideOpacity:   divideOpacity,
  divideStyle:     divideStyle,
  ringWidth:       ringWidth,
  ringColor:       ringColor,
  ringOpacity:     ringOpacity,
  ringOffsetWidth: ringOffsetWidth,
  ringOffsetColor: ringOffsetColor
}
