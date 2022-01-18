'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        COLOR OPACITY MODIFIERS        */

  let opacity = []

  config.scales.DEFAULT_OPACITY_SCALE.forEach(scale => {
    opacity.push(
      {
        label:         `/${scale.name}`,
        insertText:    `${scale.name}`,
        color:         new Color('rgb', [0, 0, 0, parseFloat(scale.value)]),
        detail:        `Opacity Modifier (${scale.value})`,
        documentation: `Set the color opacity of to the preceeding class to ${scale.value}.`
      }
    )
  })

  return {
    modifiers: {
      opacity: opacity
    }
  }
}
