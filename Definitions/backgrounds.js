const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');

/*        BACKGROUND COLOR CLASSES        */

let backgroundColor = [];

backgroundColor.push(
  {
    label:"bg-transparent",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"background-color: transparent;",
    documentation:"Set the background color of an element to transparent."
  },
  {
    label:"text-current",
    detail:"color: currentColor;",
    documentation:"Set the background color of an element to the currentColor."
  }
);

for(i = 0; i < COLORS.COLORS.length; i++) {  
  backgroundColor.push(
    {
      label:"bg-" + COLORS.COLORS[i].class,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:"background-color: #" + COLORS.COLORS[i].value + ";",
      documentation:"Set the background color of an element to #" + COLORS.COLORS[i].value + "."
    }
  );
}

let classes = [];

classes = classes.concat(
  backgroundColor
);

exports.classes = classes;