const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');

/*        BORDER RADIUS CLASSES        */

let borderRaidusSizes = [];
borderRaidusSizes["sm"]       = "0.125rem" 
borderRaidusSizes["default"]  = "0.25rem"
borderRaidusSizes["md"]       = "0.375rem"
borderRaidusSizes["lg"]       = "0.5rem"

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
for(const [key, value] of Object.entries(borderRaidusSizes)){
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

/*        BORDER WIDTH CLASSES        */

let borderWidthSizes = [];
borderWidthSizes["0"] = "0";
borderWidthSizes["2"] = "2px";
borderWidthSizes["4"] = "4px";
borderWidthSizes["8"] = "8px";
borderWidthSizes["default"] = "1px";

let borderWidth = [];

for(const [key, value] of Object.entries(borderWidthSizes)) {
  let labelAffix = "";
  
  if(key!=="default") {
    labelAffix = `-${key}`;
  }

  borderWidth.push(
    {
      label:`border${labelAffix}`,
      detail:`border-width: ${value};`,
      documentation:`Set the border width for all sides of an element to ${value}.`
    },
    {
      label:`border-t${labelAffix}`,
      detail:`border-top-width: ${value};`,
      documentation:`Set the top border width of an element to ${value}.`
    },
    {
      label:`border-r${labelAffix}`,
      detail:`border-right-width: ${value};`,
      documentation:`Set the right border width of an element to ${value}.`
    },
    {
      label:`border-b${labelAffix}`,
      detail:`border-bottom-width: ${value};`,
      documentation:`Set the bottom border width of an element to ${value}.`
    },
    {
      label:`border-l${labelAffix}`,
      detail:`border-left-width: ${value};`,
      documentation:`Set the left border width of an element to ${value}.`
    }
  ); 
}

/*        BORDER COLOR CLASSES        */

let borderColor = [];

borderColor.push(
  {
    label:"border-transparent",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"border-color: transparent;",
    documentation:"Set the border color of an element to transparent."
  },
  {
    label:"border-current",
    detail:"border-color: currentColor;",
    documentation:"Set the border color of an element to the currentColor."
  }
);

for(i = 0; i < COLORS.COLORS.length; i++) {  
  borderColor.push(
    {
      label:"border-" + COLORS.COLORS[i].class,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:"border-color: #" + COLORS.COLORS[i].value + ";",
      documentation:"Set the border color of an element to #" + COLORS.COLORS[i].value + "."
    }
  );
}

/*        BORDER OPACITY CLASSES        */

let borderOpacity = [
  {
    label:"border-opacity-0",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"--border-opacity: 0;",
    documentation:"Set the opacity of an element's border to 0."
  },
  {
    label:"border-opacity-25",
    color: new Color("rgb", [0, 0, 0, 0.25]),
    detail:"--border-opacity: 0.25;",
    documentation:"Set the opacity of an element's border to 0.25."
  },
  {
    label:"border-opacity-50",
    color: new Color("rgb", [0, 0, 0, 0.5]),
    detail:"--border-opacity: 0.5;",
    documentation:"Set the opacity of an element's border to 0.5."
  },
  {
    label:"border-opacity-75",
    color: new Color("rgb", [0, 0, 0, 0.75]),
    detail:"--border-opacity: 0.75;",
    documentation:"Set the opacity of an element's border to 0.75."
  },
  {
    label:"border-opacity-100",
    color: new Color("rgb", [0, 0, 0, 1]),
    detail:"--border-opacity: 1;",
    documentation:"Set the opacity of an element's border to 1."
  }
];

/*        BORDER STYLE CLASSES        */

let borderStyle = [
  {
    label:"border-solid",
    detail:"border-style: solid;",
    documentation:"Set an element's border style to solid."
  },
  {
    label:"border-dashed",
    detail:"border-style: dashed;",
    documentation:"Set an element's border style to dashed."
  },
  {
    label:"border-dotted",
    detail:"border-style: dotted;",
    documentation:"Set an element's border style to dotted."
  },
  {
    label:"border-double",
    detail:"border-style: double;",
    documentation:"Set an element's border style to double."
  },
  {
    label:"border-none",
    detail:"border-style: none;",
    documentation:"Remove an element's border style."
  }
];
 
let classes = [];

classes = classes.concat(
  borderRadius,
  borderWidth,
  borderColor,
  borderOpacity,
  borderStyle
);

exports.classes = classes;