function convertHexToRgbArray(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function convertRgbToColorObject(colorArray) {
  return new Color("rgb", [colorArray[0]/255, colorArray[1]/255, colorArray[2]/255]);
}

var convertHexToRgbColorObject = function(hex) {
  rgbArray = convertHexToRgbArray(hex);
  return convertRgbToColorObject(rgbArray);
}

var getRangeOfCurrentWord = function(editor, context) {
  /*
    The purpose of this function is to correctly identify the range of the class name being entered by
    the user, including hyphens.
    
    The problem it solves is that an autocomplete will insert the entire label and will not replace any
    of the class name typed before a hyphen because Nova considers it a separate word. For example: If
    a user types “bg-re” and then uses the autocomplete to select “bg-red-100”, the inserted class will
    be “bg-bg-red-100”.
  */
  let lineWordArray;
  let lastWordBeforeCursor;
  
  lineWordArray = context.line.split(" ");
  
  if (lineWordArray.length > 0) {
    lastWordBeforeCursor = lineWordArray[lineWordArray.length - 1];
  };
  
  return new Range(context.position - lastWordBeforeCursor.length, context.position);
}

var truncateString = function(string, maxLength) {
  if(string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  } else {
    return string;
  }
}

exports.convertHexToRgbColorObject = convertHexToRgbColorObject;
exports.getRangeOfCurrentWord = getRangeOfCurrentWord;
exports.truncateString = truncateString;