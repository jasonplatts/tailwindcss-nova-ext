const SCALES = require('../Scripts/scales.js');

/*        WIDTH CLASSES        */

let width = [];

width.push(
  {
    label:"w-auto",
    detail:"width: auto;",
    documentation:"Use to let the browser calculate and select the width for the element."
  }
);

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  width.push(
    {
      label:`w-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`width: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the element to a fixed width of ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    }
  );
}

for(i = 0; i < SCALES.CLASS_FRACTIONALS.length; i++) {
  width.push(
    {
      label:"w-" + SCALES.CLASS_FRACTIONALS[i].name,
      detail:"width: " + SCALES.CLASS_FRACTIONALS[i].value + "%;",
      documentation:"Set the element to a fluid width of " + SCALES.CLASS_FRACTIONALS[i].value + "%."
    }
  );
}

width.push(
  {
    label:"w-full",
    detail:"width: 100%;",
    documentation:"Set the element width to 100%."
  },
  {
    label:"w-screen",
    detail:"width: 100vw;",
    documentation:"Set the element to span the entire width of the viewport."
  }
);

/*        MIN-WIDTH CLASSES        */

let minWidth = [];

minWidth.push(
  {
    label:"min-w-0",
    detail:"min-width: 0;",
    documentation:"Set the minimum element width to 0."
  },
  {
    label:"min-w-full",
    detail:"min-width: 100%;",
    documentation:"Set the minimum element width to 100%."
  }
);

/*        MAX-WIDTH CLASSES        */

let maxWidth = [];

maxWidth.push(
  {
    label:"max-w-none",
    detail:"max-width: none;",
    documentation:"Set the maximum element width to none."
  }
);

for(i = 0; i < SCALES.CLASS_SIZES.length; i++) {
  maxWidth.push(
    {
      label:"max-w-" + SCALES.CLASS_SIZES[i].name,
      detail:"max-width: " + SCALES.CLASS_SIZES[i].value + "rem;",
      documentation:"Set the maximum element width to " + SCALES.CLASS_SIZES[i].value + "rem."
    }
  );
}

maxWidth.push(
  {
    label:"max-w-full",
    detail:"max-width: 100%;",
    documentation:"Set the maximum element width to 100%."
  }
);

for(i = 0; i < SCALES.BREAKPOINTS.length; i++) {
  maxWidth.push(
    {
      label:"max-w-screen-" + SCALES.BREAKPOINTS[i].name,
      detail:"max-width: " + SCALES.BREAKPOINTS[i].value + "px;",
      documentation:"Set the maximum element width to " + SCALES.BREAKPOINTS[i].value + " pixels."
    }
  );
}

/*        HEIGHT CLASSES        */

let height = [];

height.push(
  {
    label:"h-auto",
    detail:"height: auto;",
    documentation:"Use to let the browser determine the height for the element."
  },
  {
    label:"h-full",
    detail:"height: 100%;",
    documentation:"Set the element height to 100% of its parent, as long as the parent has a defined height."
  },
  {
    label:"h-screen",
    detail:"height: 100vh;",
    documentation:"Set the element to span the entire height of the viewport."
  },
);

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  height.push(
    {
      label:`h-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`height: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set an element to a fixed height of ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    }
  );
}

let minHeight = [
  {
    label:"min-h-0",
    detail:"min-height: 0;",
    documentation:"Set the minimum element height to 0."
  },
  {
    label:"min-h-full",
    detail:"min-height: 100%;",
    documentation:"Set the minimum element height to 100% of its parent, as long as the parent has a defined height."
  },
  {
    label:"min-h-screen",
    detail:"min-height: 100vh;",
    documentation:"Set the minimum element height to span the entire height of the viewport."
  }
];

let maxHeight = [
  {
    label:"max-h-full",
    detail:"max-height: 100%;",
    documentation:"Set the maximum element height to 100% of its parent, as long as the parent has a defined height."
  },
  {
    label:"max-h-screen",
    detail:"max-height: 100vh;",
    documentation:"Set the maximum element height to span the entire height of the viewport."
  }
];

let classes = [];

classes = classes.concat(
 width,
 minWidth,
 maxWidth,
 height,
 minHeight,
 maxHeight
);

exports.classes = classes;