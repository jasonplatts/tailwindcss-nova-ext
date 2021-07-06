const SCALES = require('./includes/scales.js')

/*        WIDTH CLASSES        */

const COMBINED_WIDTH_SCALE = [
  ...SCALES.DEFAULT_SPACING_SCALE,
  ...SCALES.CORE_DEFAULT_FRACTIONAL_SCALE,
  ...SCALES.FIFTHS_FRACTIONAL_SCALE,
  ...SCALES.SIXTHS_FRACTIONAL_SCALE,
  ...SCALES.TWELFTHS_FRACTIONAL_SCALE
]

let width = []

width.push(
  {
    label:'w-auto',
    detail:'width: auto;',
    documentation:'Let the browser calculate and select the width for an element.'
  }
)

for(i = 0; i < COMBINED_WIDTH_SCALE.length; i++) {
  width.push(
    {
      label:`w-${COMBINED_WIDTH_SCALE[i].name}`,
      detail:`width: ${COMBINED_WIDTH_SCALE[i].value};`,
      documentation:`Set the width of an element to ${COMBINED_WIDTH_SCALE[i].value}.`
    }
  )
}

width.push(
  {
    label:'w-screen',
    detail:'width: 100vw;',
    documentation:'Make an element span the entire width of the viewport.'
  },
  {
    label:'w-min',
    detail:'width: min-content',
    documentation:'Set an element width to the minimum content width.'
  },
  {
    label:'w-max',
    detail:'width: max-content',
    documentation:'Set an element width to the maximum content width.'
  }
)

/*        MIN-WIDTH CLASSES        */

let minWidth = []

minWidth.push(
  {
    label:'min-w-0',
    detail:'min-width: 0;',
    documentation:'Set the minimum element width to 0.'
  },
  {
    label:'min-w-full',
    detail:'min-width: 100%;',
    documentation:'Set the minimum element width to 100%.'
  },
  {
    label:'min-w-min',
    detail:'min-width: min-content',
    documentation:'Set the minimum width of an element to the minimum content width.'
  },
  {
    label:'min-w-max',
    detail:'min-width: max-content',
    documentation:'Set the minimum width of an element to the maximum content width.'
  }
)

/*        MAX-WIDTH CLASSES        */

const MAX_WIDTH_SCALE = [
  { name:'0', value:'0rem' },
  { name:'none', value:'none' },
  { name:'xs', value:'20rem' },
  { name:'sm', value:'24rem' },
  { name:'md', value:'28rem' },
  { name:'lg', value:'32rem' },
  { name:'xl', value:'36rem' },
  { name:'2xl', value:'42rem' },
  { name:'3xl', value:'48rem' },
  { name:'4xl', value:'56rem' },
  { name:'5xl', value:'64rem' },
  { name:'6xl', value:'72rem' },
  { name:'7xl', value:'80rem' },
  { name:'full', value:'100%' },
  { name:'min', value:'min-content' },
  { name:'max', value:'max-content' },
  { name:'prose', value:'65ch' },
  { name:'screen-sm', value:'640px' },
  { name:'screen-md', value:'768px' },
  { name:'screen-lg', value:'1024px' },
  { name:'screen-xl', value:'1280px' },
  { name:'screen-2xl', value:'1536px' }
]

let maxWidth = []

for(i = 0; i < MAX_WIDTH_SCALE.length; i++) {
  maxWidth.push(
    {
      label:`max-w-${MAX_WIDTH_SCALE[i].name}`,
      detail:`max-width: ${MAX_WIDTH_SCALE[i].value};`,
      documentation:`Set the maximum element width to ${MAX_WIDTH_SCALE[i].value}.`
    }
  )
}

/*        HEIGHT CLASSES        */

const COMBINED_HEIGHT_SCALE = [
  ...SCALES.DEFAULT_SPACING_SCALE,
  ...SCALES.CORE_DEFAULT_FRACTIONAL_SCALE,
  ...SCALES.FIFTHS_FRACTIONAL_SCALE,
  ...SCALES.SIXTHS_FRACTIONAL_SCALE
]

let height = []

height.push(
  {
    label:'h-auto',
    detail:'height: auto;',
    documentation:'Let the browser determine the height for an element.'
  },
  {
    label:'h-screen',
    detail:'height: 100vh;',
    documentation:'Make an element to span the entire height of the viewport.'
  }
)

for(i = 0; i < COMBINED_HEIGHT_SCALE.length; i++) {
  height.push(
    {
      label:`h-${COMBINED_HEIGHT_SCALE[i].name}`,
      detail:`height: ${COMBINED_HEIGHT_SCALE[i].value};`,
      documentation:`Set an element's height to ${COMBINED_HEIGHT_SCALE[i].value}.`
    }
  )
}

/*        MIN-HEIGHT CLASSES        */

let minHeight = [
  {
    label:'min-h-0',
    detail:'min-height: 0;',
    documentation:'Set the minimum element height to 0.'
  },
  {
    label:'min-h-full',
    detail:'min-height: 100%;',
    documentation:'Set the minimum element height to 100% of its parent, as long as the parent has a defined height.'
  },
  {
    label:'min-h-screen',
    detail:'min-height: 100vh;',
    documentation:'Set the minimum element height to span the entire height of the viewport.'
  }
]

/*        MAX-HEIGHT CLASSES        */

let maxHeight = []

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  height.push(
    {
      label:`max-h-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`max-height: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation:`Set the maximum height of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`
    }
  )
}

maxHeight.push(
  {
    label:'max-h-full',
    detail:'max-height: 100%;',
    documentation:'Set the maximum element height to 100% of its parent, as long as the parent has a defined height.'
  },
  {
    label:'max-h-screen',
    detail:'max-height: 100vh;',
    documentation:'Set the maximum element height to span the entire height of the viewport.'
  }
)

exports.sizing = {
  width:     width,
  minWidth:  minWidth,
  maxWidth:  maxWidth,
  height:    height,
  minHeight: minHeight,
  maxHeight: maxHeight
}
