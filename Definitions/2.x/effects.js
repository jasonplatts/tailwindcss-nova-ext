'use strict'

const SCALES = require('./includes/scales.js')

/*        BOX SHADOW CLASSES        */

let boxShadow = [
  {
    label:'shadow-sm',
    detail:'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);',
    documentation:'Apply the sm box shadow to an element.'
  },
  {
    label:'shadow',
    detail:'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);',
    documentation:'Apply the normal outer box shadow to an element.'
  },
  {
    label:'shadow-md',
    detail:'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
    documentation:'Apply the md outer box shadow to an element.'
  },
  {
    label:'shadow-lg',
    detail:'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);',
    documentation:'Apply the lg outer box shadow to an element.'
  },
  {
    label:'shadow-xl',
    detail:'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);',
    documentation:'Apply the xl outer box shadow to an element.'
  },
  {
    label:'shadow-2xl',
    detail:'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);',
    documentation:'Apply the 2xl outer box shadow to an element.'
  },
  {
    label:'shadow-inner',
    detail:'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);',
    documentation:'Apply a subtle inset box shadow to an element. Useful for form controls or wells.'
  },
  {
    label:'shadow-none',
    detail:'box-shadow: none;',
    documentation:'Remove any existing box shadow styling on an element.'
  },
]

/*        OPACITY CLASSES        */

let opacity = []

for(let i = 0; i < SCALES.DEFAULT_OPACITY_SCALE.length; i++) {
  opacity.push(
    {
      label:`opacity-${SCALES.DEFAULT_OPACITY_SCALE[i].name}`,
      detail:`opacity: ${SCALES.DEFAULT_OPACITY_SCALE[i].value};`,
      documentation:`Set the opacity of an element to ${SCALES.DEFAULT_OPACITY_SCALE[i].value}.`
    }
  )
}

exports.effects = {
  boxShadow: boxShadow,
  opacity:   opacity
}
