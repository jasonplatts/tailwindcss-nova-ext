'use strict'

const COLORS    = require('./includes/colors.js')
const FUNCTIONS = require('../../Scripts/functions.js')
const SCALES    = require('./includes/scales.js')

/*        BORDER RADIUS CLASSES        */

let borderRadius = []

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded${scale.name}`,
      detail:        `border-radius: ${scale.value};`,
      documentation: `Set the border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-t${scale.name}`,
      detail:        `border-top-left-radius: ${scale.value}; border-top-right-radius: ${scale.value};`,
      documentation: `Set the top left and top right border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-r${scale.name}`,
      detail:        `border-top-right-radius: ${scale.value}; border-bottom-right-radius: ${scale.value};`,
      documentation: `Set the top right and bottom right border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-b${scale.name}`,
      detail:        `border-bottom-right-radius: ${scale.value}; border-bottom-left-radius: ${scale.value};`,
      documentation: `Set the bottom left and bottom right border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-l${scale.name}`,
      detail:        `border-top-left-radius: ${scale.value}; border-bottom-left-radius: ${scale.value};`,
      documentation: `Set the top left and bottom left border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-tl${scale.name}`,
      detail:        `border-top-left-radius: ${scale.value};`,
      documentation: `Set the top left border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-tr${scale.name}`,
      detail:        `border-top-right-radius: ${scale.value};`,
      documentation: `Set the top right border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
  borderRadius.push(
    {
      label:         `rounded-br${scale.name}`,
      detail:        `border-bottom-right-radius: ${scale.value};`,
      documentation: `Set the bottom right border radius to ${scale.value}.`
    }
  )
})

SCALES.BORDER_RADIUS_SCALE.forEach(scale => {
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

SCALES.BORDER_WIDTH_SCALE.forEach(scale => {
  borderWidth.push(
    {
      label:         `border${scale.name}`,
      detail:        `border-width: ${scale.value};`,
      documentation: `Set the border width for all sides of an element to ${scale.value}.`
    }
  )
})

SCALES.BORDER_WIDTH_SCALE.forEach(scale => {
  borderWidth.push(
    {
      label:         `border-t${scale.name}`,
      detail:        `border-top-width: ${scale.value};`,
      documentation: `Set the top border width of an element to ${scale.value}.`
    }
  )
})

SCALES.BORDER_WIDTH_SCALE.forEach(scale => {
  borderWidth.push(
    {
      label:         `border-r${scale.name}`,
      detail:        `border-right-width: ${scale.value};`,
      documentation: `Set the right border width of an element to ${scale.value}.`
    }
  )
})

SCALES.BORDER_WIDTH_SCALE.forEach(scale => {
  borderWidth.push(
    {
      label:         `border-b${scale.name}`,
      detail:        `border-bottom-width: ${scale.value};`,
      documentation: `Set the bottom border width of an element to ${scale.value}.`
    }
  )
})

SCALES.BORDER_WIDTH_SCALE.forEach(scale => {
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

COLORS.COLORS.forEach(color => {
  borderColor.push(
    {
      label:         `border-${color.name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
      detail:        `--tw-border-opacity: 1; border-color: rgba(${color.rgb}, var(--tw-divide-opacity));`,
      documentation: `Set the border color of an element to #${color.hex}.`
    }
  )
})

/*        BORDER OPACITY CLASSES        */

let borderOpacity = []

SCALES.DEFAULT_OPACITY_SCALE.forEach(scale => {
  borderOpacity.push(
    {
      label:         `border-opacity-${scale.name}`,
      color:         new Color('rgb', [0, 0, 0, parseFloat(scale.value)]),
      detail:        `--tw-border-opacity: ${scale.value};`,
      documentation: `Set the opacity of an element's border to ${scale.value}.`
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
    label:         'border-none',
    detail:        'border-style: none;',
    documentation: 'Remove an element\'s border style.'
  }
]

/*        DIVIDE WIDTH CLASSES        */

let divideWidth = []

SCALES.DIVIDE_WIDTH_SCALE.forEach(scale => {
  divideWidth.push(
    {
      label:         `divide-x${scale.name}`,
      detail:        `--tw-divide-y-reverse: 0; border-right-width: calc(${scale.value} * var(--tw-divide-x-reverse)); border-left-width: calc(${scale.value} * calc(1 - var(--tw-divide-x-reverse)));`,
      documentation: `Set border width between horizontal children elements to ${scale.value}.`
    }
  )
})

SCALES.DIVIDE_WIDTH_SCALE.forEach(scale => {
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

COLORS.COLORS.forEach(color => {
  divideColor.push(
    {
      label:         `divide-${color.name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
      detail:        `--tw-divide-opacity: 1; border-color: rgba(${color.rgb}, var(--tw-divide-opacity));`,
      documentation: `Set the border color between elements using divide utilities to #${color.hex}.`
    }
  )
})

/*        DIVIDE OPACITY CLASSES        */

let divideOpacity = []

SCALES.DEFAULT_OPACITY_SCALE.forEach(scale => {
  divideOpacity.push(
    {
      label:         `divide-opacity-${scale.name}`,
      color:         new Color('rgb', [0, 0, 0, parseFloat(scale.value)]),
      detail:        `--tw-divide-opacity: ${scale.value};`,
      documentation: `Set the opacity of the borders between elements using the divide utilities to ${scale.value}.`
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

/*        RING WIDTH CLASSES        */

let ringWidth = []

SCALES.RING_WIDTH_SCALE.forEach(scale => {
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

COLORS.COLORS.forEach(color => {
  ringColor.push(
    {
      label:         `ring-${color.name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
      detail:        `--tw-ring-color: rgba(${color.rgb}, var(--tw-ring-opacity));`,
      documentation: `Set the outline ring color to #${color.hex}.`
    }
  )
})

/*        RING OPACITY CLASSES        */

let ringOpacity = []

SCALES.DEFAULT_OPACITY_SCALE.forEach(scale => {
  ringOpacity.push(
    {
      label:         `ring-opacity-${scale.name}`,
      color:         new Color('rgb', [0, 0, 0, parseFloat(scale.value)]),
      detail:        `--tw-ring-opacity: ${scale.value};`,
      documentation: `Set the opacity of an element's outline ring to ${scale.value}.`
    }
  )
})

/*        RING OFFSET WIDTH CLASSES        */

let ringOffsetWidth = []

SCALES.RING_OFFSET_WIDTH_SCALE.forEach(scale => {
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

COLORS.COLORS.forEach(color => {
  ringOffsetColor.push(
    {
      label:         `ring-offset-${color.name}`,
      color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
      detail:        `--tw-ring-offset-color: #${color.hex}; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`,
      documentation: `Set the outline ring offset color to #${color.hex}.`
    }
  )
})

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
