const FUNCTIONS = require('../Scripts/functions.js');

let backgroundColor = [
  {
    label:"bg-red-100",
    color: FUNCTIONS.convertHexToRgbColorObject('fff5f5'),
    detail:"background-color: #fff5f5;",
    documentation:"Sets the element background color to red-100."
  },
  {
    label:"bg-red-200",
    color: FUNCTIONS.convertHexToRgbColorObject('fed7d7'),
    detail:"background-color: #fff5f5;",
    documentation:"Sets the element background color to red-200."
  },
  {
    label:"bg-red-300",
    color: FUNCTIONS.convertHexToRgbColorObject('feb2b2'),
    detail:"background-color: #feb2b2;",
    documentation:"Sets the element background color to red-300."
  },
  {
    label:"bg-red-400",
    color: FUNCTIONS.convertHexToRgbColorObject('fc8181'),
    detail:"background-color: #fc8181;",
    documentation:"Sets the element background color to red-400."
  },
  {
    label:"bg-red-500",
    color: FUNCTIONS.convertHexToRgbColorObject('f56565'),
    detail:"background-color: #f56565;",
    documentation:"Sets the element background color to red-500."
  },
  {
    label:"bg-red-600",
    color: FUNCTIONS.convertHexToRgbColorObject('e53e3e'),
    detail:"background-color: #e53e3e;",
    documentation:"Sets the element background color to red-600."
  },
  {
    label:"bg-red-700",
    color: FUNCTIONS.convertHexToRgbColorObject('c53030'),
    detail:"background-color: #c53030;",
    documentation:"Sets the element background color to red-700."
  },
  {
    label:"bg-red-800",
    color: FUNCTIONS.convertHexToRgbColorObject('9b2c2c'),
    detail:"background-color: #9b2c2c;",
    documentation:"Sets the element background color to red-800."
  },
  {
    label:"bg-red-900",
    color: FUNCTIONS.convertHexToRgbColorObject('742a2a'),
    detail:"background-color: #742a2a;",
    documentation:"Sets the element background color to red-900."
  }
];

let classes = [];

// Combines all sections of classes into classes array prior to
// exporting for autocompletion.
classes = classes.concat(
  backgroundColor
);

exports.classes = classes;