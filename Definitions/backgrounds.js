const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');

/*        BACKGROUND ATTACHMENT CLASSES        */

let backgroundAttachment = [
  {
    label:"bg-fixed",
    detail:"background-attachment: fixed;",
    documentation:"Fix the background image relative to the viewport."
  },
  {
    label:"bg-local",
    detail:"background-attachment: local;",
    documentation:"Scroll the background image with the container and the viewport."
  },
  {
    label:"bg-scroll",
    detail:"background-attachment: scroll;",
    documentation:"Scroll the background image with the viewport, but not with the container."
  }
];

/*        BACKGROUND CLIP CLASSES        */

let backgroundClip = [
  {
    label:"bg-clip-border",
    detail:"background-clip: border-box;",
    documentation:"Clip an element's background up to and including the border."
  },
  {
    label:"bg-clip-local",
    detail:"background-clip: padding-box;",
    documentation:"Clip an element's background up to the inside edge of the border."
  },
  {
    label:"bg-clip-scroll",
    detail:"background-clip: content-box;",
    documentation:"Clip an element's background up to the edge of the content box."
  },
  {
    label:"bg-clip-text",
    detail:"background-clip: text;",
    documentation:"Crop an element's background to match the shape of the text."
  }
];

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
    label:"bg-current",
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
  backgroundColor,
  backgroundAttachment
);

exports.classes = classes;