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

/*        BACKGROUND OPACITY CLASSES        */

let backgroundOpacity = [
  {
    label:"bg-opacity-0",
    detail:"--bg-opacity: 0;",
    documentation:"Set an element's background color opacity to 0."
  },
  {
    label:"bg-opacity-25",
    detail:"--bg-opacity: 0.25;",
    documentation:"Set an element's background color opacity to 0.25."
  },
  {
    label:"bg-opacity-50",
    detail:"--bg-opacity: 0.5;",
    documentation:"Set an element's background color opacity to 0.5."
  },
  {
    label:"bg-opacity-75",
    detail:"--bg-opacity: 0.75;",
    documentation:"Set an element's background color opacity to 0.75."
  },
  {
    label:"bg-opacity-100",
    detail:"--bg-opacity: 1;",
    documentation:"Set an element's background color opacity to 1."
  }
];

/*        BACKGROUND POSITION CLASSES        */

let backgroundPosition = [
  {
    label:"bg-bottom",
    detail:"background-position: bottom;",
    documentation:"Set the position of an element's background image to bottom."
  },
  {
    label:"bg-center",
    detail:"background-position: center;",
    documentation:"Set the position of an element's background image to center."
  },
  {
    label:"bg-left",
    detail:"background-position: left;",
    documentation:"Set the position of an element's background image to left."
  },
  {
    label:"bg-left-bottom",
    detail:"background-position: left-bottom;",
    documentation:"Set the position of an element's background image to left bottom."
  },
  {
    label:"bg-left-top",
    detail:"background-position: left-top;",
    documentation:"Set the position of an element's background image to left top."
  },
  {
    label:"bg-right",
    detail:"background-position: right;",
    documentation:"Set the position of an element's background image to right."
  },
  {
    label:"bg-right-bottom",
    detail:"background-position: right-bottom;",
    documentation:"Set the position of an element's background image to right bottom."
  },
  {
    label:"bg-right-top",
    detail:"background-position: right-top;",
    documentation:"Set the position of an element's background image to right top."
  },
  {
    label:"bg-top",
    detail:"background-position: top;",
    documentation:"Set the position of an element's background image to top."
  }
];

/*        BACKGROUND REPEAT CLASSES        */

let backgroundRepeat = [
  {
    label:"bg-repeat",
    detail:"background-repeat: repeat;",
    documentation:"Repeat the background image both vertically and horizontally."
  },
  {
    label:"bg-no-repeat",
    detail:"background-repeat: no-repeat;",
    documentation:"Set the background image to not repeat."
  },
  {
    label:"bg-repeat-x",
    detail:"background-repeat: repeat-x;",
    documentation:"Repeat the background image only horizontally."
  },
  {
    label:"bg-repeat-y",
    detail:"background-repeat: repeat-y;",
    documentation:"Repeat the background image only vertically."
  },
  {
    label:"bg-repeat-round",
    detail:"background-repeat: repeat-round;",
    documentation:"Repeat the background image stretching each of the images as needed to prevent any whitespace inbetween."
  },
  {
    label:"bg-repeat-space",
    detail:"background-repeat: repeat-space;",
    documentation:"Repeat the background image without clipping. Any whitespace is distributed inbetween the images."
  }
];

/*        BACKGROUND SIZE CLASSES        */

let backgroundSize = [
  {
    label:"bg-auto",
    detail:"background-size: auto;",
    documentation:"Display the background image at its default size."
  },
  {
    label:"bg-cover",
    detail:"background-size: cover;",
    documentation:"Scale the background image until it fills the background layer."
  },
  {
    label:"bg-contain",
    detail:"background-size: contain;",
    documentation:"Scale the background image to the outer edges without cropping or stretching."
  }
];

let classes = [];

classes = classes.concat(
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundOpacity,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize
);

exports.classes = classes;