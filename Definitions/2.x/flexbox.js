/*        FLEX DIRECTION CLASSES        */

let flexDirection = [
  {
    label:'flex-row',
    detail:'flex-direction: row;',
    documentation:'Position flex items horizontally in the same direction as text.'
  },
  {
    label:'flex-row-reverse',
    detail:'flex-direction: row-reverse;',
    documentation:'Position flex items horizontally in the opposite direction.'
  },
  {
    label:'flex-col',
    detail:'flex-direction: column;',
    documentation:'Position flex items vertically.'
  },
  {
    label:'flex-col-reverse',
    detail:'flex-direction: column-reverse;',
    documentation:'Position flex items vertically in the opposite direction.'
  }
]

/*        FLEW WRAP CLASSES        */

let flexWrap = [
  {
    label:'flex-wrap',
    detail:'flex-wrap: wrap;',
    documentation:'Allow flex items to wrap.'
  },
  {
    label:'flex-wrap-reverse',
    detail:'flex-wrap: wrap-reverse;',
    documentation:'Wrap flex items in the reverse direction.'
  },
  {
    label:'flex-nowrap',
    detail:'flex-wrap: nowrap;',
    documentation:'Prevent flex items from wrapping, causing inflexible items to overflow their container if necessary.'
  }
]

/*        FLEX CLASSES        */

let flex = [
  {
    label:'flex-1',
    detail:'flex: 1 1 0%;',
    documentation:'Allow a flex item to grow and shrink as needed, ignoring its initial size.'
  },
  {
    label:'flex-auto',
    detail:'flex: 1 1 auto;',
    documentation:'Allow a flex item to grow and shrink, taking into account its initial size.'
  },
  {
    label:'flex-initial',
    detail:'flex: 0 1 auto;',
    documentation:'Allow a flex item to shrink but not grow, taking into account its initial size.'
  },
  {
    label:'flex-none',
    detail:'flex: none;',
    documentation:'Prevent a flex item from growing or shrinking.'
  }
]

/*        FLEX GROW CLASSES        */

let flexGrow = [
  {
    label:'flex-grow-0',
    detail:'flex-grow: 0;',
    documentation:'Prevent a flex item from growing.'
  },
  {
    label:'flex-grow',
    detail:'flex-grow: 1;',
    documentation:'Allow a flex item to grow to fill available space.'
  }
]

/*        FLEX SHRINK CLASSES        */

let flexShrink = [
  {
    label:'flex-shrink-0',
    detail:'flex-shrink: 0;',
    documentation:'Prevent a flex item from shrinking.'
  },
  {
    label:'flex-shrink',
    detail:'flex-shrink: 1;',
    documentation:'Allow a flex item to shrink if needed.'
  }
]

/*        ORDER CLASSES        */

let order = []

for(i = 1; i <= 12; i++) {
  order.push(
    {
      label:`order-${i}`,
      detail:`order: ${i};`,
      documentation:`Set a flex elements order number to ${i}, rendering it in an order different than that of its order in the DOM.`
    }
  )
}

order.push(
  {
    label:'order-first',
    detail:'order: -9999;',
    documentation:'Render a flex item first, regardless of its order in the DOM.'
  },
  {
    label:'order-last',
    detail:'order: 9999;',
    documentation:'Render a flex item last, regardless of its order in the DOM.'
  },
  {
    label:'order-none',
    detail:'order: 0;',
    documentation:'Render a flex item in its default order.'
  }
)

exports.flexBox = {
  flexDirection: flexDirection,
  flexWrap:      flexWrap,
  flex:          flex,
  flexGrow:      flexGrow,
  flexShrink:    flexShrink,
  order:         order
}
