/*        APPEARANCE CLASSES        */

let appearance = [
  {
    label:"appearance-none",
    detail:"appearance: none;",
    documentation:"Resets any browser specific styling on an element. Often used when creating custom form components."
  },
];

/*        CURSOR CLASSES        */

let cursor = [
  {
    label:"cursor-auto",
    detail:"cursor: auto;",
    documentation:"Allow the browser to change the cursor based on the current context, such as the text cursor when hovering over text."
  },
  {
    label:"cursor-default",
    detail:"cursor: default;",
    documentation:"Set the cursor to the platform-dependent default cursor, which is usually an arrow."
  },
  {
    label:"cursor-pointer",
    detail:"cursor: pointer;",
    documentation:"Set the cursor to indicate an interactive element, which is usually a pointing hand."
  },
  {
    label:"cursor-wait",
    detail:"cursor: wait;",
    documentation:"Set the cursor to indicate something is happening in the background, which is usually an hourglass or watch."
  },
  {
    label:"cursor-text",
    detail:"cursor: text;",
    documentation:"Set the cursor to indicate the text can be selected, which is usually an I-beam."
  },
  {
    label:"cursor-move",
    detail:"cursor: move;",
    documentation:"Set the cursor to indicate something can be moved."
  },
  {
    label:"cursor-not-allowed",
    detail:"cursor: not-allowed;",
    documentation:"Set the cursor to indicate something can not be interacted with or clicked."
  }
];

/*        OUTLINE CLASSES        */

let outline = [
  {
    label:"outline-none",
    detail:"outline: 2px solid transparent; outline-offset: 2px;",
    documentation:"Use to hide the default browser outline on focused elements. Custom focus styling should be applied for accessibility."
  },
  {
    label:"outline-white",
    detail:"outline: 2px dotted white; outline-offset: 2px;",
    documentation:"Use to add a white 2px dotted border around the element. Useful as an accessible general purpose custom focus style."
  },
  {
    label:"outline-black",
    detail:"outline: 2px dotted black; outline-offset: 2px;",
    documentation:"Use to add a black 2px dotted border around the element. Useful as an accessible general purpose custom focus style."
  }
];

/*        POINTER EVENTS CLASSES        */

let pointerEvents = [
  {
    label:"pointer-events-none",
    detail:"pointer-events: none;",
    documentation:"Use to make an element ignore pointer events. Events still trigger on child elements and pass-through those below target."
  },
  {
    label:"pointer-events-auto",
    detail:"pointer-events: auto;",
    documentation:"Use to revert to the default browser behavior for pointer events (like :hover and click)."
  }
];
   
let classes = [];
  
classes = classes.concat(
  appearance,
  cursor,
  outline,
  pointerEvents
);

exports.classes = classes;