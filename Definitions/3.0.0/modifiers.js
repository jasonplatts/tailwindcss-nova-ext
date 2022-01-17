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

  /*        ARBITRARY VALUES        */

  let arbitraryValue = []

  arbitraryValue.push(
    {
      label:         `[]`,
      insertText:    "[${0}]",
      insertTextFormat: `snippet`,
      detail:        ``,
      documentation: `Enter a one-off arbitrary value that should belong in the Tailwind theme. Useful for additional colors (text-[#50d71e]), opacity (opacity-[.67]), and before and after content (after:content-['*']).`
    }
  )

  return {
    modifiers: {
      opacity: opacity,
      arbitraryValue: arbitraryValue
    }
  }
}
