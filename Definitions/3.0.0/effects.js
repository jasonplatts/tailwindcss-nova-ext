'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        BOX SHADOW CLASSES        */

  let boxShadow = [
    {
      label:         'shadow-sm',
      detail:        '--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply the sm box shadow to an element.'
    },
    {
      label:         'shadow',
      detail:        '--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply the normal outer box shadow to an element.'
    },
    {
      label:         'shadow-md',
      detail:        '--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply the md outer box shadow to an element.'
    },
    {
      label:         'shadow-lg',
      detail:        '--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply the lg outer box shadow to an element.'
    },
    {
      label:         'shadow-xl',
      detail:        '--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply the xl outer box shadow to an element.'
    },
    {
      label:         'shadow-2xl',
      detail:        '--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply the 2xl outer box shadow to an element.'
    },
    {
      label:         'shadow-inner',
      detail:        '--tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Apply a subtle inset box shadow to an element. Useful for form controls or wells.'
    },
    {
      label:         'shadow-none',
      detail:        '--tw-shadow: 0 0 #0000; box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
      documentation: 'Remove any existing box shadow styling on an element.'
    },
  ]

  /*        BOX SHADOW COLOR CLASSES        */

    let boxShadowColor = []

    boxShadowColor.push(
      {
        label:         'shadow-inherit',
        detail:        '--tw-shadow-color: inherit;',
        documentation: 'Set the box shadow color of an element to that of the parent element.'
      },
      {
        label:         'shadow-current',
        detail:        '--tw-shadow-color: currentColor;',
        documentation: 'Set the box shadow color of an element to the currentColor.'
      },
      {
        label:         'shadow-transparent',
        color:         new Color('rgb', [0, 0, 0, 0]),
        detail:        '--tw-shadow-color: transparent;',
        documentation: 'Set the box shadow color of an element to transparent.'
      }
    )

    config.colors.forEach(color => {
      boxShadowColor.push(
        {
          label:         `shadow-${color.name}`,
          color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
          detail:        `--tw-shadow-color: #${color.hex};`,
          documentation: `Set the box shadow color of an element to #${color.hex}.`
        }
      )
    })


  /*        OPACITY CLASSES        */

  let opacity = []

  for(let i = 0; i < config.scales.DEFAULT_OPACITY_SCALE.length; i++) {
    opacity.push(
      {
        label:         `opacity-${config.scales.DEFAULT_OPACITY_SCALE[i].name}`,
        detail:        `opacity: ${config.scales.DEFAULT_OPACITY_SCALE[i].value};`,
        documentation: `Set the opacity of an element to ${config.scales.DEFAULT_OPACITY_SCALE[i].value}.`
      }
    )
  }

  /*        MIX BLEND MODE CLASSES        */

  let mixBlendMode = [
    {
      label:         'mix-blend-normal',
      detail:        'mix-blend-mode: normal;',
      documentation: 'Set an element\'s blend mode to normal, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-multiply',
      detail:        'mix-blend-mode: multiply;',
      documentation: 'Set an element\'s blend mode to multiply, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-screen',
      detail:        'mix-blend-mode: screen;',
      documentation: 'Set an element\'s blend mode to screen, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-overlay',
      detail:        'mix-blend-mode: overlay;',
      documentation: 'Set an element\'s blend mode to overlay, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-darken',
      detail:        'mix-blend-mode: darken;',
      documentation: 'Set an element\'s blend mode to darken, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-lighten',
      detail:        'mix-blend-mode: lighten;',
      documentation: 'Set an element\'s blend mode to lighten, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-color-dodge',
      detail:        'mix-blend-mode: color-dodge;',
      documentation: 'Set an element blend mode\'s to color-dodge, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-color-burn',
      detail:        'mix-blend-mode: color-burn;',
      documentation: 'Set an element blend mode\'s to color-burn, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-hard-light',
      detail:        'mix-blend-mode: hard-light;',
      documentation: 'Set an element blend mode\'s to hard-light, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-soft-light',
      detail:        'mix-blend-mode: soft-light;',
      documentation: 'Set an element blend mode\'s to soft-light, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-difference',
      detail:        'mix-blend-mode: difference;',
      documentation: 'Set an element\'s blend mode to difference, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-exclusion',
      detail:        'mix-blend-mode: exclusion;',
      documentation: 'Set an element\'s blend mode to exclusion, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-hue',
      detail:        'mix-blend-mode: hue;',
      documentation: 'Set an element\'s blend mode to hue, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-saturation',
      detail:        'mix-blend-mode: saturation;',
      documentation: 'Set an element\'s blend mode to saturation, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-color',
      detail:        'mix-blend-mode: color;',
      documentation: 'Set an element\'s blend mode to color, changing how its content should be blended with its background.'
    },
    {
      label:         'mix-blend-luminosity',
      detail:        'mix-blend-mode: luminosity;',
      documentation: 'Set an element\'s blend mode to luminosity, changing how its content should be blended with its background.'
    }
  ]

  /*        BACKGROUND BLEND MODE CLASSES        */

  let backgroundBlendMode = [
    {
      label:         'bg-blend-normal',
      detail:        'background-blend-mode: normal;',
      documentation: 'Set an element\'s blend mode to normal, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-multiply',
      detail:        'background-blend-mode: multiply;',
      documentation: 'Set an element\'s blend mode to multiply, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-screen',
      detail:        'background-blend-mode: screen;',
      documentation: 'Set an element\'s blend mode to screen, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-overlay',
      detail:        'background-blend-mode: overlay;',
      documentation: 'Set an element\'s blend mode to overlay, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-darken',
      detail:        'background-blend-mode: darken;',
      documentation: 'Set an element\'s blend mode to darken, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-lighten',
      detail:        'background-blend-mode: lighten;',
      documentation: 'Set an element\'s blend mode to lighten, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-color-dodge',
      detail:        'background-blend-mode: color-dodge;',
      documentation: 'Set an element\'s blend mode to color-dodge, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-color-burn',
      detail:        'background-blend-mode: color-burn;',
      documentation: 'Set an element\'s blend mode to color-burn, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-hard-light',
      detail:        'background-blend-mode: hard-light;',
      documentation: 'Set an element\'s blend mode to hard-light, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-soft-light',
      detail:        'background-blend-mode: soft-light;',
      documentation: 'Set an element\'s blend mode to soft-light, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-difference',
      detail:        'background-blend-mode: difference;',
      documentation: 'Set an element\'s blend mode to difference, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-exclusion',
      detail:        'background-blend-mode: exclusion;',
      documentation: 'Set an element\'s blend mode to exclusion, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-hue',
      detail:        'background-blend-mode: hue;',
      documentation: 'Set an element\'s blend mode to hue, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-saturation',
      detail:        'background-blend-mode: saturation;',
      documentation: 'Set an element\'s blend mode to saturation, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-color',
      detail:        'background-blend-mode: color;',
      documentation: 'Set an element\'s blend mode to color, changing how its background image blends into its background color.'
    },
    {
      label:         'bg-blend-luminosity',
      detail:        'background-blend-mode: luminosity;',
      documentation: 'Set an element\'s blend mode to luminosity, changing how its background image blends into its background color.'
    }
  ]

  return {
    effects: {
      boxShadow:           boxShadow,
      boxShadowColor:      boxShadowColor,
      opacity:             opacity,
      mixBlendMode:        mixBlendMode,
      backgroundBlendMode: backgroundBlendMode
    }
  }
}
