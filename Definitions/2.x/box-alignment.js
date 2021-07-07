'use strict'

/*        JUSTIFY CONTENT CLASSES        */

let justifyContent = [
  {
    label:'justify-start',
    detail:'justify-content: flex-start;',
    documentation:'Justify flex items against the start of the container\'s main axis.'
  },
  {
    label:'justify-end',
    detail:'justify-content: flex-end;',
    documentation:'Justify flex items against the end of the container\'s main axis.'
  },
  {
    label:'justify-center',
    detail:'justify-content: center;',
    documentation:'Justify flex items along the center of the container\'s main axis.'
  },
  {
    label:'justify-between',
    detail:'justify-content: space-between;',
    documentation:'Distribute flex items along the container\'s main axis so as there is equal space between each item.'
  },
  {
    label:'justify-around',
    detail:'justify-content: space-around;',
    documentation:'Distribute flex items along the container\'s main axis so as there is equal space on the sides of each item.'
  },
  {
    label:'justify-evenly',
    detail:'justify-content: space-evenly;',
    documentation:'Distribute flex items along the container\'s main axis so as there is equal space between each item and the start and end edge of the container.'
  }
]

/*        JUSTIFY ITEMS CLASSES        */

let justifyItems = [
  {
    label:'justify-items-auto',
    detail:'justify-items: auto;',
    documentation:'Automatically justify grid items based on their parent container. If no parent or it is absolutely positioned, auto represents normal.'
  },
  {
    label:'justify-items-start',
    detail:'justify-items: start;',
    documentation:'Justify grid items toward the start of their inline axis.'
  },
  {
    label:'justify-items-end',
    detail:'justify-items: end;',
    documentation:'Justify grid items toward the end of their inline axis.'
  },
  {
    label:'justify-items-center',
    detail:'justify-items: center;',
    documentation:'Justify grid items along their inline axis.'
  },
  {
    label:'justify-items-stretch',
    detail:'justify-items: stretch;',
    documentation:'Stretch items along their inline axis if the combined size of items is less than the size of their container.'
  },
]

/*        JUSTIFY SELF CLASSES        */

let justifySelf = [
  {
    label:'justify-self-auto',
    detail:'justify-self: auto;',
    documentation:'Automatically align an item based on the value of the grid\'s justify-items property.'
  },
  {
    label:'justify-self-start',
    detail:'justify-self: start;',
    documentation:'Align a grid item to the start of its inline axis.'
  },
  {
    label:'justify-self-end',
    detail:'justify-self: end;',
    documentation:'Align a grid item to the end of its inline axis.'
  },
  {
    label:'justify-self-center',
    detail:'justify-self: center;',
    documentation:'Align a grid item along the center of its inline axis.'
  },
  {
    label:'justify-self-stretch',
    detail:'justify-self: stretch;',
    documentation:'Stretch a grid item to fill the grid area on its inline axis.'
  },
]

/*        ALIGN CONTENT CLASSES        */

let alignContent = [
  {
    label:'content-center',
    detail:'align-content: center;',
    documentation:'Pack rows in a container in the center of the cross axis.'
  },
  {
    label:'content-start',
    detail:'align-content: flex-start;',
    documentation:'Pack rows in a container against the start of the cross axis.'
  },
  {
    label:'content-end',
    detail:'align-content: flex-end;',
    documentation:'Pack rows in a container against the end of the cross axis.'
  },
  {
    label:'content-between',
    detail:'align-content: space-between;',
    documentation:'Distribute rows in a container so as there is equal space between each line.'
  },
  {
    label:'content-around',
    detail:'align-content: space-around;',
    documentation:'Distribute rows in a container so as there is equal space around each line.'
  },
  {
    label:'content-evenly',
    detail:'align-content: space-evenly;',
    documentation:'Distribute rows in a container so as there is equal space between each line, including the top and bottom of the container.'
  }
]

/*        ALIGN ITEMS CLASSES        */

let alignItems = [
  {
    label:'items-start',
    detail:'align-items: flex-start;',
    documentation:'Align items to the start of the container\'s cross axis.'
  },
  {
    label:'items-end',
    detail:'align-items: flex-end;',
    documentation:'Align items to the end of the container\'s cross axis.'
  },
  {
    label:'items-center',
    detail:'align-items: center;',
    documentation:'Align items along the center of the container\'s cross axis.'
  },
  {
    label:'items-baseline',
    detail:'align-items: baseline;',
    documentation:'Align items along the container\'s cross axis so as their baselines align.'
  },
  {
    label:'items-stretch',
    detail:'align-items: stretch;',
    documentation:'Stretch items to fill the container\'s cross axis.'
  },
]

/*        ALIGN SELF CLASSES        */

let alignSelf = [
  {
    label:'self-auto',
    detail:'align-self: auto;',
    documentation:'Align an item based on the value of the container\'s align-items property.'
  },
  {
    label:'self-start',
    detail:'align-self: start;',
    documentation:'Align an item to the start of the container\'s cross axis, regardless of the container\'s align-items value.'
  },
  {
    label:'self-end',
    detail:'align-self: end;',
    documentation:'Align an an item to the end of the container\'s cross axis, regardless of the container\'s align-items value.'
  },
  {
    label:'self-center',
    detail:'align-self: center;',
    documentation:'Align an item along the center of the container\'s cross axis, regardless of the container\'s align-items value.'
  },
  {
    label:'self-stretch',
    detail:'align-self: stretch;',
    documentation:'Stretch an item to fill the container\'s cross axis, regardless of the container\'s align-items value.'
  },
]

/*        PLACE CONTENT CLASSES        */

let placeContent = [
  {
    label:'place-content-center',
    detail:'place-content: center;',
    documentation:'Pack items in the center of the block axis.'
  },
  {
    label:'place-content-start',
    detail:'place-content: start;',
    documentation:'Pack items against the start of the block axis.'
  },
  {
    label:'place-content-end',
    detail:'place-content: end;',
    documentation:'Pack items against the end of the block axis.'
  },
  {
    label:'place-content-between',
    detail:'place-content: space-between;',
    documentation:'Distribute grid items so as there is an equal amount of space between each row.'
  },
  {
    label:'place-content-around',
    detail:'place-content: space-around;',
    documentation:'Distribute grid items so as there is an equal amount of space around each row.'
  },
  {
    label:'place-content-evenly',
    detail:'place-content: space-evenly;',
    documentation:'Distribute grid items so as they are evenly spaced on the block axis.'
  },
  {
    label:'place-content-stretch',
    detail:'place-content: stretch;',
    documentation:'Stretch grid items along their grid areas on the block axis.'
  }
]

/*        PLACE ITEMS CLASSES        */

let placeItems = [
  {
    label:'place-items-auto',
    detail:'place-items: auto;',
    documentation:'Place grid items automatically in their grid areas.'
  },
  {
    label:'place-items-start',
    detail:'place-items: start;',
    documentation:'Place grid items on the start of their grid areas on both axis.'
  },
  {
    label:'place-items-end',
    detail:'place-items: end;',
    documentation:'Place grid items on the end of their grid areas on both axis.'
  },
  {
    label:'place-items-center',
    detail:'place-items: center;',
    documentation:'Place grid items on the center of their grid areas on both axis.'
  },
  {
    label:'place-items-stretch',
    detail:'place-items: stretch;',
    documentation:'Stretch items along their grid areas on both axis.'
  }
]

/*        PLACE SELF CLASSES        */

let placeSelf = [
  {
    label:'place-self-auto',
    detail:'place-self: auto;',
    documentation:'Align an item based on the value of the container\'s place-items property.'
  },
  {
    label:'place-self-start',
    detail:'place-self: start;',
    documentation:'Align an item to the start on both axes.'
  },
  {
    label:'place-self-end',
    detail:'place-self: end;',
    documentation:'Align an item to the end on both axes.'
  },
  {
    label:'place-self-center',
    detail:'place-self: center;',
    documentation:'Align an item at the center on both axes.'
  },
  {
    label:'place-self-stretch',
    detail:'place-self: stretch;',
    documentation:'Stretch an item on both axes.'
  }
]

exports.boxAlignment = {
  justifyContent,
  justifyItems,
  justifySelf,
  alignContent,
  alignItems,
  alignSelf,
  placeContent,
  placeItems,
  placeSelf
}
