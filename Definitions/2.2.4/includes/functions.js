/* Returns a - (negative) prefix for non-zero negative values */
// TODO: Remove this file, move functionality to layout.js.
exports.getValuePrefix = function getValuePrefix(negative, value) {
  let prefix = ''

  if (negative == '-') {
    if (value !== '0px') {
      prefix = '-'
    } else {
      prefix = ''
    }
  }

  return prefix
}
