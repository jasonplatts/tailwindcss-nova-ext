const SCALES = require('../Scripts/scales.js');

/*        PADDING CLASSES        */

let padding = [];

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  padding.push(
    {
      label:`p-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the padding on all sides of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    }
  )
}

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  padding.push(
    {
      label:`py-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding-top: ${SCALES.DEFAULT_SPACING_SCALE[i].size}; padding-bottom: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the vertical padding of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    },
    {
      label:`px-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding-left: ${SCALES.DEFAULT_SPACING_SCALE[i].size}; padding-right: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the horizontal padding of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    }
  );
}

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  padding.push(
    {
      label:`pt-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding-top: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the top padding of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    },
    {
      label:`pr-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding-right: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the right padding of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    },
    {
      label:`pb-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding-bottom: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the bottom padding of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    },
    {
      label:`pl-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
      detail:`padding-left: ${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
      documentation:`Set the left padding of an element to ${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
    }
  );
}

/*        MARGIN CLASSES        */

function addMarginClasses(i, prefixValue = "") {
  let marginArray = [];
  
  // Do not add negative 0 classes.
  if ((prefixValue == "") || (prefixValue == "-" && SCALES.DEFAULT_SPACING_SCALE[i].name !== "0")) {
    marginArray.push(
      {
        label:`${prefixValue}m-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the margin on all sides of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}my-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-top: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}; margin-bottom: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the vertical margin of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}mx-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-left: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}; margin-right: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the horizontal margin of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}mt-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-top: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the top margin of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}mr-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-right: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the right margin of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}mb-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-bottom: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the bottom margin of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}ml-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-left: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the left margin of an element to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
    );
  } 
  
  return marginArray;
}

let margin = [];

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  
  margin = margin.concat(addMarginClasses(i));
  margin = margin.concat(addMarginClasses(i, "-"));
}

margin.push(
  {
    label:"m-auto",
    detail:"margin: 1px;",
    documentation:"Set the element's margin automatically, which is often used to center an element."
  },
  {
    label:"my-auto",
    detail:"margin-top: auto; margin-bottom: auto;",
    documentation:"Let the browser determine an element's top and bottom margin automatically."
  },
  {
    label:"mx-auto",
    detail:"margin-left: auto; margin-right: auto;",
    documentation:"Let the browser determine an element's left and right margin automatically."
  },
  {
    label:"mt-auto",
    detail:"margin-top: auto;",
    documentation:"Let the browser determine an element's top margin automatically."
  },
  {
    label:"mr-auto",
    detail:"margin-right: auto;",
    documentation:"Let the browser determine an element's right margin automatically."
  },
  {
    label:"mb-auto",
    detail:"margin-bottom: auto;",
    documentation:"Let the browser determine an element's bottom margin automatically."
  },
  {
    label:"ml-auto",
    detail:"margin-left: auto;",
    documentation:"Let the browser determine an element's left margin automatically."
  }
);

/*        SPACE BETWEEN CLASSES        */

function addSpaceBetweenClasses(i, prefixValue = "") {
  let spaceBetweenArray = [];
  
  // Do not add negative 0 classes.
  if ((prefixValue == "") || (prefixValue == "-" && SCALES.DEFAULT_SPACING_SCALE[i].name !== "0")) {
    spaceBetweenArray.push(
      {
        label:`${prefixValue}space-y-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-top: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the vertical space between child elements to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      },
      {
        label:`${prefixValue}space-x-${SCALES.DEFAULT_SPACING_SCALE[i].name}`,
        detail:`margin-left: ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size};`,
        documentation:`Set the horizontal space between child elements to ${prefixValue}${SCALES.DEFAULT_SPACING_SCALE[i].size}.`
      }
    );
  } 
  
  return spaceBetweenArray;
}

let spaceBetween = [];

for(i = 0; i < SCALES.DEFAULT_SPACING_SCALE.length; i++) {
  spaceBetween = spaceBetween.concat(addSpaceBetweenClasses(i));
  spaceBetween = spaceBetween.concat(addSpaceBetweenClasses(i, "-"));
}

spaceBetween.push(
  {
    label:"space-y-reverse",
    detail:"--space-y-reverse: 1;",
    documentation:"If elements are in reverse order (eg: flex-col-reverse), set the vertical space to the correct side of the element."
  },
  {
    label:"space-x-reverse",
    detail:"--space-x-reverse: 1;",
    documentation:"If elements are in reverse order (eg: flex-row-reverse), set the horizontal space to the correct side of the element."
  }
);

let classes = [];

classes = classes.concat(
 padding,
 margin,
 spaceBetween
);

exports.classes = classes;
