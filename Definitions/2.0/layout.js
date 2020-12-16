const CONSTANTS = require('./includes/scales.js');

/*        BREAKPOINT CLASSES        */

let breakpoints = [];

for(i = 0; i < CONSTANTS.BREAKPOINTS.length; i++) {
  breakpoints.push(
    {
      label:`${CONSTANTS.BREAKPOINTS[i].name}:`,
      detail:`max-width: ${CONSTANTS.BREAKPOINTS[i].value};`,
      documentation:`Set the current breakpoint to ${CONSTANTS.BREAKPOINTS[i].size} (${CONSTANTS.BREAKPOINTS[i].value}).`
    }
  );
}

/*        CONTAINER CLASSES        */

let container = [
  {
    label:"container",
    detail:"width: 100%; (max-width: breakpoint;)",
    documentation:"Set an element's width to 100%. If preceeding breakpoint, set the max-width to the min-width of the current breakpoint."
  }
]

/*        BOX-SIZING CLASSES        */

let boxSizing = [
  {
    label:"box-border",
    detail:"box-sizing: border-box;",
    documentation:"Set an element's box-sizing to border-box to include an element's borders and padding in a specified height or width."
  },
  {
    label:"box-content",
    detail:"box-sizing: content-box;",
    documentation:"Set an element's box-sizing to content-box to exclude an element's borders and padding in a specified height or width."
  }
];

/*        DISPLAY CLASSES        */

let display = [
  {
    label:"block",
    detail:"display: block;",
    documentation:"Create a block-level element."
  },
  {
    label:"inline-block",
    detail:"display: inline-block;",
    documentation:"Create an inline block-level element."
  },
  {
    label:"inline",
    detail:"display: inline;",
    documentation:"Create an inline element."
  },
  {
    label:"flex",
    detail:"display: flex;",
    documentation:"Create a block-level flex container."
  },
  {
    label:"inline-flex",
    detail:"display: inline-flex;",
    documentation:"Create an inline flex container."
  },
  {
    label:"table",
    detail:"display: table;",
    documentation:"Create an element that behaves like a table element."
  },
  {
    label:"table-caption",
    detail:"display: table-caption;",
    documentation:"Create an element that behaves like a table-caption element."
  },
  {
    label:"table-cell",
    detail:"display: table-cell;",
    documentation:"Create an element that behaves like a table-cell element."
  },
  {
    label:"table-column",
    detail:"display: table-column;",
    documentation:"Create an element that behaves like a table-column element."
  },
  {
    label:"table-column-group",
    detail:"display: table-column-group;",
    documentation:"Create an element that behaves like a table-column-group element."
  },
  {
    label:"table-footer-group",
    detail:"display: table-block;",
    documentation:"Create an element that behaves like a table-footer-group element."
  },
  {
    label:"table-header-group",
    detail:"display: table-header-group;",
    documentation:"Create an element that behaves like a table-header-group element."
  },
  {
    label:"table-row-group",
    detail:"display: table-row-group;",
    documentation:"Create an element that behaves like a table-row-group element."
  },
  {
    label:"table-row",
    detail:"display: table-row;",
    documentation:"Create an element that behaves like a table-row element."
  },
  {
    label:"flow-root",
    detail:"display: flow-root;",
    documentation:"Create a block-level element with its own block formatting context."
  },
  {
    label:"grid",
    detail:"display: grid;",
    documentation:"Create a grid container."
  },
  {
    label:"inline-grid",
    detail:"display: inline-grid;",
    documentation:"Create an inline grid container."
  },
  {
    label:"contents",
    detail:"display: contents;",
    documentation:`Create a "phantom" container whose children act like direct children of the parent.`
  },
  {
    label:"hidden",
    detail:"display: none;",
    documentation:"Set an element to display: none and remove it from the page layout (compare to .invisible class, which sets visbility)."
  },
];

/*        FLOAT CLASSES        */

let floats = [
  {
    label:"float-right",
    detail:"float: right;",
    documentation:"Float an element to the right of its container."
  },
  {
    label:"float-left",
    detail:"float: left;",
    documentation:"Float an element to the left of its container."
  },
  {
    label:"float-none",
    detail:"float: none;",
    documentation:"Reset any floats that are applied to an element. This is the default value for the float property."
  },
  {
    label:"clearfix",
    detail:`content: ""; display: table; clear: both;`,
    documentation:`Set the "clearfix" hack to prevent elements after a floated element from continuing to flow around the floated element.`
  },
];

/*        CLEAR CLASSES        */

let clear = [
  {
    label:"clear-left",
    detail:"clear: left;",
    documentation:"Position an element below any preceding left-floated elements."
  }, 
  {
    label:"clear-right",
    detail:"clear: right;",
    documentation:"Position an element below any preceding right-floated elements."
  }, 
  {
    label:"clear-both",
    detail:"clear: both;",
    documentation:"Position an element below all preceding floated elements."
  },
  {
    label:"clear-none",
    detail:"clear: none;",
    documentation:"Reset any clears that are applied to an element. This is the default value for the clear property."
  },
]

/*        OBJECT FIT CLASSES        */

let objectFit = [
  {
    label:"object-contain",
    detail:"object-fit: contain;",
    documentation:"Resize an element's content to stay contained within its container."
  },  
  {
    label:"object-cover",
    detail:"object-fit: cover;",
    documentation:"Resize an element's content to cover its container proportionately."
  },
  {
    label:"object-fill",
    detail:"object-fit: fill;",
    documentation:"Stretch an element's content to fit its container."
  },  
  {
    label:"object-none",
    detail:"object-fit: none;",
    documentation:"Display an element's content at its original size ignoring the container size."
  },
  {
    label:"object-scale-down",
    detail:"object-fit: scale-down;",
    documentation:"Display an element's content at its original size but scale it down to fit its container if necessary."
  },
];

/*        OBJECT-POSITION CLASSES        */

const OBJECT_POSITIONS = ["bottom", "center", "left", "left-bottom",
  "left-top", "right", "right-bottom", "right-top", "top"];

let objectPosition = [];

for(i = 0; i < OBJECT_POSITIONS.length; i++) {
  objectPosition.push(
    {
      label:`object-${OBJECT_POSITIONS[i]}`,
      detail:`object-position: ${OBJECT_POSITIONS[i]};`,
      documentation:`Position a replaced element's content in the ${OBJECT_POSITIONS[i]} of its container.`
    }
  ); 
}

/*        OVERFLOW CLASSES        */

let overflow = [
  {
    label:"overflow-auto",
    detail:"overflow: auto;",
    documentation:"Add scrollbars to an element if its content overflows the bounds of that element."
  },  
  {
    label:"overflow-hidden",
    detail:"overflow: hidden;",
    documentation:"Clip any content within an element that overflows the bounds of that element."
  },  
  {
    label:"overflow-visible",
    detail:"overflow: visible;",
    documentation:"Prevent content within an element from being clipped. Content overflowing the bounds of an element will then be visible."
  },  
  {
    label:"overflow-scroll",
    detail:"overflow: scroll;",
    documentation:"Add scrollbars to an element, regardless of whether or not its content overflows."
  },
  {
    label:"overflow-x-auto",
    detail:"overflow-x: auto;",
    documentation:"Allow horizontal scrolling if needed."
  },
  {
    label:"overflow-y-auto",
    detail:"overflow-y: auto;",
    documentation:"Allow vertical scrolling if needed."
  },
  {
    label:"overflow-x-hidden",
    detail:"overflow-x: hidden;",
    documentation:"Clip any content within an element that overflows the bounds of that element on the left or right."
  },
  {
    label:"overflow-y-hidden",
    detail:"overflow-y: hidden;",
    documentation:"Clip any content within an element that overflows the bounds of that element on the top or bottom."
  },
  {
    label:"overflow-x-visible",
    detail:"overflow-x: visible;",
    documentation:"Prevent content within an element from being clipped on the left or right."
  },
  {
    label:"overflow-y-visible",
    detail:"overflow-y: visible;",
    documentation:"Prevent content within an element from being clipped on the top or bottom."
  },
  {
    label:"overflow-x-scroll",
    detail:"overflow-x: scroll;",
    documentation:"Allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the OS."
  },
  {
    label:"overflow-y-scroll",
    detail:"overflow-y: scroll;",
    documentation:"Allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the OS."
  },
  {
    label:"scrolling-touch",
    detail:"-wekkit-overflow-scrolling: touch;",
    documentation:"Use momentum-based scrolling (where supported) on touch devices."
  },
  {
    label:"scrolling-auto",
    detail:"-wekkit-overflow-scrolling: auto;",
    documentation:"Use normal non-momentum-based scrolling on touch devices."
  },
];

/*        OVERSCROLL BEHAVIOR CLASSES        */

let overscollBehavior = [
  {
    label:"overscroll-auto",
    detail:"overscroll-behavior: auto;",
    documentation:"Make it possible to continue scrolling a parent scroll area when the boundary of the primary scroll area is reached."
  },
  {
    label:"overscroll-contain",
    detail:"overscroll-behavior: contain;",
    documentation:"Prevent scolling in the target area from triggering scrolling in the parent element, but preserve bounce effects."
  },
  {
    label:"overscroll-none",
    detail:"overscroll-behavior: none;",
    documentation:"Prevent scrolling in the target area from triggering scrolling in the parent element, and prevent bounce effects."
  },
  {
    label:"overscroll-y-auto",
    detail:"overscroll-behavior-y: auto;",
    documentation:"Make is possible to continue scrolling a parent scroll area vertically when the boundary of the primary scroll area is reached."
  },
  {
    label:"overscroll-y-contain",
    detail:"overscroll-behavior-y: contain;",
    documentation:"Prevent vertical scrolling in the target area from triggering scrolling in the parent element, but preserve bounce effects."
  },
  {
    label:"overscroll-y-none",
    detail:"overscroll-behavior-y: none;",
    documentation:"Prevent vertical scrolling in the target area from triggering scrolling in the parent element, and prevent bounce effects."
  },
  {
    label:"overscroll-x-auto",
    detail:"overscroll-behavior-x: auto;",
    documentation:"Make it possible to continue scrolling a parent scroll area horizontally when boundary primary scroll area is reached."
  },
  {
    label:"overscroll-x-contain",
    detail:"overscroll-behavior-x: contain;",
    documentation:"Prevent horizontal scolling in the target area from triggering scrolling in the parent element, but preserve bounce effects."
  },
  {
    label:"overscroll-x-none",
    detail:"overscroll-behavior-x: none;",
    documentation:"Prevent horizontal scrolling in the target area from triggering scrolling in the parent element, and prevent bounce effects."
  },
];

/*        POSITION CLASSES        */

let position = [
  {
    label:"static",
    detail:"position: static;",
    documentation:"Position an element according to the normal flow of the document."
  },  
  {
    label:"fixed",
    detail:"position: fixed;",
    documentation:"Position an element relative to the browser window."
  },  
  {
    label:"absolute",
    detail:"position: absolute;",
    documentation:"Position an element outside the normal document flow, causing neighboring elements to act like it doesn't exist."
  },  
  {
    label:"relative",
    detail:"position: relative;",
    documentation:"Position an element according to normal document flow. It will act as a reference for absolutely positioned children."
  },  
  {
    label:"sticky",
    detail:"position: sticky;",
    documentation:"Position an element as relative until it crosses a specified threshold, then treat as fixed until its parent is off screen."
  }
];

let topRightBottomLeft = [
  {
    label:"inset-0",
    detail:"top: 0; right: 0; bottom: 0; left: 0;",
    documentation:"Anchor absolutely positioned elements against edges of the nearest positioned parent."
  },
  {
    label:"inset-auto",
    detail:"top: auto; right: auto; bottom: auto; left: auto;",
    documentation:"Let the browser determine the top, right, bottom, and left position of an absolutely positioned element."
  },
  {
    label:"inset-y-0",
    detail:"top: 0; bottom: 0;",
    documentation:"Anchor absolutely positioned elements against top and bottom edges of the nearest positioned parent."
  },
  {
    label:"inset-x-0",
    detail:"right: 0; left: 0;",
    documentation:"Anchor absolutely positioned elements against left and right edges of the nearest positioned parent."
  },
  {
    label:"inset-y-auto",
    detail:"top: auto; bottom: auto;",
    documentation:"Let the browser determine the top and bottom position of an absolutely positioned element."
  },
  {
    label:"inset-x-auto",
    detail:"right: auto; left: auto;",
    documentation:"Let the browser determine the left and right position of an absolutely positioned element."
  },
  {
    label:"top-0",
    detail:"top: 0;",
    documentation:"Anchor absolutely positioned elements against the top edge of the nearest positioned parent."
  },
  {
    label:"right-0",
    detail:"right: 0;",
    documentation:"Anchor absolutely positioned elements against the right edge of the nearest positioned parent."
  },
  {
    label:"bottom-0",
    detail:"bottom: 0;",
    documentation:"Anchor absolutely positioned elements against the bottom edge of the nearest positioned parent."
  },
  {
    label:"left-0",
    detail:"left: 0;",
    documentation:"Anchor absolutely positioned elements against the left edge of the nearest positioned parent."
  },
  {
    label:"top-auto",
    detail:"top: auto;",
    documentation:"Let the browser determine the top position of an absolutely positioned element."
  },
  {
    label:"right-auto",
    detail:"right: auto;",
    documentation:"Let the browser determine the right position of an absolutely positioned element."
  },
  {
    label:"bottom-auto",
    detail:"bottom: auto;",
    documentation:"Let the browser determine the bottom position of an absolutely positioned element."
  },
  {
    label:"left-auto",
    detail:"left: auto;",
    documentation:"Let the browser determine the left position of an absolutely positioned element."
  }
];

/*        VISIBILITY CLASSES        */

let visibility = [
  {
    label:"visible",
    detail:"visibility: visible;",
    documentation:"Make an element visible. This is mostly useful for undoing the invisible utility at different screen sizes."
  },
  {
    label:"invisible",
    detail:"visibility: hidden;",
    documentation:"Hide an element, but still maintain its place in the DOM, affecting the layout of other elements."
  }  
];

/*        Z-INDEX CLASSES        */

const STACK_SCALE = ["0", "10", "20", "30", "40", "50"];

let zIndex = [];

for(i = 0; i < STACK_SCALE.length; i++) {
  zIndex.push(
    {
      label:`z-${STACK_SCALE[i]}`,
      detail:`z-index: ${STACK_SCALE[i]};`,
      documentation:`Set an element's stack order to ${STACK_SCALE[i]}.`
    } 
  );
};

zIndex.push(
  {
    label:"z-auto",
    detail:"z-index: auto;",
    documentation:"Set an element's stack order to that of its parent."
  }
);

let classes = [];

classes = classes.concat(
  breakpoints,
  container,
  boxSizing,
  display,
  floats,
  clear,
  objectFit,
  objectPosition,
  overflow,
  overscollBehavior,
  position,
  topRightBottomLeft,
  visibility,
  zIndex
);

exports.classes = classes;