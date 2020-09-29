// Adds RGB colors in the Nova required format.
function convertHexToRgbArray(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];

  // return new Color("rgb", [colorArray[0]/255, colorArray[1]/255, colorArray[2]/255]);
}

// Adds RGB colors in the Nova required format.
function convertRgbToColorObject(colorArray) {
  return new Color("rgb", [colorArray[0]/255, colorArray[1]/255, colorArray[2]/255]);
}

var convertHexToRgbColorObject = function(hex) {
  rgbArray = convertHexToRgbArray(hex);
  return convertRgbToColorObject(rgbArray);
}

exports.convertHexToRgbColorObject = convertHexToRgbColorObject;