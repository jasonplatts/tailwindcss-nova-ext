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

function getCurrentWord(context) {  
  const WORD_BREAK_CHARS = [" ", "\"", ":"];
  let currentWord = "";
  let wordStartDetected = false;
  let charCount = context.line.length - 1;
  
  while(wordStartDetected == false && charCount > 0) {
    if (WORD_BREAK_CHARS.includes(context.line.charAt(charCount)) == false) {
      currentWord = context.line.charAt(charCount) + currentWord;
      charCount--;
    } else {
      wordStartDetected = true;
    }
  }
  
  return currentWord;
}

var getRangeOfCurrentWord = function(editor, context) {
  let currentWord = getCurrentWord(context);

  return new Range(context.position - currentWord.length, context.position);
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