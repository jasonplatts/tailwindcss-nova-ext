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

/*        MARGIN CLASSES        */

let margin = [];

margin.push(
  {
    label:"m-0",
    detail:"margin: 0;",
    documentation:"Set margin to 0 on all sides of an element."
  }
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  margin.push(
    {
      label:"m-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set a margin of " + CONSTANTS.CLASS_REMS[i].value + "rem on all sides of an element."
    },
    {
      label:"-m-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set a negative margin of " + CONSTANTS.CLASS_REMS[i].value + "rem on all sides of an element."
    }
  )
}

margin.push(
  {
    label:"m-auto",
    detail:"margin: 1px;",
    documentation:"Set the element's margin automatically, which is often used to center an element."
  }
);

margin.push(
  {
    label:"m-px",
    detail:"margin: 1px;",
    documentation:"Set a margin of 1px on all sides of an element."
  },
  {
    label:"-m-px",
    detail:"margin: -1px;",
    documentation:"Set a negative margin of -1px on all sides of an element."
  }
);

margin.push(
  {
    label:"my-0",
    detail:"margin-top: 0; margin-bottom: 0;",
    documentation:"Set an element's top and bottom margin to 0."
  },
  {
    label:"mx-0",
    detail:"margin-left: 0; margin-right: 0;",
    documentation:"Set an element's left and right margin to 0."
  }
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  margin.push(
    {
      label:"my-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-top: " + CONSTANTS.CLASS_REMS[i].value + "rem;" + 
        " margin-bottom: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's top and bottom margin to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"-my-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-top: -" + CONSTANTS.CLASS_REMS[i].value + "rem;" + 
        " margin-bottom: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's top and bottom margin to -" + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"mx-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-left: " + CONSTANTS.CLASS_REMS[i].value + "rem;" + 
        " margin-right: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's left and right margin to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"-mx-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-left: -" + CONSTANTS.CLASS_REMS[i].value + "rem;" + 
        " margin-right: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's left and right margin to -" + CONSTANTS.CLASS_REMS[i].value + "rem."
    }
  );
}

margin.push(
  {
    label:"my-auto",
    detail:"margin-top: auto; margin-bottom: auto;",
    documentation:"Let the browser determine an element's top and bottom margin automatically."
  },
  {
    label:"mx-auto",
    detail:"margin-left: auto; margin-right: auto;",
    documentation:"Let the browser determine an element's left and right margin automatically."
  }
);

margin.push(
  {
    label:"my-px",
    detail:"margin-top: 1px; margin-bottom: 1px;",
    documentation:"Set an element's top and bottom margin to 1px."
  },
  {
    label:"-my-px",
    detail:"margin-top: -1px; margin-bottom: -1px;",
    documentation:"Set an element's top and bottom margin to -1px."
  },
  {
    label:"mx-px",
    detail:"margin-left: 1px; margin-right: 1px;",
    documentation:"Set an element's left and right margin to 1px."
  },
  {
    label:"-mx-px",
    detail:"margin-left: -1px; margin-right: -1px;",
    documentation:"Set an element's left and right margin to -1px."
  }
);

margin.push(
  {
    label:"mt-0",
    detail:"margin-top: 0;",
    documentation:"Set an element's top margin to 0."
  },
  {
    label:"mr-0",
    detail:"margin-right: 0;",
    documentation:"Set an element's right margin to 0."
  },
  {
    label:"mb-0",
    detail:"margin-bottom: 0;",
    documentation:"Set an element's bottom margin to 0."
  },
  {
    label:"ml-0",
    detail:"margin-left: 0;",
    documentation:"Set an element's left margin to 0."
  }
);

for(i = 0; i < CONSTANTS.CLASS_REMS.length; i++) {
  margin.push(
    {
      label:"mt-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-top: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's top margin to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"-mt-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-top: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's top margin to -" + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"mr-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-right: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's right margin to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"-mr-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-right: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's right margin to -" + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"mb-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-bottom: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's bottom margin to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"-mb-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-bottom: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's bottom margin to -" + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"ml-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-left: " + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's left margin to " + CONSTANTS.CLASS_REMS[i].value + "rem."
    },
    {
      label:"-ml-" + CONSTANTS.CLASS_REMS[i].class,
      detail:"margin-left: -" + CONSTANTS.CLASS_REMS[i].value + "rem;",
      documentation:"Set an element's left margin to -" + CONSTANTS.CLASS_REMS[i].value + "rem."
    }
  );
}

margin.push(
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

margin.push(
  {
    label:"mt-px",
    detail:"margin-top: 1px;",
    documentation:"Set an element's top margin to 1px."
  },
  {
    label:"-mt-px",
    detail:"margin-top: -1px;",
    documentation:"Set an element's top margin to -1px."
  },
  {
    label:"mr-px",
    detail:"margin-right: 1px;",
    documentation:"Set an element's right margin to 1px."
  },
  {
    label:"-mr-px",
    detail:"margin-right: -1px;",
    documentation:"Set an element's right margin to -1px."
  },
  {
    label:"mb-px",
    detail:"margin-bottom: 1px;",
    documentation:"Set an element's bottom margin to 1px."
  },
  {
    label:"-mb-px",
    detail:"margin-bottom: -1px;",
    documentation:"Set an element's bottom margin to -1px."
  },
  {
    label:"ml-px",
    detail:"margin-left: 1px;",
    documentation:"Set an element's left margin to 1px."
  },
  {
    label:"-ml-px",
    detail:"margin-left: -1px;",
    documentation:"Set an element's left margin to -1px."
  }
);


let classes = [];

classes = classes.concat(
 padding,
 margin
);

exports.classes = classes;
