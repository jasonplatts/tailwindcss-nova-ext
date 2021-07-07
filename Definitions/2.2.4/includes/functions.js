/* Returns a - (negative) prefix for non-zero negative values */
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
