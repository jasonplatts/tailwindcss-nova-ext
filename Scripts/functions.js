'use strict'

exports.convertHexToRgbArray = function(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b
  })

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
}

exports.convertRgbToColorObject = function(colorArray) {
  return new Color('rgb', [colorArray[0]/255, colorArray[1]/255, colorArray[2]/255])
}

exports.convertHexToRgbColorObject = function(hex) {
  let rgbArray = this.convertHexToRgbArray(hex)
  return this.convertRgbToColorObject(rgbArray)
}

exports.getCurrentWord = function(context) {
  const WORD_BREAK_CHARS = [' ', '\'', ':']
  let currentWord = ''
  let wordStartDetected = false
  let charCount = context.line.length - 1

  while(wordStartDetected == false && charCount > 0) {
    if (WORD_BREAK_CHARS.includes(context.line.charAt(charCount)) == false) {
      currentWord = context.line.charAt(charCount) + currentWord
      charCount--
    } else {
      wordStartDetected = true
    }
  }

  return currentWord
}

exports.getRangeOfCurrentWord = function(editor, context) {
  let currentWord = this.getCurrentWord(context)

  return new Range(context.position - currentWord.length, context.position)
}

/*
  Converts to uppercase and adds spaces to a string in camel case with no spaces.
*/
exports.camelCaseToUpperCase = function(string) {
  let newString = ''

  newString = string.split(/(?=[A-Z])/).join(' ').toUpperCase()

  return newString
}

/*
  Converts to title case and adds spaces to a string in camel case with no spaces.
*/
exports.camelCaseToTitleCase = function(string) {
  let newString = ''
  let firstChar = string.substr(0, 1)

  newString = string.split(/(?=[A-Z])/).join(' ')
  newString = firstChar.toUpperCase() + newString.substr(1, newString.length - 1)

  return newString
}

/*
  Truncates a string to a specified length.
*/
exports.truncateString = function(string, maxLength) {
  if(string.length > maxLength) {
    return string.slice(0, maxLength) + '…'
  } else {
    return string
  }
}

/*
  Adds a string to the end of the documentation property in each object within the array.
*/
exports.addStringToDocumentation = function(array, string) {
  array.forEach(object => {
    object.documentation = `${object.documentation} ${string}`
  })

  return array
}

/*
  Adds a required class to the end of the documentation property in each object within the array.
*/
exports.addRequiredClass = function(array, requiredClass) {
  array.forEach(object => {
    object.documentation = `${object.documentation} *Requires the '${requiredClass}' class.`
  })

  return array
}

/*
  Format extension errors in the console.
*/
exports.showConsoleError = function showConsoleError(error) {
  let prefix = ''
  console.error(prefix, error)
}

/*
  Show notifications to the user.
*/
exports.showNotification = function showNotification(title, body) {
  let notification = new NotificationRequest('tailwind-notification')

  notification.title   = title
  notification.body    = body
  notification.actions = [nova.localize('OK')]

  nova.notifications.add(notification)
}
