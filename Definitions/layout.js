const CONSTANTS = require('../Scripts/constants.js');

let breakpoints = [
  {
    label:"sm:",
    detail:"max-width: " + CONSTANTS.SM_BREAKPOINT + "px;",
    documentation:"References the small breakpoint set at " + CONSTANTS.SM_BREAKPOINT + "px."
  },
  {
    label:"md:",
    detail:"max-width: " + CONSTANTS.MD_BREAKPOINT + "px;",
    documentation:"References the medium breakpoint set at " + CONSTANTS.MD_BREAKPOINT + "px."
  },
  {
    label:"lg:",
    detail:"max-width: " + CONSTANTS.LG_BREAKPOINT + "px;",
    documentation:"References the large breakpoint set at " + CONSTANTS.LG_BREAKPOINT + "px."
  },
  {
    label:"xl:",
    detail:"max-width: " + CONSTANTS.XL_BREAKPOINT + "px;",
    documentation:"References the extra large breakpoint set at " + CONSTANTS.XL_BREAKPOINT + "px."
  },
];

let container = [
  {
    label:"container",
    detail:"width: 100%; or max-width: breakpoint;",
    documentation:"Sets the max-width of an element to 100% or the preceding breakpoint width."
  }
]

let boxSizing = [
  {
    label:"box-border",
    detail:"box-sizing: border-box;",
    documentation:"Sets element's box-sizing to border-box, telling the browser to include the borders and padding in a specified height or width."
  },
  {
    label:"box-content",
    detail:"box-sizing: content-box;",
    documentation:"Sets element's box-sizing to content-box, telling browser to add borders and padding on top of a specified width or height.",
    
  }
];

let display = [
  {
    label:"block",
    detail:"display: block;",
    documentation:"Creates a block-level element."
  },
  {
    label:"inline-block",
    detail:"display: inline-block;",
    documentation:"Creates a inline block-level element."
  },
  {
    label:"inline",
    detail:"display: inline;",
    documentation:"Creates an inline element."
  },
  {
    label:"flex",
    detail:"display: flex;",
    documentation:"Creates a block-level flex container."
  },
  {
    label:"inline-flex",
    detail:"display: inline-flex;",
    documentation:"Creates an inline flex container."
  },
  {
    label:"table",
    detail:"display: table;",
    documentation:"Creats an element that behaves like a table element."
  },
  {
    label:"table-caption",
    detail:"display: table-caption;",
    documentation:"Creats an element that behaves like a table-caption element."
  },
  {
    label:"table-cell",
    detail:"display: table-cell;",
    documentation:"Creats an element that behaves like a table-cell element."
  },
  {
    label:"table-column",
    detail:"display: table-column;",
    documentation:"Creats an element that behaves like a table-column element."
  },
  {
    label:"table-column-group",
    detail:"display: table-column-group;",
    documentation:"Creats an element that behaves like a table-column-group element."
  },
  {
    label:"table-footer-group",
    detail:"display: table-block;",
    documentation:"Creats an element that behaves like a table-footer-group element."
  },
  {
    label:"table-header-group",
    detail:"display: table-header-group;",
    documentation:"Creats an element that behaves like a table-header-group element."
  },
  {
    label:"table-row-group",
    detail:"display: table-row-group;",
    documentation:"Creats an element that behaves like a table-row-group element."
  },
  {
    label:"table-row",
    detail:"display: table-row;",
    documentation:"Creats an element that behaves like a table-row element."
  },
  {
    label:"flow-root",
    detail:"display: flow-root;",
    documentation:"Creates a block-level element that establishes a new block formatting context."
  },
  {
    label:"grid",
    detail:"display: grid;",
    documentation:"Creates a grid container."
  },
  {
    label:"inline-grid",
    detail:"display: inline-grid;",
    documentation:"Creates an inline grid container."
  },
  {
    label:"contents",
    detail:"display: contents;",
    documentation:"Creates a \"phantom\" container whose children act like direct children of the parent."
  },
  {
    label:"hidden",
    detail:"display: none;",
    documentation:"Sets an element's display property to none and removes it from the page layout -- Compare to .invisible class to set visbility."
  },
];

let floats = [
  {
    label:"float-right",
    detail:"float: right;",
    documentation:"Floats an element to the right of its container."
  },
  {
    label:"float-left",
    detail:"float: left;",
    documentation:"Floats an element to the left of its container."
  },
  {
    label:"float-none",
    detail:"float: none;",
    documentation:"Resets any floats applied to an element. This is the default value for the float property."
  },
  {
    label:"clearfix",
    detail:"content: \"\"; display: table; clear: both;",
    documentation:"Applies the \"clearfix\" hack to prevent elements after a floating element from flowing around it."
  },
];

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
    documentation:"Resets any clears that are applied to an element. This is the default value for the clear property."
  },  
]

let objectFit = [
  {
    label:"object-contain",
    detail:"object-fit: contain;",
    documentation:"Resizes the element's content to stay contained with its container."
  },  
  {
    label:"object-cover",
    detail:"object-fit: cover;",
    documentation:"Resizes the element's content to cover its container proportionately."
  },  
  {
    label:"object-fill",
    detail:"object-fit: fill;",
    documentation:"Stretches the element's content to fit its container."
  },  
  {
    label:"object-none",
    detail:"object-fit: none;",
    documentation:"Displays an element's content at its original size ignoring the container size."
  },
  {
    label:"object-scale-down",
    detail:"object-fit: scale-down;",
    documentation:"Displays an element's content at its original size, but scaled down to fit its container if necessary."
  },
];

let objectPosition = [
  {
    label:"object-bottom",
    detail:"object-position: bottom;",
    documentation:"Positions an element's content to the bottom of its container."
  },
  {
    label:"object-center",
    detail:"object-position: center;",
    documentation:"Positions an element's content to the center of its container."
  },
  {
    label:"object-left",
    detail:"object-position: left",
    documentation:"Positions an element's content to the left of its container."
  },
  {
    label:"object-left-bottom",
    detail:"object-position: left bottom;",
    documentation:"Positions an element's content to the left bottom of its container."
  },
  {
    label:"object-left-top",
    detail:"object-position: left top;",
    documentation:"Positions an element's content to the left top of its container."
  },
  {
    label:"object-right",
    detail:"object-position: right;",
    documentation:"Positions an element's content to the right of its container."
  },
  {
    label:"object-right-bottom",
    detail:"object-position: right bottom;",
    documentation:"Positions an element's content to the right bottom of its container."
  },
  {
    label:"object-right-top",
    detail:"object-position: right top;",
    documentation:"Positions an element's content to the right top of its container."
  },
  {
    label:"object-top",
    detail:"object-position: top;",
    documentation:"Positions an element's content to the top of its container."
  }
];

let overflow = [
  {
    label:"overflow-auto",
    detail:"overflow: auto;",
    documentation:"Adds scrollbars to an element if its content overflows. Compare to overflow-scroll, which always shows scrollbars."
  },  
  {
    label:"overflow-hidden",
    detail:"overflow: hidden;",
    documentation:"Clips any content within an element that overflows its bounds."
  },  
  {
    label:"overflow-visible",
    detail:"overflow: visible;",
    documentation:"Prevents content within an element from being clipped."
  },  
  {
    label:"overflow-scroll",
    detail:"overflow: scroll;",
    documentation:"Always adds scrollbars to an element regardless if its content overflows."
  },
  {
    label:"overflow-x-auto",
    detail:"overflow-x: auto;",
    documentation:"Allows horizontal scrolling if needed."
  },
  {
    label:"overflow-y-auto",
    detail:"overflow-y: auto;",
    documentation:"Allows vertical scrolling if needed."
  },
  {
    label:"overflow-x-hidden",
    detail:"overflow-x: hidden;",
    documentation:"Clips any content with an element that overflows its bounds on the left or right."
  },
  {
    label:"overflow-y-hidden",
    detail:"overflow-y: hidden;",
    documentation:"Clips any content with an element that overflows its bounds on the top or bottom."
  },
  {
    label:"overflow-x-visible",
    detail:"overflow-x: visible;",
    documentation:"Prevents content within an element from being clipped on the left or right."
  },
  {
    label:"overflow-y-visible",
    detail:"overflow-y: visible;",
    documentation:"Prevents content within an element from being clipped on the top or bottom."
  },
  {
    label:"overflow-x-scroll",
    detail:"overflow-x: scroll;",
    documentation:"Always adds a horizontal scrollbar to an element regardless if its content overflows."
  },
  {
    label:"overflow-y-scroll",
    detail:"overflow-y: scroll;",
    documentation:"Always adds a vertical scrollbar to an element regardless if its content overflows."
  },
  {
    label:"scrolling-touch",
    detail:"-wekkit-overflow-scrolling: touch;",
    documentation:"Sets momentum-based scrolling on touch devices where supported."
  },
  {
    label:"scrolling-auto",
    detail:"-wekkit-overflow-scrolling: auto;",
    documentation:"Sets normal non-momentum-based scrolling on touch devices."
  },
];

let overscollBehavior = [
  {
    label:"overscroll-auto",
    detail:"overscroll-behavior: auto;",
    documentation:"Allows scrolling a parent scroll area once the boundary of the primary scroll area has been reached."
  },
  {
    label:"overscroll-contain",
    detail:"overscroll-behavior: contain;",
    documentation:"Prevents scolling in the target area from triggering scrolling in the parent element. Preserves bounce effects, when supported."
  },
  {
    label:"overscroll-none",
    detail:"overscroll-behavior: none;",
    documentation:"Prevents scrolling in the target area from triggering scrolling in the parent element. Prevents bounce effects, when supported."
  },
  {
    label:"overscroll-y-auto",
    detail:"overscroll-behavior-y: auto;",
    documentation:"Allows scrolling a parent scroll area up or down once the boundary of the primary scroll area has been reached."
  },
  {
    label:"overscroll-y-contain",
    detail:"overscroll-behavior-y: contain;",
    documentation:"Prevents up or down scolling in the target area from triggering scrolling in the parent element. Preserves bounce effects."
  },
  {
    label:"overscroll-y-none",
    detail:"overscroll-behavior-y: none;",
    documentation:"Prevents up or down scrolling in the target area from triggering scrolling in the parent element. Prevents bounce effects."
  },
  {
    label:"overscroll-x-auto",
    detail:"overscroll-behavior-x: auto;",
    documentation:"Allows scrolling a parent scroll area left or right once the boundary of the primary scroll area has been reached."
  },
  {
    label:"overscroll-x-contain",
    detail:"overscroll-behavior-x: contain;",
    documentation:"Prevents left or right scolling in the target area from triggering scrolling in the parent element. Preserves bounce effects."
  },
  {
    label:"overscroll-x-none",
    detail:"overscroll-behavior-x: none;",
    documentation:"Prevents left or right scrolling in the target area from triggering scrolling in the parent element. Prevents bounce effects."
  },
];

let position = [
  {
    label:"static",
    detail:"position: static;",
    documentation:"Positions element according to normal document flow."
  },  
  {
    label:"fixed",
    detail:"position: fixed;",
    documentation:"Positions element relative to the browser window."
  },  
  {
    label:"absolute",
    detail:"position: absolute;",
    documentation:"Removes element from normal document flow. Positions element relative to the nearest parent with position other than static."
  },  
  {
    label:"relative",
    detail:"position: relative;",
    documentation:"Positions element according to normal document flow. Sets element as reference for absolute positioned children."
  },  
  {
    label:"sticky",
    detail:"position: sticky;",
    documentation:"Positions element relative until a specified threshold is crossed when it becomes fixed."
  }
];

let topRightBottomLeft = [
  {
    label:"inset-0",
    detail:"top: 0; right: 0; bottom: 0; left: 0;",
    documentation:"Anchors positioned element in relation to its nearest positioned parent or browser window."
  },
  {
    label:"inset-auto",
    detail:"top: auto; right: auto; bottom: auto; left: auto;",
    documentation:"Lets browser calculate top, right, bottom, and left position. Default behavior."
  },
  {
    label:"inset-y-0",
    detail:"top: 0; bottom: 0;",
    documentation:"Anchors element's top and bottom position in relation to its nearest positioned parent or browser window."
  },
  {
    label:"inset-x-0",
    detail:"right: 0; left: 0;",
    documentation:"Anchors element's left and right position in relation to its nearest positioned parent or browser window."
  },
  {
    label:"inset-y-auto",
    detail:"top: auto; bottom: auto;",
    documentation:"Lets browser calculate top and bottom position."
  },
  {
    label:"inset-x-auto",
    detail:"right: auto; left: auto;",
    documentation:"Lets browser calculate left and right position."
  },
  {
    label:"top-0",
    detail:"top: 0;",
    documentation:"Anchors element's top position in relation to its nearest positioned parent or browser window."
  },
  {
    label:"right-0",
    detail:"right: 0;",
    documentation:"Anchors element's right position in relation to its nearest positioned parent or browser window."
  },
  {
    label:"bottom-0",
    detail:"bottom: 0;",
    documentation:"Anchors element's bottom position in relation to its nearest positioned parent or browser window."
  },
  {
    label:"left-0",
    detail:"left: 0;",
    documentation:"Anchors element's left position in relation to its nearest positioned parent or browser window."
  },
  {
    label:"top-auto",
    detail:"top: auto;",
    documentation:"Lets browser calculate top position."
  },
  {
    label:"right-auto",
    detail:"right: auto;",
    documentation:"Lets browser calculate right position."
  },
  {
    label:"bottom-auto",
    detail:"bottom: auto;",
    documentation:"Lets browser calculate bottom position."
  },
  {
    label:"left-auto",
    detail:"left: auto;",
    documentation:"Lets browser calculate left position."
  }
];

var visibility = [
  {
    label:"visible",
    detail:"visibility: visible;",
    documentation:"Sets an element to visible."
  },
  {
    label:"invisible",
    detail:"visibility: hidden;",
    documentation:"Sets an element to invisible without removing it from the normal document flow. Compare to hidden, which removes the element."
  }  
];

var zIndex = [
  {
    label:"z-0",
    detail:"z-index: 0;",
    documentation:"Sets the element's stack order to that of its parent."
  },
  {
    label:"z-10",
    detail:"z-index: 10;",
    documentation:"Sets the element's stack order."
  },
  {
    label:"z-20",
    detail:"z-index: 20;",
    documentation:"Sets the element's stack order."
  },
  {
    label:"z-30",
    detail:"z-index: 30;",
    documentation:"Sets the element's stack order."
  },
  {
    label:"z-40",
    detail:"z-index: 40;",
    documentation:"Sets the element's stack order."
  },
  {
    label:"z-50",
    detail:"z-index: 50;",
    documentation:"Sets the element's stack order."
  },
  {
    label:"z-auto",
    detail:"z-index: auto;",
    documentation:""
  }
];

// {
//   label:"",
//   detail:"",
//   documentation:""
// },

let classes = [];

// Combines all sections of classes into classes array prior to
// exporting for autocompletion.
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