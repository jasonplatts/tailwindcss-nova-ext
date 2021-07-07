'use strict'

const FUNCTIONS = require('./includes/functions.js')
const SCALES    = require('./includes/scales.js')

/*        TRANSFORM CLASSES        */

let transform = [
  {
    label:'transform',
    detail:'',
    documentation:'Enable transformations.'
  },
  {
    label:'transform-gpu',
    detail:'',
    documentation:'Enable transformations to be executed on the GPU instead of the CPU.'
  },
  {
    label:'transform-none',
    detail:'',
    documentation:'Disable transformations.'
  }
]

/*        TRANSFORM ORIGIN CLASSES        */

let transformOrigin = [
  {
    label:'origin-center',
    detail:'transform-origin: center;',
    documentation:'Set an element\'s transform origin to center. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-top',
    detail:'transform-origin: top;',
    documentation:'Set an element\'s transform origin to top. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-top-right',
    detail:'transform-origin: top right;',
    documentation:'Set an element\'s transform origin to top right. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-right',
    detail:'transform-origin: right;',
    documentation:'Set an element\'s transform origin to right. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-bottom-right',
    detail:'transform-origin: bottom right;',
    documentation:'Set an element\'s transform origin to bottom right. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-bottom',
    detail:'transform-origin: bottom;',
    documentation:'Set an element\'s transform origin to bottom. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-bottom-left',
    detail:'transform-origin: bottom left;',
    documentation:'Set an element\'s transform origin to bottom left. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-left',
    detail:'transform-origin: left;',
    documentation:'Set an element\'s transform origin to left. The transform origin is the point of an element where the transition pivots.'
  },
  {
    label:'origin-top-left',
    detail:'transform-origin: top left;',
    documentation:'Set an element\'s transform origin to top left. The transform origin is the point of an element where the transition pivots.'
  }
]

/*        SCALE CLASSES        */
const SCALES_SCALE = [
  { name:'0',   value:'0' },
  { name:'50',  value:'.5' },
  { name:'75',  value:'.75' },
  { name:'90',  value:'.9' },
  { name:'95',  value:'.95' },
  { name:'100', value:'1' },
  { name:'105', value:'1.05' },
  { name:'110', value:'1.1' },
  { name:'125', value:'1.25' },
  { name:'150', value:'1.5' },
]

let scale = []

for(let i = 0; i < SCALES_SCALE.length; i++) {
  scale.push(
    {
      label:`scale-${SCALES_SCALE[i].name}`,
      detail:`--transform-scale-x: ${SCALES_SCALE[i].value}; --transform-scale-y: ${SCALES_SCALE[i].value};`,
      documentation:`Set an element's scale x and y percentages to ${SCALES_SCALE[i].value}. The transform utility must first be specified.`
    },
    {
      label:`scale-x-${SCALES_SCALE[i].name}`,
      detail:`--transform-scale-x: ${SCALES_SCALE[i].value};`,
      documentation:`Set an element's scale x percentages to ${SCALES_SCALE[i].value}. The transform utility must first be specified.`
    },
    {
      label:`scale-y-${SCALES_SCALE[i].name}`,
      detail:`--transform-scale-y: ${SCALES_SCALE[i].value};`,
      documentation:`Set an element's scale y percentage to ${SCALES_SCALE[i].value}. The transform utility must first be specified.`
    }
  )
}

/*        ROTATE CLASSES        */

const ROTATE_SCALE = [
  { name:'1',   value:'1deg' },
  { name:'2',   value:'2deg' },
  { name:'3',   value:'3deg' },
  { name:'6',   value:'6deg' },
  { name:'12',  value:'12deg' },
  { name:'45',  value:'45deg' },
  { name:'90',  value:'90deg' },
  { name:'180', value:'180deg' }
]

let rotate = []

rotate.push(
  {
    label:'rotate-0',
    detail:'--transform-rotate: 0;',
    documentation:'Set an element\'s rotation angle to 0. The transform utility must first be used.'
  }
)

for(let i = 0; i < ROTATE_SCALE.length; i++) {
  rotate.push(
    {
      label:`rotate-${ROTATE_SCALE[i].name}`,
      detail:`--transform-rotate: ${ROTATE_SCALE[i].value};`,
      documentation:`Set an element's rotation angle to ${ROTATE_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`-rotate-${ROTATE_SCALE[i].name}`,
      detail:`--transform-rotate: -${ROTATE_SCALE[i].value};`,
      documentation:`Set an element's rotation angle to -${ROTATE_SCALE[i].value}. The transform utility must first be used.`
    }
  )
}

/*        TRANSLATE CLASSES        */

const TRANSLATE_SCALE = [...SCALES.DEFAULT_SPACING_SCALE, ...SCALES.CORE_DEFAULT_FRACTIONAL_SCALE]

let translate = []

function addTranslateClasses(negative = '') {
  let objectsArray = []

  for(let i = 0; i < TRANSLATE_SCALE.length; i++) {
    let prefix = FUNCTIONS.getValuePrefix(negative, TRANSLATE_SCALE[i].value)

    objectsArray.push(
      {
        label:`${negative}translate-x-${TRANSLATE_SCALE[i].name}`,
        detail:`--transform-translate-x: ${prefix}${TRANSLATE_SCALE[i].value};`,
        documentation:`Set an element's x-axis translate amount to ${prefix}${TRANSLATE_SCALE[i].value}. The transform utility must first be used.`
      },
      {
        label:`${negative}translate-y-${TRANSLATE_SCALE[i].name}`,
        detail:`--transform-translate-y: ${prefix}${TRANSLATE_SCALE[i].value};`,
        documentation:`Set an element's y-axis translate amount to ${prefix}${TRANSLATE_SCALE[i].value}. The transform utility must first be used.`
      }
    )
  }

  return objectsArray
}

translate = [...addTranslateClasses(), ...addTranslateClasses('-')]

/*        SKEW CLASSES        */

const SKEW_SCALE = [
  { name:'1',  value:'1deg' },
  { name:'2',  value:'2deg' },
  { name:'3',  value:'3deg' },
  { name:'6',  value:'6deg' },
  { name:'12', value:'12deg' }
]

let skew = []

skew.push(
  {
    label:'skew-x-0',
    detail:'--transform-skew-x: 0;',
    documentation:'Set an element\'s x-axis skew angle to 0. The transform utility must first be used.'
  },
  {
    label:'skew-y-0',
    detail:'--transform-skew-y: 0;',
    documentation:'Set an element\'s y-axis skew angle to 0. The transform utility must first be used.'
  }
)

for(let i = 0; i < SKEW_SCALE.length; i++) {
  skew.push(
    {
      label:`skew-x-${SKEW_SCALE[i].name}`,
      detail:`--transform-skew-x: ${SKEW_SCALE[i].value};`,
      documentation:`Set an element's x-axis skew angle to ${SKEW_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`-skew-x-${SKEW_SCALE[i].name}`,
      detail:`--transform-skew-x: -${SKEW_SCALE[i].value};`,
      documentation:`Set an element's x-axis skew angle to -${SKEW_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`skew-y-${SKEW_SCALE[i].name}`,
      detail:`--transform-skew-y: ${SKEW_SCALE[i].value};`,
      documentation:`Set an element's y-axis skew angle to ${SKEW_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`-skew-y-${SKEW_SCALE[i].name}`,
      detail:`--transform-skew-y: -${SKEW_SCALE[i].value};`,
      documentation:`Set an element's y-axis skew angle to -${SKEW_SCALE[i].value}. The transform utility must first be used.`
    }
  )
}

exports.transforms = {
  transform:       transform,
  transformOrigin: transformOrigin,
  scale:           scale,
  rotate:          rotate,
  translate:       translate,
  skew:            skew
}
