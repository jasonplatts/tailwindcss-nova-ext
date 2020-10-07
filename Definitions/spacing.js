const CONSTANTS = require('../Scripts/constants.js');

/*        PADDING CLASSES        */

let padding = [];

padding.push(
  {
    label:"p-0",
    detail:"padding: 0;",
    documentation:"Set padding to 0 on all sides of an element."
  }
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  padding.push(
    {
      label:"p-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set " + CONSTANTS.CLASS_REMS[i].value + "rem of padding to all sides of an element."
    }
  )
}

padding.push(
  {
    label:"p-px",
    detail:"padding: 1px;",
    documentation:"Set 1px of padding to all sides of an element."
  }
);

padding.push(
  {
    label:"py-0",
    detail:"padding-top: 0; padding-bottom: 0;",
    documentation:"Set an element's top and bottom padding to 0."
  },
  {
    label:"px-0",
    detail:"padding-left: 0; padding-right: 0;",
    documentation:"Set an element's left and right padding to 0."
  }
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  padding.push(
    {
      label:"py-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding-top: " + CONSTANTS.CLASS_REMS[i].value + "rem;" + 
        " padding-bottom: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's top and bottom padding to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"px-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding-left: " + CONSTANTS.CLASS_REMS[i].value + "rem;" + 
        " padding-right: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's left and right padding to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    }
  );
}

padding.push(
  {
    label:"py-px",
    detail:"padding-top: 1px; padding-bottom: 1px;",
    documentation:"Set an element's top and bottom padding to 1px."
  },
  {
    label:"px-px",
    detail:"padding-left: 1px; padding-right: 1px;",
    documentation:"Set an element's left and right padding to 1px."
  }
);

padding.push(
  {
    label:"pt-0",
    detail:"padding-top: 0;",
    documentation:"Set an element's top padding to 0."
  },
  {
    label:"pr-0",
    detail:"padding-right: 0;",
    documentation:"Set an element's right padding to 0."
  },
  {
    label:"pb-0",
    detail:"padding-bottom: 0;",
    documentation:"Set an element's bottom padding to 0."
  },
  {
    label:"pl-0",
    detail:"padding-left: 0;",
    documentation:"Set an element's left padding to 0."
  }
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  padding.push(
    {
      label:"pt-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding-top: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's top padding to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"pr-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding-right: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's right padding to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"pb-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding-bottom: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's bottom padding to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"pl-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"padding-left: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's left padding to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    }
  );
}

padding.push(
  {
    label:"pt-px",
    detail:"padding-top: 1px;",
    documentation:"Set an element's top padding to 1px."
  },
  {
    label:"pr-px",
    detail:"padding-right: 1px;",
    documentation:"Set an element's right padding to 1px."
  },
  {
    label:"pb-px",
    detail:"padding-bottom: 1px;",
    documentation:"Set an element's bottom padding to 1px."
  },
  {
    label:"pl-px",
    detail:"padding-left: 1px;",
    documentation:"Set an element's left padding to 1px."
  }
);

let classes = [];

classes = classes.concat(
 padding
);

exports.classes = classes;
