'use strict'

exports.twClasses = function twClasses(config) {
  /*        PADDING CLASSES        */

  let padding = []

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    padding.push(
      {
        label:         `p-${scale.name}`,
        detail:        `padding: ${scale.value};`,
        documentation: `Set the padding on all sides of an element to ${scale.value}.`
      },
      {
        label:         `px-${scale.name}`,
        detail:        `padding-left: ${scale.value}; padding-right: ${scale.value};`,
        documentation: `Set the horizontal padding of an element to ${scale.value}.`
      },
      {
        label:         `py-${scale.name}`,
        detail:        `padding-top: ${scale.value}; padding-bottom: ${scale.value};`,
        documentation: `Set the vertical padding of an element to ${scale.value}.`
      },
      {
        label:         `pt-${scale.name}`,
        detail:        `padding-top: ${scale.value};`,
        documentation: `Set the top padding of an element to ${scale.value}.`
      },
      {
        label:         `pr-${scale.name}`,
        detail:        `padding-right: ${scale.value};`,
        documentation: `Set the right padding of an element to ${scale.value}.`
      },
      {
        label:         `pb-${scale.name}`,
        detail:        `padding-bottom: ${scale.value};`,
        documentation: `Set the bottom padding of an element to ${scale.value}.`
      },
      {
        label:         `pl-${scale.name}`,
        detail:        `padding-left: ${scale.value};`,
        documentation: `Set the left padding of an element to ${scale.value}.`
      }
    )
  })

  /*        MARGIN CLASSES        */

  let margin = []

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    margin.push(
      {
        label:         `m-${scale.name}`,
        detail:        `margin: ${scale.value};`,
        documentation: `Set the margin on all sides of an element to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `mx-${scale.name}`,
        detail:        `margin-left: ${scale.value}; margin-right: ${scale.value};`,
        documentation: `Set the horizontal margin of an element to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `my-${scale.name}`,
        detail:        `margin-top: ${scale.value}; margin-bottom: ${scale.value};`,
        documentation: `Set the vertical margin of an element to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `mt-${scale.name}`,
        detail:        `margin-top: ${scale.value};`,
        documentation: `Set the top margin of an element to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `mr-${scale.name}`,
        detail:        `margin-right: ${scale.value};`,
        documentation: `Set the right margin of an element to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `mb-${scale.name}`,
        detail:        `margin-bottom: ${scale.value};`,
        documentation: `Set the bottom margin of an element to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `ml-${scale.name}`,
        detail:        `margin-left: ${scale.value};`,
        documentation: `Set the left margin of an element to ${scale.value}.`,
        allowNegation: true
      }
    )
  })

  margin.push(
    {
      label:         'm-auto',
      detail:        'margin: auto;',
      documentation: 'Set an element\'s margin automatically. Often used to center an element.'
    },
    {
      label:         'my-auto',
      detail:        'margin-top: auto; margin-bottom: auto;',
      documentation: 'Let the browser determine an element\'s top and bottom margin automatically.'
    },
    {
      label:         'mx-auto',
      detail:        'margin-left: auto; margin-right: auto;',
      documentation: 'Let the browser determine an element\'s left and right margin automatically.'
    },
    {
      label:         'mt-auto',
      detail:        'margin-top: auto;',
      documentation: 'Let the browser determine an element\'s top margin automatically.'
    },
    {
      label:         'mr-auto',
      detail:        'margin-right: auto;',
      documentation: 'Let the browser determine an element\'s right margin automatically.'
    },
    {
      label:         'mb-auto',
      detail:        'margin-bottom: auto;',
      documentation: 'Let the browser determine an element\'s bottom margin automatically.'
    },
    {
      label:         'ml-auto',
      detail:        'margin-left: auto;',
      documentation: 'Let the browser determine an element\'s left margin automatically.'
    }
  )

  /*        SPACE BETWEEN CLASSES        */

  let spaceBetween = []

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    spaceBetween.push(
      {
        label:         `space-x-${scale.name}`,
        detail:        `--tw-space-x-reverse: 0; margin-right: calc(${scale.value} * var(--tw-space-x-reverse)); margin-left: calc(${scale.value} * calc(1 - var(--tw-space-x-reverse)));`,
        documentation: 'Set horizontal space between child elements.',
        allowNegation: true
      },
      {
        label:         `space-y-${scale.name}`,
        detail:        `--tw-space-y-reverse: 0; margin-top: calc(${scale.value} * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(${scale.value} * var(--tw-space-y-reverse));`,
        documentation: 'Set the vertical space between child elements.',
        allowNegation: true
      },
    )
  })

  spaceBetween.push(
    {
      label:         'space-x-reverse',
      detail:        '--tw-space-x-reverse: 1;',
      documentation: 'If elements are in reverse order (eg: flex-row-reverse), set the horizontal space to the correct side of an element.'
    },
    {
      label:         'space-y-reverse',
      detail:        '--tw-space-y-reverse: 1;',
      documentation: 'If elements are in reverse order (eg: flex-col-reverse), set the vertical space to the correct side of an element.'
    }
  )

  return {
    spacing: {
      padding:      padding,
      margin:       margin,
      spaceBetween: spaceBetween
    }
  }
}
