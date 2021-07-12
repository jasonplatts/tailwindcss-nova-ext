'use strict'

const SCALES    = require('./includes/scales.js')

/*        FLEX DIRECTION CLASSES        */

let flexDirection = [
  {
    label:         'flex-row',
    detail:        'flex-direction: row;',
    documentation: 'Position flex items horizontally in the same direction as text.'
  },
  {
    label:         'flex-row-reverse',
    detail:        'flex-direction: row-reverse;',
    documentation: 'Position flex items horizontally in the opposite direction.'
  },
  {
    label:         'flex-col',
    detail:        'flex-direction: column;',
    documentation: 'Position flex items vertically.'
  },
  {
    label:         'flex-col-reverse',
    detail:        'flex-direction: column-reverse;',
    documentation: 'Position flex items vertically in the opposite direction.'
  }
]

/*        FLEW WRAP CLASSES        */

let flexWrap = [
  {
    label:         'flex-wrap',
    detail:        'flex-wrap: wrap;',
    documentation: 'Allow flex items to wrap.'
  },
  {
    label:         'flex-wrap-reverse',
    detail:        'flex-wrap: wrap-reverse;',
    documentation: 'Wrap flex items in the reverse direction.'
  },
  {
    label:         'flex-nowrap',
    detail:        'flex-wrap: nowrap;',
    documentation: 'Prevent flex items from wrapping, causing inflexible items to overflow their container if necessary.'
  }
]

/*        FLEX CLASSES        */

let flex = [
  {
    label:         'flex-1',
    detail:        'flex: 1 1 0%;',
    documentation: 'Allow a flex item to grow and shrink as needed, ignoring its initial size.'
  },
  {
    label:         'flex-auto',
    detail:        'flex: 1 1 auto;',
    documentation: 'Allow a flex item to grow and shrink, taking into account its initial size.'
  },
  {
    label:         'flex-initial',
    detail:        'flex: 0 1 auto;',
    documentation: 'Allow a flex item to shrink but not grow, taking into account its initial size.'
  },
  {
    label:         'flex-none',
    detail:        'flex: none;',
    documentation: 'Prevent a flex item from growing or shrinking.'
  }
]

/*        FLEX GROW CLASSES        */

let flexGrow = [
  {
    label:         'flex-grow-0',
    detail:        'flex-grow: 0;',
    documentation: 'Prevent a flex item from growing.'
  },
  {
    label:         'flex-grow',
    detail:        'flex-grow: 1;',
    documentation: 'Allow a flex item to grow to fill available space.'
  }
]

/*        FLEX SHRINK CLASSES        */

let flexShrink = [
  {
    label:         'flex-shrink-0',
    detail:        'flex-shrink: 0;',
    documentation: 'Prevent a flex item from shrinking.'
  },
  {
    label:         'flex-shrink',
    detail:        'flex-shrink: 1;',
    documentation: 'Allow a flex item to shrink if needed.'
  }
]

/*        ORDER CLASSES        */

let order = []

for(let i = 1; i <= 12; i++) {
  order.push(
    {
      label:         `order-${i}`,
      detail:        `order: ${i};`,
      documentation: `Set a flex elements order number to ${i}, rendering it in an order different than that of its order in the DOM.`
    }
  )
}

order.push(
  {
    label:         'order-first',
    detail:        'order: -9999;',
    documentation: 'Render a flex item first, regardless of its order in the DOM.'
  },
  {
    label:         'order-last',
    detail:        'order: 9999;',
    documentation: 'Render a flex item last, regardless of its order in the DOM.'
  },
  {
    label:         'order-none',
    detail:        'order: 0;',
    documentation: 'Render a flex item in its default order.'
  }
)

/*        GRID TEMPLATE COLUMNS CLASSES        */

let gridTemplateColumns = []

for(let i = 1; i <= 12; i++) {
  gridTemplateColumns.push(
    {
      label:         `grid-cols-${i}`,
      detail:        `grid-template-columns: repeat(${i}, minmax(0, 1fr));`,
      documentation: `Create a grid with ${i} equally sized columns.`
    }
  )
}

gridTemplateColumns.push(
  {
    label:         'grid-cols-none',
    detail:        'grid-template-columns: none;',
    documentation: 'Specify no explicit grid column template.'
  }
)

/*        GRID COLUMN START/END CLASSES        */

let gridColumnStartEnd = []

gridColumnStartEnd.push(
  {
    label:         'col-auto',
    detail:        'grid-column: auto;',
    documentation: 'Specify no explicit grid item placement or column span.'
  }
)

for(let i = 1; i <= 12; i++) {
  gridColumnStartEnd.push(
    {
      label:         `col-span-${i}`,
      detail:        `grid-column: span ${i} / span ${i};`,
      documentation: `Make an element span ${i} columns.`
    }
  )
}

gridColumnStartEnd.push(
  {
    label:         'col-span-full',
    detail:        'grid-column: 1 / -1;',
    documentation: 'Make an element span all columns.'
  }
)

for(let i = 1; i <= 13; i++) {
  gridColumnStartEnd.push(
    {
      label:         `col-start-${i}`,
      detail:        `grid-column-start: ${i};`,
      documentation: `Make an element start at grid line ${i}.`
    }
  )
}

gridColumnStartEnd.push(
  {
    label:         'col-start-auto',
    detail:        'grid-column-start: auto;',
    documentation: 'Specify no explicit grid item column start placement.'
  }
)

for(let i = 1; i <= 13; i++) {
  gridColumnStartEnd.push(
    {
      label:         `col-end-${i}`,
      detail:        `grid-column-end: ${i};`,
      documentation: `Make an element end at grid line ${i}.`
    }
  )
}

gridColumnStartEnd.push(
  {
    label:         'col-end-auto',
    detail:        'grid-column-end: auto;',
    documentation: 'Specify no explicit grid item column end placement.'
  }
)

/*        GRID TEMPLATE ROWS CLASSES        */

let gridTemplateRows = []

for(let i = 1; i <= 6; i++) {
  gridTemplateRows.push(
    {
      label:         `grid-rows-${i}`,
      detail:        `grid-template-rows: repeat(${i}, minmax(0, 1fr));`,
      documentation: `Create a grid with ${i} equally sized rows.`
    }
  )
}

gridTemplateRows.push(
  {
    label:         'grid-rows-none',
    detail:        'grid-template-rows: none;',
    documentation: 'Specify no explicit grid row template.'
  }
)

/*        GRID ROW START/END CLASSES        */

let gridRowStartEnd = []

gridRowStartEnd.push(
  {
    label:         'row-auto',
    detail:        'grid-row: auto;',
    documentation: 'Specify no explicit grid item placement or row span.'
  }
)

for(let i = 1; i <= 6; i++) {
  gridRowStartEnd.push(
    {
      label:         `row-span-${i}`,
      detail:        `grid-row: span ${i} / span ${i};`,
      documentation: `Make an element span ${i} rows.`
    }
  )
}

gridRowStartEnd.push(
  {
    label:         'row-span-full',
    detail:        'grid-row: 1 / -1;',
    documentation: 'Make an element span all rows.'
  }
)

for(let i = 1; i <= 7; i++) {
  gridRowStartEnd.push(
    {
      label:         `row-start-${i}`,
      detail:        `grid-row-start: ${i};`,
      documentation: `Make an element start at grid line ${i}.`
    }
  )
}

gridRowStartEnd.push(
  {
    label:         'row-start-auto',
    detail:        'grid-row-start: auto;',
    documentation: 'Specify no explicit grid item row start placement.'
  }
)

for(let i = 1; i <= 7; i++) {
  gridRowStartEnd.push(
    {
      label:         `row-end-${i}`,
      detail:        `grid-row-end: ${i};`,
      documentation: `Make an element end at grid line ${i}.`
    }
  )
}

gridRowStartEnd.push(
  {
    label:         'row-end-auto',
    detail:        'grid-row-end: auto;',
    documentation: 'Specify no explicit grid item row end placement.'
  }
)

/*        GRID AUTO FLOW CLASSES        */

let gridAutoFlow = [
  {
    label:         'grid-flow-row',
    detail:        'grid-auto-flow: row;',
    documentation: 'Specify that grid items fill each row, adding new rows as needed.'
  },
  {
    label:         'grid-flow-col',
    detail:        'grid-auto-flow: column;',
    documentation: 'Specify that grid items fill each column, adding new columns as needed.'
  },
  {
    label:         'grid-flow-row-dense',
    detail:        'grid-auto-flow: row dense;',
    documentation: 'Specify that grid items fill each row using an algorithm that attempts to fill holes earlier in the grid.'
  },
  {
    label:         'grid-flow-col-dense',
    detail:        'grid-auto-flow: column dense;',
    documentation: 'Specify that grid items fill each column using an algorithm that attempts to fill holes earlier in the grid.'
  }
]

/*        GRID AUTO COLUMNS CLASSES        */

let gridAutoColumns = [
  {
    label:         'auto-cols-auto',
    detail:        'grid-auto-columns: auto;',
    documentation: 'Specify that in an implicitly-created grid, column size should be determined by the size of the parent container.'
  },
  {
    label:         'auto-cols-min',
    detail:        'grid-auto-columns: min-content;',
    documentation: 'Specify that in an implicitly-created grid, column size should be determined by the smallest item in the column.'
  },
  {
    label:         'auto-cols-max',
    detail:        'grid-auto-columns: max-content;',
    documentation: 'Specify that in an implicitly-created grid, column size should be determined by the largest item in the column.'
  },
  {
    label:         'auto-cols-fr',
    detail:        'grid-auto-columns: minmax(0, 1fr);',
    documentation: 'Specify that implicit grid columns should have no minimum size and a maximum size no larger than one part of available space.'
  }
]

/*        GRID AUTO ROWS CLASSES        */

let gridAutoRows = [
  {
    label:         'auto-rows-auto',
    detail:        'grid-auto-rows: auto;',
    documentation: 'Specify that in an implicitly-created grid, row size should be determined by the size of the parent container.'
  },
  {
    label:         'auto-rows-min',
    detail:        'grid-auto-rows: min-content;',
    documentation: 'Specify that in an implicitly-created grid, row size should be determined by the smallest item in the row.'
  },
  {
    label:         'auto-rows-max',
    detail:        'grid-auto-rows: max-content;',
    documentation: 'Specify that in an implicitly-created grid, row size should be determined by the largest item in the row.'
  },
  {
    label:         'auto-rows-fr',
    detail:        'grid-auto-rows: minmax(0, 1fr);',
    documentation: 'Specify that implicit grid rows should have no minimum size and a maximum size no larger than one part of available space.'
  }
]

/*        GAP CLASSES        */

let gap = []

for(let i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  gap.push(
    {
      label:         `gap-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:        `gap: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation: `Change the gutter size in a grid layout to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`
    }
  )
}

for(let i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  gap.push(
    {
      label:         `gap-x-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:        `column-gap: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation: `Change the gutter size between columns in grid layouts to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`
    }
  )
}

for(let i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  gap.push(
    {
      label:         `gap-y-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:        `row-gap: ${SCALES.DEFAULT_SPACING_SCALE[i].value};`,
      documentation: `Change the gutter size between rows in grid layouts to ${SCALES.DEFAULT_SPACING_SCALE[i].value}.`
    }
  )
}

/*        JUSTIFY CONTENT CLASSES        */

let justifyContent = [
  {
    label:         'justify-start',
    detail:        'justify-content: flex-start;',
    documentation: 'Justify flex items against the start of the container\'s main axis.'
  },
  {
    label:         'justify-end',
    detail:        'justify-content: flex-end;',
    documentation: 'Justify flex items against the end of the container\'s main axis.'
  },
  {
    label:         'justify-center',
    detail:        'justify-content: center;',
    documentation: 'Justify flex items along the center of the container\'s main axis.'
  },
  {
    label:         'justify-between',
    detail:        'justify-content: space-between;',
    documentation: 'Distribute flex items along the container\'s main axis so as there is equal space between each item.'
  },
  {
    label:         'justify-around',
    detail:        'justify-content: space-around;',
    documentation: 'Distribute flex items along the container\'s main axis so as there is equal space on the sides of each item.'
  },
  {
    label:         'justify-evenly',
    detail:        'justify-content: space-evenly;',
    documentation: 'Distribute flex items along the container\'s main axis so as there is equal space between each item and the start and end edge of the container.'
  }
]

/*        JUSTIFY ITEMS CLASSES        */

let justifyItems = [
  {
    label:         'justify-items-start',
    detail:        'justify-items: start;',
    documentation: 'Justify grid items toward the start of their inline axis.'
  },
  {
    label:         'justify-items-end',
    detail:        'justify-items: end;',
    documentation: 'Justify grid items toward the end of their inline axis.'
  },
  {
    label:         'justify-items-center',
    detail:        'justify-items: center;',
    documentation: 'Justify grid items along their inline axis.'
  },
  {
    label:         'justify-items-stretch',
    detail:        'justify-items: stretch;',
    documentation: 'Stretch items along their inline axis if the combined size of items is less than the size of their container.'
  },
]

/*        JUSTIFY SELF CLASSES        */

let justifySelf = [
  {
    label:         'justify-self-auto',
    detail:        'justify-self: auto;',
    documentation: 'Automatically align an item based on the value of the grid\'s justify-items property.'
  },
  {
    label:         'justify-self-start',
    detail:        'justify-self: start;',
    documentation: 'Align a grid item to the start of its inline axis.'
  },
  {
    label:         'justify-self-end',
    detail:        'justify-self: end;',
    documentation: 'Align a grid item to the end of its inline axis.'
  },
  {
    label:         'justify-self-center',
    detail:        'justify-self: center;',
    documentation: 'Align a grid item along the center of its inline axis.'
  },
  {
    label:         'justify-self-stretch',
    detail:        'justify-self: stretch;',
    documentation: 'Stretch a grid item to fill the grid area on its inline axis.'
  },
]

/*        ALIGN CONTENT CLASSES        */

let alignContent = [
  {
    label:         'content-center',
    detail:        'align-content: center;',
    documentation: 'Pack rows in a container in the center of the cross axis.'
  },
  {
    label:         'content-start',
    detail:        'align-content: flex-start;',
    documentation: 'Pack rows in a container against the start of the cross axis.'
  },
  {
    label:         'content-end',
    detail:        'align-content: flex-end;',
    documentation: 'Pack rows in a container against the end of the cross axis.'
  },
  {
    label:         'content-between',
    detail:        'align-content: space-between;',
    documentation: 'Distribute rows in a container so as there is equal space between each line.'
  },
  {
    label:         'content-around',
    detail:        'align-content: space-around;',
    documentation: 'Distribute rows in a container so as there is equal space around each line.'
  },
  {
    label:         'content-evenly',
    detail:        'align-content: space-evenly;',
    documentation: 'Distribute rows in a container so as there is equal space between each line, including the top and bottom of the container.'
  }
]

/*        ALIGN ITEMS CLASSES        */

let alignItems = [
  {
    label:         'items-start',
    detail:        'align-items: flex-start;',
    documentation: 'Align items to the start of the container\'s cross axis.'
  },
  {
    label:         'items-end',
    detail:        'align-items: flex-end;',
    documentation: 'Align items to the end of the container\'s cross axis.'
  },
  {
    label:         'items-center',
    detail:        'align-items: center;',
    documentation: 'Align items along the center of the container\'s cross axis.'
  },
  {
    label:         'items-baseline',
    detail:        'align-items: baseline;',
    documentation: 'Align items along the container\'s cross axis so as their baselines align.'
  },
  {
    label:         'items-stretch',
    detail:        'align-items: stretch;',
    documentation: 'Stretch items to fill the container\'s cross axis.'
  },
]

/*        ALIGN SELF CLASSES        */

let alignSelf = [
  {
    label:         'self-auto',
    detail:        'align-self: auto;',
    documentation: 'Align an item based on the value of the container\'s align-items property.'
  },
  {
    label:         'self-start',
    detail:        'align-self: start;',
    documentation: 'Align an item to the start of the container\'s cross axis, regardless of the container\'s align-items value.'
  },
  {
    label:         'self-end',
    detail:        'align-self: end;',
    documentation: 'Align an an item to the end of the container\'s cross axis, regardless of the container\'s align-items value.'
  },
  {
    label:         'self-center',
    detail:        'align-self: center;',
    documentation: 'Align an item along the center of the container\'s cross axis, regardless of the container\'s align-items value.'
  },
  {
    label:         'self-stretch',
    detail:        'align-self: stretch;',
    documentation: 'Stretch an item to fill the container\'s cross axis, regardless of the container\'s align-items value.'
  },
]

/*        PLACE CONTENT CLASSES        */

let placeContent = [
  {
    label:         'place-content-center',
    detail:        'place-content: center;',
    documentation: 'Pack items in the center of the block axis.'
  },
  {
    label:         'place-content-start',
    detail:        'place-content: start;',
    documentation: 'Pack items against the start of the block axis.'
  },
  {
    label:         'place-content-end',
    detail:        'place-content: end;',
    documentation: 'Pack items against the end of the block axis.'
  },
  {
    label:         'place-content-between',
    detail:        'place-content: space-between;',
    documentation: 'Distribute grid items so as there is an equal amount of space between each row.'
  },
  {
    label:         'place-content-around',
    detail:        'place-content: space-around;',
    documentation: 'Distribute grid items so as there is an equal amount of space around each row.'
  },
  {
    label:         'place-content-evenly',
    detail:        'place-content: space-evenly;',
    documentation: 'Distribute grid items so as they are evenly spaced on the block axis.'
  },
  {
    label:         'place-content-stretch',
    detail:        'place-content: stretch;',
    documentation: 'Stretch grid items along their grid areas on the block axis.'
  }
]

/*        PLACE ITEMS CLASSES        */

let placeItems = [
  {
    label:         'place-items-start',
    detail:        'place-items: start;',
    documentation: 'Place grid items on the start of their grid areas on both axis.'
  },
  {
    label:         'place-items-end',
    detail:        'place-items: end;',
    documentation: 'Place grid items on the end of their grid areas on both axis.'
  },
  {
    label:         'place-items-center',
    detail:        'place-items: center;',
    documentation: 'Place grid items on the center of their grid areas on both axis.'
  },
  {
    label:         'place-items-stretch',
    detail:        'place-items: stretch;',
    documentation: 'Stretch items along their grid areas on both axis.'
  }
]

/*        PLACE SELF CLASSES        */

let placeSelf = [
  {
    label:         'place-self-auto',
    detail:        'place-self: auto;',
    documentation: 'Align an item based on the value of the container\'s place-items property.'
  },
  {
    label:         'place-self-start',
    detail:        'place-self: start;',
    documentation: 'Align an item to the start on both axes.'
  },
  {
    label:         'place-self-end',
    detail:        'place-self: end;',
    documentation: 'Align an item to the end on both axes.'
  },
  {
    label:         'place-self-center',
    detail:        'place-self: center;',
    documentation: 'Align an item at the center on both axes.'
  },
  {
    label:         'place-self-stretch',
    detail:        'place-self: stretch;',
    documentation: 'Stretch an item on both axes.'
  }
]

exports.flexboxAndGrid = {
  flexDirection:       flexDirection,
  flexWrap:            flexWrap,
  flex:                flex,
  flexGrow:            flexGrow,
  flexShrink:          flexShrink,
  order:               order,
  gridTemplateColumns: gridTemplateColumns,
  gridColumnStartEnd:  gridColumnStartEnd,
  gridTemplateRows:    gridTemplateRows,
  gridRowStartEnd:     gridRowStartEnd,
  gridAutoFlow:        gridAutoFlow,
  gridAutoColumns:     gridAutoColumns,
  gridAutoRows:        gridAutoRows,
  gap:                 gap,
  justifyContent:      justifyContent,
  justifyItems:        justifyItems,
  justifySelf:         justifySelf,
  alignContent:        alignContent,
  alignItems:          alignItems,
  alignSelf:           alignSelf,
  placeContent:        placeContent,
  placeItems:          placeItems,
  placeSelf:           placeSelf
}
