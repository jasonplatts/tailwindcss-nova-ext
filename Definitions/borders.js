const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');

/*        BORDER RADIUS CLASSES        */

let borderRemSizes = [];
borderRemSizes["sm"]       = "0.125rem" 
borderRemSizes["default"]  = "0.25rem"
borderRemSizes["md"]       = "0.375rem"
borderRemSizes["lg"]       = "0.5rem"

let borderFullSize         = "9999px"

let borderRadius = [];

// None Classes -- No breakpoint options for None Classes
borderRadius.push(
  {
    label:`rounded-none`,
    detail:"border-radius: 0;",
    documentation:"Remove any border radius (rounded corners) applied to the element."
  },
  {
    label:"rounded-t-none",
    detail:"border-top-left-radius: 0; border-top-right-radius: 0;",
    documentation:"Remove any top left and top right border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-r-none",
    detail:"border-top-right-radius: 0; border-bottom-right-radius: 0;",
    documentation:"Remove any top right and bottom right border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-b-none",
    detail:"border-bottom-right-radius: 0; border-bottom-left-radius: 0;",
    documentation:"Remove any bottom left and bottom right border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-l-none",
    detail:"border-top-left-radius: 0; border-bottom-left-radius: 0;",
    documentation:"Remove any top left and bottom left border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-tl-none",
    detail:"border-top-left-radius: 0;",
    documentation:"Remove any top left border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-tr-none",
    detail:"border-top-right-radius: 0;",
    documentation:"Remove any top right border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-br-none",
    detail:"border-bottom-right-radius: 0;",
    documentation:"Remove any bottom right border radius (rounded corners) applied to an element."
  },
  {
    label:"rounded-bl-none",
    detail:"border-bottom-left-radius: 0;",
    documentation:"Remove any bottom left border radius (rounded corners) applied to an element."
  }
);

// Full Classes -- No breakpoint options for Full Classes
borderRadius.push(
  {
    label:`rounded-full`,
    detail:`border-radius: ${borderFullSize};`,
    documentation:`Set an element's border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-t-full`,
    detail:`border-top-left-radius: ${borderFullSize}; border-top-right-radius: ${borderFullSize};`,
    documentation:`Set an element's top left and top right border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-r-full`,
    detail:`border-top-right-radius: ${borderFullSize}; border-bottom-right-radius: ${borderFullSize};`,
    documentation:`Set an element's top right and bottom right border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-b-full`,
    detail:`border-bottom-right-radius: ${borderFullSize}; border-bottom-left-radius: ${borderFullSize};`,
    documentation:`Set an element's bottom left and bottom right border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-l-full`,
    detail:`border-top-left-radius: ${borderFullSize}; border-bottom-left-radius: ${borderFullSize};`,
    documentation:`Set an element's top left and bottom left border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-tl-full`,
    detail:`border-top-left-radius: ${borderFullSize};`,
    documentation:`Set an element's top left border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-tr-full`,
    detail:`border-top-right-radius: ${borderFullSize};`,
    documentation:`Set an element's top right border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-br-full`,
    detail:`border-bottom-right-radius: ${borderFullSize};`,
    documentation:`Set an element's bottom right border radius (rounded corners) to ${borderFullSize}.`
  },
  {
    label:`rounded-bl-full`,
    detail:`border-bottom-left-radius: ${borderFullSize};`,
    documentation:`Set an element's bottom left border radius (rounded corners) to ${borderFullSize}.`
  }
);

// Sm, Md, Lg, and Full Size Classes
for(const [key, value] of Object.entries(borderRemSizes)){
  let labelAffix = "";
  
  if(key!=="default") {
    labelAffix = `-${key}`;
  }
  
  borderRadius.push(
    {
      label:`rounded${labelAffix}`,
      detail:`border-radius: ${value};`,
      documentation:`Set an element's border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-t${labelAffix}`,
      detail:`border-top-left-radius: ${value}; border-top-right-radius: ${value};`,
      documentation:`Set an element's top left and top right border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-r${labelAffix}`,
      detail:`border-top-right-radius: ${value}; border-bottom-right-radius: ${value};`,
      documentation:`Set an element's top right and bottom right border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-b${labelAffix}`,
      detail:`border-bottom-right-radius: ${value}; border-bottom-left-radius: ${value};`,
      documentation:`Set an element's bottom left and bottom right border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-l${labelAffix}`,
      detail:`border-top-left-radius: ${value}; border-bottom-left-radius: ${value};`,
      documentation:`Set an element's top left and bottom left border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-tl${labelAffix}`,
      detail:`border-top-left-radius: ${value};`,
      documentation:`Set an element's top left border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-tr${labelAffix}`,
      detail:`border-top-right-radius: ${value};`,
      documentation:`Set an element's top right border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-br${labelAffix}`,
      detail:`border-bottom-right-radius: ${value};`,
      documentation:`Set an element's bottom right border radius (rounded corners) to ${value}.`
    },
    {
      label:`rounded-bl${labelAffix}`,
      detail:`border-bottom-left-radius: ${value};`,
      documentation:`Set an element's bottom left border radius (rounded corners) to ${value}.`
    }
  );
}

let classes = [];

classes = classes.concat(
  borderRadius
);

exports.classes = classes;