'use strict'

function convertHexToRgbArray(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b
  })

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
}

function convertRgbToColorObject(colorArray) {
  return new Color('rgb', [colorArray[0]/255, colorArray[1]/255, colorArray[2]/255])
}

exports.convertHexToRgbColorObject = function(hex) {
  let rgbArray = convertHexToRgbArray(hex)
  return convertRgbToColorObject(rgbArray)
}

function getCurrentWord(context) {
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

/*
Format extension errors in the console.
*/
exports.showConsoleError = function showConsoleError(error) {
  let prefix = ''
  console.error(prefix, error)
}

exports.showNotification = function showNotification(title, body) {
  let notification = new NotificationRequest('tailwind-notification')

  notification.title   = title
  notification.body    = body
  notification.actions = [nova.localize('OK')]

  nova.notifications.add(notification)
}

exports.getRangeOfCurrentWord = function(editor, context) {
  let currentWord = getCurrentWord(context)

  return new Range(context.position - currentWord.length, context.position)
}

exports.truncateString = function(string, maxLength) {
  if(string.length > maxLength) {
    return string.slice(0, maxLength) + '...'
  } else {
    return string
  }
}

exports.getVersion = function getVersion() {
  let version = nova.workspace.config.get('tailwindcss.workspace.version')

  if (version == null) {
    let definitionArray = nova.fs.listdir(nova.extension.path + '/Definitions')
    version = definitionArray.sort(function(a, b) {return b-a})[0]
  }

  return version
}

exports.getVersionDefinitionFiles = function getVersionDefinitionFiles() {
  let path = nova.extension.path + '/Definitions/' + this.getVersion()
  let definitions = nova.fs.listdir(path)

  definitions = definitions.filter((definition) => {
    if (nova.fs.stat(path + '/' + definition).isFile()) {
      return definition
    }
  })

  return definitions
}
