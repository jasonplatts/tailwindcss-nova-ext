'use strict'

exports.twClasses = function twClasses(config) {
  /*        PADDING CLASSES        */

  let padding = []

  for(let i = 0; i < config.scales.DEFAULT_SPACING_SCALE.length; i++) {
    padding.push(
      {
        label:         `p-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the padding on all sides of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      }
    )
  }

  for(let i = 0; i < config.scales.DEFAULT_SPACING_SCALE.length; i++) {
    padding.push(
      {
        label:         `py-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding-top: ${config.scales.DEFAULT_SPACING_SCALE[i].value}; padding-bottom: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the vertical padding of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      },
      {
        label:         `px-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding-left: ${config.scales.DEFAULT_SPACING_SCALE[i].value}; padding-right: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the horizontal padding of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      }
    )
  }

  for(let i = 0; i < config.scales.DEFAULT_SPACING_SCALE.length; i++) {
    padding.push(
      {
        label:         `pt-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding-top: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the top padding of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      },
      {
        label:         `pr-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding-right: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the right padding of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      },
      {
        label:         `pb-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding-bottom: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the bottom padding of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      },
      {
        label:         `pl-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
        detail:        `padding-left: ${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
        documentation: `Set the left padding of an element to ${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
      }
    )
  }

  /*        MARGIN CLASSES        */

  function addMarginClasses(negative = '') {
    let objectsArray = []

    for(let i = 0; i < config.scales.DEFAULT_SPACING_SCALE.length; i++) {
      let negativeSizePrefix = ''

      if (negative == '-') {
        if (config.scales.DEFAULT_SPACING_SCALE[i].value !== '0px') {
          negativeSizePrefix = '-'
        } else {
          negativeSizePrefix = ''
        }
      }

      objectsArray.push(
        {
          label:         `${negative}m-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the margin on all sides of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
        {
          label:         `${negative}my-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin-top: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}; margin-bottom: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the vertical margin of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
        {
          label:         `${negative}mx-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin-left: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}; margin-right: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the horizontal margin of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
        {
          label:         `${negative}mt-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin-top: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the top margin of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
        {
          label:         `${negative}mr-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin-right: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the right margin of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
        {
          label:         `${negative}mb-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin-bottom: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the bottom margin of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
        {
          label:         `${negative}ml-${config.scales.DEFAULT_SPACING_SCALE[i].name}`,
          detail:        `margin-left: ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value};`,
          documentation: `Set the left margin of an element to ${negativeSizePrefix}${config.scales.DEFAULT_SPACING_SCALE[i].value}.`
        },
      )
    }

    return objectsArray
  }

  let margin = addMarginClasses()
  margin     = [...margin, ...addMarginClasses('-')]

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
        documentation: 'Set horizontal space between child elements.'
      }
    )
  })

  spaceBetween.push(
    {
      label:         'space-x-reverse',
      detail:        '--tw-space-x-reverse: 1;',
      documentation: 'If elements are in reverse order (eg: flex-row-reverse), set the horizontal space to the correct side of an element.'
    }
  )

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    spaceBetween.push(
      {
        label:         `-space-x-${scale.name}`,
        detail:        `--tw-space-x-reverse: 0; margin-right: calc(-${scale.value} * var(--tw-space-x-reverse)); margin-left: calc(-${scale.value} * calc(1 - var(--tw-space-x-reverse)));`,
        documentation: 'Set negative horizontal space between child elements.'
      }
    )
  })

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    spaceBetween.push(
      {
        label:         `space-y-${scale.name}`,
        detail:        `--tw-space-y-reverse: 0; margin-top: calc(${scale.value} * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(${scale.value} * var(--tw-space-y-reverse));`,
        documentation: 'Set the vertical space between child elements.'
      },
    )
  })

  spaceBetween.push(
    {
      label:         'space-y-reverse',
      detail:        '--tw-space-y-reverse: 1;',
      documentation: 'If elements are in reverse order (eg: flex-col-reverse), set the vertical space to the correct side of an element.'
    }
  )

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    spaceBetween.push(
      {
        label:         `-space-y-${scale.name}`,
        detail:        `--tw-space-y-reverse: 0; margin-top: calc(-${scale.value} * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(-${scale.value} * var(--tw-space-y-reverse));`,
        documentation: 'Set the vertical space between child elements.'
      },
    )
  })

  return {
    spacing: {
      padding:      padding,
      margin:       margin,
      spaceBetween: spaceBetween
    }
  }
}
