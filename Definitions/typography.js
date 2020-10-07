const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');

/*        TEXT COLOR CLASSES        */

let textColor = [];

for(i = 0; i < COLORS.COLORS.length; i++) {  
  textColor.push(
    {
      label:"text-" + COLORS.COLORS[i].class,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:"color: #" + COLORS.COLORS[i].value + ";",
      documentation:"Set the text color an element to #" + COLORS.COLORS[i].value + "."
    },
  );
}

let classes = [];

classes = classes.concat(
  textColor
);

exports.classes = classes;