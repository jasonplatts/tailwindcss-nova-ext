const COLORS    = require('./includes/colors.js')
const FUNCTIONS = require('../../Scripts/functions.js')
const SCALES    = require('./includes/scales.js')

/*        BORDER RADIUS CLASSES        */

const BORDER_RADIUS_SCALE = [
  { name:'-none', value:'0px' },
  { name:'-sm',   value:'0.125rem' },
  { name:'',      value:'0.25rem' },
  { name:'-md',   value:'0.375rem' },
  { name:'-lg',   value:'0.5rem' },
  { name:'-xl',   value:'0.75rem' },
  { name:'-2xl',  value:'1rem' },
  { name:'-3xl',  value:'1.5rem' },
  { name:'-full', value:'9999px' },
]

let borderRadius = []

for(i = 0; i < BORDER_RADIUS_SCALE.length; i++) {
  borderRadius.push(
    {
      label:`rounded${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-t${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-top-left-radius: ${BORDER_RADIUS_SCALE[i].value}; border-top-right-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the top left and top right border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-r${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-top-right-radius: ${BORDER_RADIUS_SCALE[i].value}; border-bottom-right-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the top right and bottom right border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-b${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-bottom-right-radius: ${BORDER_RADIUS_SCALE[i].value}; border-bottom-left-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the bottom left and bottom right border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-l${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-top-left-radius: ${BORDER_RADIUS_SCALE[i].value}; border-bottom-left-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the top left and bottom left border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-tl${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-top-left-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the top left border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-tr${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-top-right-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the top right border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-br${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-bottom-right-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the bottom right border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    },
    {
      label:`rounded-bl${BORDER_RADIUS_SCALE[i].name}`,
      detail:`border-bottom-left-radius: ${BORDER_RADIUS_SCALE[i].value};`,
      documentation:`Set the bottom left border radius to ${BORDER_RADIUS_SCALE[i].value}.`
    }
  )
}

/*        BORDER WIDTH CLASSES        */

const BORDER_WIDTH_SCALE = [
  { name:'-0', value:'0px' },
  { name:'-2', value:'2px' },
  { name:'-4', value:'4px' },
  { name:'-8', value:'8px' },
  { name:'',   value:'1px' }
]

let borderWidth = []

for(i = 0; i < BORDER_WIDTH_SCALE.length; i++) {
  borderWidth.push(
    {
      label:`border${BORDER_WIDTH_SCALE[i].name}`,
      detail:`border-width: ${BORDER_WIDTH_SCALE[i].value};`,
      documentation:`Set the border width for all sides of an element to ${BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:`border-t${BORDER_WIDTH_SCALE[i].name}`,
      detail:`border-top-width: ${BORDER_WIDTH_SCALE[i].value};`,
      documentation:`Set the top border width of an element to ${BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:`border-r${BORDER_WIDTH_SCALE[i].name}`,
      detail:`border-right-width: ${BORDER_WIDTH_SCALE[i].value};`,
      documentation:`Set the right border width of an element to ${BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:`border-b${BORDER_WIDTH_SCALE[i].name}`,
      detail:`border-bottom-width: ${BORDER_WIDTH_SCALE[i].value};`,
      documentation:`Set the bottom border width of an element to ${BORDER_WIDTH_SCALE[i].value}.`
    },
    {
      label:`border-l${BORDER_WIDTH_SCALE[i].name}`,
      detail:`border-left-width: ${BORDER_WIDTH_SCALE[i].value};`,
      documentation:`Set the left border width of an element to ${BORDER_WIDTH_SCALE[i].value}.`
    }
  )
}

/*        BORDER COLOR CLASSES        */

let borderColor = [
  {
    label:'border-transparent',
    color: new Color('rgb', [0, 0, 0, 0]),
    detail:'border-color: transparent;',
    documentation:'Set the border color of an element to transparent.'
  },
  {
    label:'border-current',
    detail:'border-color: currentColor;',
    documentation:'Set the border color of an element to the currentColor.'
  }
]

for(i = 0; i < COLORS.COLORS.length; i++) {
  borderColor.push(
    {
      label:'border-' + COLORS.COLORS[i].name,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:'border-color: #' + COLORS.COLORS[i].value + ';',
      documentation:'Set the border color of an element to #' + COLORS.COLORS[i].value + '.'
    }
  )
}

/*        BORDER OPACITY CLASSES        */

let borderOpacity = []

for(i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  borderOpacity.push(
    {
      label:`border-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color: new Color('rgb', [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:`--border-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation:`Set the opacity of an element's border to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

/*        BORDER STYLE CLASSES        */

let borderStyle = [
  {
    label:'border-solid',
    detail:'border-style: solid;',
    documentation:'Set an element\'s border style to solid.'
  },
  {
    label:'border-dashed',
    detail:'border-style: dashed;',
    documentation:'Set an element\'s border style to dashed.'
  },
  {
    label:'border-dotted',
    detail:'border-style: dotted;',
    documentation:'Set an element\'s border style to dotted.'
  },
  {
    label:'border-double',
    detail:'border-style: double;',
    documentation:'Set an element\'s border style to double.'
  },
  {
    label:'border-none',
    detail:'border-style: none;',
    documentation:'Remove an element\'s border style.'
  }
]

/*        DIVIDE WIDTH CLASSES        */

const DIVIDE_WIDTH_SCALE = [
  { name:'-0', value:'0px' },
  { name:'-2', value:'2px' },
  { name:'-4', value:'4px' },
  { name:'-8', value:'8px' },
  { name:'',   value:'1px' }
]

divideWidth = []

for(i = 0; i < DIVIDE_WIDTH_SCALE.length; i++) {
  divideWidth.push(
    {
      label:`divide-y${DIVIDE_WIDTH_SCALE[i].name}`,
      detail:`border-top-width: ${DIVIDE_WIDTH_SCALE[i].value};`,
      documentation:`Set border width between vertical (stacked) children elements to ${DIVIDE_WIDTH_SCALE[i].value}.`
    },
    {
      label:`divide-x${DIVIDE_WIDTH_SCALE[i].name}`,
      detail:`border-left-width: ${DIVIDE_WIDTH_SCALE[i].value};`,
      documentation:`Set border width between horizontal children elements to ${DIVIDE_WIDTH_SCALE[i].value}.`
    }
  )
}

divideWidth.push(
  {
    label:'divide-x-reverse',
    detail:'--divide-x-reverse: 1;',
    documentation:'Set border width between horizontal children elements to 0. Use when elements are in reverse order, such as flex-row-reverse.'
  },
  {
    label:'divide-x-reverse',
    detail:'--divide-x-reverse: 1;',
    documentation:'Set border width between horizontal children elements to 0. Use when elements are in reverse order, such as flex-row-reverse.'
  }
)

/*        DIVIDE COLOR CLASSES        */

let divideColor = []

divideColor.push(
  {
    label:'divide-transparent',
    color: new Color('rgb', [0, 0, 0, 0]),
    detail:'border-color: transparent;',
    documentation:'Set the border color between elements using divide utilities to transparent.'
  },
  {
    label:'divide-current',
    detail:'border-color: currentColor;',
    documentation:'Set the border color between elements using divide utilities to the currentColor.'
  }
)

for(i = 0; i < COLORS.COLORS.length; i++) {
  divideColor.push(
    {
      label:'divide-' + COLORS.COLORS[i].name,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:'border-color: #' + COLORS.COLORS[i].value + ';',
      documentation:'Set the border color between elements using divide utilities to #' + COLORS.COLORS[i].value + '.'
    }
  )
}

/*        DIVIDE OPACITY CLASSES        */

let divideOpacity = []

for(i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  divideOpacity.push(
    {
      label:`divide-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color: new Color('rgb', [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:`--divide-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation:`Set the opacity of the borders between elements using the divide utilities to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

/*        DIVIDE STYLE CLASSES        */

let divideStyle = [
  {
    label:'divide-solid',
    detail:'border-style: solid;',
    documentation:'Set the styles of the borders between elements using the divide utilities to solid.'
  },
  {
    label:'divide-dashed',
    detail:'border-style: dashed;',
    documentation:'Set the styles of the borders between elements using the divide utilities to dashed.'
  },
  {
    label:'divide-dotted',
    detail:'border-style: dotted;',
    documentation:'Set the styles of the borders between elements using the divide utilities to dotted.'
  },
  {
    label:'divide-double',
    detail:'border-style: double;',
    documentation:'Set the styles of the borders between elements using the divide utilities to double.'
  },
  {
    label:'divide-none',
    detail:'border-style: none;',
    documentation:'Remove the styles of the borders between elements using the divide utilities.'
  }
]

/*        RING WIDTH CLASSES        */

let ringWidth = []

const RING_WIDTH_SCALE = [
  { name:'-0', value:'0px' },
  { name:'-1', value:'1px' },
  { name:'-2', value:'2px' },
  { name:'-4', value:'4px' },
  { name:'-8', value:'8px' },
  { name:'', value:'3px' },
]

for(i = 0; i < RING_WIDTH_SCALE.length; i++) {
  ringWidth.push(
    {
      label:`ring${RING_WIDTH_SCALE[i].name}`,
      detail:`box-shadow: ${RING_WIDTH_SCALE[i].value};`,
      documentation:`Apply a solid box-shadow of ${RING_WIDTH_SCALE[i].value}.`
    }
  )
}

ringWidth.push(
  {
    label:'ring-inset',
    detail:'--tw-ring-inset: inset;',
    documentation:'Force a ring to render on the inside of an element instead of the outside.'
  }
)

/*        RING COLOR CLASSES        */

let ringColor = [
  {
    label:'ring-transparent',
    color: new Color('rgb', [0, 0, 0, 0]),
    detail:'ring-color: transparent;',
    documentation:'Set the outline ring color to transparent.'
  },
  {
    label:'ring-current',
    detail:'ring-color: currentColor;',
    documentation:'Set the outline ring color to the currentColor.'
  }
]

for(i = 0; i < COLORS.COLORS.length; i++) {
  ringColor.push(
    {
      label:`ring-${COLORS.COLORS[i].name}`,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:`--tw-ring-color: #'${COLORS.COLORS[i].value};`,
      documentation:`Set the outline ring color to #${COLORS.COLORS[i].value}.`
    }
  )
}

/*        RING OPACITY CLASSES        */

let ringOpacity = []

for(i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  ringOpacity.push(
    {
      label:`ring-opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      color: new Color('rgb', [0, 0, 0, parseFloat(SCALES.DEFAULT_OPACITY_SCALE[i].value)]),
      detail:`--tw-ring-opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation:`Set the opacity of an element's outline ring to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

/*        RING OFFSET WIDTH CLASSES        */

const RING_OFFSET_WIDTH_SCALE = [
  { name:'0', value:'0px' },
  { name:'1', value:'1px' },
  { name:'2', value:'2px' },
  { name:'4', value:'4px' },
  { name:'8', value:'8px' },
]

let ringOffsetWidth = []

for(i = 0; i < RING_OFFSET_WIDTH_SCALE.length; i++) {
  ringOffsetWidth.push(
    {
      label:`ring-offset-${RING_OFFSET_WIDTH_SCALE[i].name}`,
      detail:`--tw-ring-offset-width: ${RING_OFFSET_WIDTH_SCALE[i].value}`,
      documentation:`Set the outline ring width to ${RING_OFFSET_WIDTH_SCALE[i].value}. Use to simulate an offset.`
    }
  )
}

/*        RING OFFSET COLOR CLASSES        */

let ringOffsetColor = [
  {
    label:'ring-offset-transparent',
    color: new Color('rgb', [0, 0, 0, 0]),
    detail:'ring-color: transparent;',
    documentation:'Set the outline ring color to transparent.'
  },
  {
    label:'ring-offset-current',
    detail:'ring-color: currentColor;',
    documentation:'Set the outline ring color to the currentColor.'
  }
]

for(i = 0; i < COLORS.COLORS.length; i++) {
  ringOffsetColor.push(
    {
      label:`ring-offset-${COLORS.COLORS[i].name}`,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:`--tw-ring-offset-color: #'${COLORS.COLORS[i].value};`,
      documentation:`Set the outline ring offset color to #${COLORS.COLORS[i].value}.`
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
