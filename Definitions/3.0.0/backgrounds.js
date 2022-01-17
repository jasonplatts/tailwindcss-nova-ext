'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        BACKGROUND ATTACHMENT CLASSES        */

  let backgroundAttachment = [
    {
      label:         'bg-fixed',
      detail:        'background-attachment: fixed;',
      documentation: 'Fix the background image relative to the viewport.'
    },
    {
      label:         'bg-local',
      detail:        'background-attachment: local;',
      documentation: 'Scroll the background image with the container and the viewport.'
    },
    {
      label:         'bg-scroll',
      detail:        'background-attachment: scroll;',
      documentation: 'Scroll the background image with the viewport, but not with the container.'
    }
  ]

  /*        BACKGROUND CLIP CLASSES        */

  let backgroundClip = [
    {
      label:         'bg-clip-border',
      detail:        'background-clip: border-box;',
      documentation: 'Clip an element\'s background up to and including the border.'
    },
    {
      label:         'bg-clip-padding',
      detail:        'background-clip: padding-box;',
      documentation: 'Clip an element\'s background up to the inside edge of the border.'
    },
    {
      label:         'bg-clip-content',
      detail:        'background-clip: content-box;',
      documentation: 'Clip an element\'s background up to the edge of the content box.'
    },
    {
      label:         'bg-clip-text',
      detail:        'background-clip: text;',
      documentation: 'Crop an element\'s background to match the shape of the text.'
    }
  ]

  /*        BACKGROUND COLOR CLASSES        */

  let backgroundColor = [
    {
      label:         'bg-inherit',
      detail:        'background-color: inherit;',
      documentation: 'Set the background color of an element to that of the parent element.'
    },
    {
      label:         'bg-current',
      detail:        'background-color: currentColor;',
      documentation: 'Set the background color of an element to the currentColor.'
    },
    {
      label:         'bg-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'background-color: transparent;',
      documentation: 'Set the background color of an element to transparent.'
    }
  ]

  config.colors.forEach(color => {
    backgroundColor.push(
      {
        label:         `bg-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `background-color: rgb(${color.rgb});`,
        documentation: `Set the background color of an element to #${color.hex}.`
      }
    )
  })

  /*        BACKGROUND ORIGIN CLASSES        */

  let backgroundOrigin = [
    {
      label:         'bg-origin-border',
      detail:        'background-origin: border-box;',
      documentation: 'Position an element\'s background relative to its border box.'
    },
    {
      label:         'bg-origin-padding',
      detail:        'background-origin: padding-box;',
      documentation: 'Position an element\'s background relative to its padding box.'
    },
    {
      label:         'bg-origin-content',
      detail:        'background-origin: content-box;',
      documentation: 'Position an element\'s background relative to its content box.'
    }
  ]

  /*        BACKGROUND POSITION CLASSES        */

  let backgroundPosition = [
    {
      label:         'bg-bottom',
      detail:        'background-position: bottom;',
      documentation: 'Set the position of an element\'s background image to bottom.'
    },
    {
      label:         'bg-center',
      detail:        'background-position: center;',
      documentation: 'Set the position of an element\'s background image to center.'
    },
    {
      label:         'bg-left',
      detail:        'background-position: left;',
      documentation: 'Set the position of an element\'s background image to left.'
    },
    {
      label:         'bg-left-bottom',
      detail:        'background-position: left-bottom;',
      documentation: 'Set the position of an element\'s background image to left bottom.'
    },
    {
      label:         'bg-left-top',
      detail:        'background-position: left-top;',
      documentation: 'Set the position of an element\'s background image to left top.'
    },
    {
      label:         'bg-right',
      detail:        'background-position: right;',
      documentation: 'Set the position of an element\'s background image to right.'
    },
    {
      label:         'bg-right-bottom',
      detail:        'background-position: right-bottom;',
      documentation: 'Set the position of an element\'s background image to right bottom.'
    },
    {
      label:         'bg-right-top',
      detail:        'background-position: right-top;',
      documentation: 'Set the position of an element\'s background image to right top.'
    },
    {
      label:         'bg-top',
      detail:        'background-position: top;',
      documentation: 'Set the position of an element\'s background image to top.'
    }
  ]

  /*        BACKGROUND REPEAT CLASSES        */

  let backgroundRepeat = [
    {
      label:         'bg-repeat',
      detail:        'background-repeat: repeat;',
      documentation: 'Repeat the background image both vertically and horizontally.'
    },
    {
      label:         'bg-no-repeat',
      detail:        'background-repeat: no-repeat;',
      documentation: 'Set the background image to not repeat.'
    },
    {
      label:         'bg-repeat-x',
      detail:        'background-repeat: repeat-x;',
      documentation: 'Repeat the background image only horizontally.'
    },
    {
      label:         'bg-repeat-y',
      detail:        'background-repeat: repeat-y;',
      documentation: 'Repeat the background image only vertically.'
    },
    {
      label:         'bg-repeat-round',
      detail:        'background-repeat: repeat-round;',
      documentation: 'Repeat the background image stretching each of the images as needed to prevent any whitespace inbetween.'
    },
    {
      label:         'bg-repeat-space',
      detail:        'background-repeat: repeat-space;',
      documentation: 'Repeat the background image without clipping. Any whitespace is distributed inbetween the images.'
    }
  ]

  /*        BACKGROUND SIZE CLASSES        */

  let backgroundSize = [
    {
      label:         'bg-auto',
      detail:        'background-size: auto;',
      documentation: 'Display the background image at its default size.'
    },
    {
      label:         'bg-cover',
      detail:        'background-size: cover;',
      documentation: 'Scale the background image until it fills the background layer.'
    },
    {
      label:         'bg-contain',
      detail:        'background-size: contain;',
      documentation: 'Scale the background image to the outer edges without cropping or stretching.'
    }
  ]

  /*        BACKGROUND IMAGE CLASSES        */

  let backgroundImage = [
    {
      label:         'bg-none',
      detail:        'background-image: none;',
      documentation: 'Remove an element\'s background image.'
    },
    {
      label:         'bg-gradient-to-t',
      detail:        'background-image: linear-gradient(to top, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a bottom to top direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-tr',
      detail:        'background-image: linear-gradient(to top right, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a bottom left to top right direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-r',
      detail:        'background-image: linear-gradient(to right, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a left to right direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-br',
      detail:        'background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a top left to bottom right direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-b',
      detail:        'background-image: linear-gradient(to bottom, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a top to bottom direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-bl',
      detail:        'background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a top right to bottom left direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-l',
      detail:        'background-image: linear-gradient(to left, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a right to left direction. Use with gradient color stop classes.'
    },
    {
      label:         'bg-gradient-to-tl',
      detail:        'linear-gradient(to top left, var(--tw-gradient-stops));',
      documentation: 'Set a linear gradient background with a bottom right to top left direction. Use with gradient color stop classes.'
    }
  ]

  /*        BACKGROUND COLOR STOP CLASSES        */

  let gradientColorStops = []

  gradientColorStops.push(
    {
      label:         'from-inherit',
      detail:        '--tw-gradient-from: inherit; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));',
      documentation: 'Set the first gradient stop of an element to that of the parent element. Use with via-{color} and to-{color} classes.'
    },
    {
      label:         'from-current',
      detail:        '--tw-gradient-from: currentColor; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));',
      documentation: 'Set the first gradient stop of an element to the currentColor. Use with via-{color} and to-{color} classes.'
    },
    {
      label:         'from-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        '--tw-gradient-from: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));',
      documentation: 'Set the first gradient stop of an element to transparent. Use with via-{color} and to-{color} classes.'
    }
  )

  config.colors.forEach(color => {
    gradientColorStops.push(
      {
        label:         `from-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `--tw-gradient-from: #${color.hex}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(${color.rgb}, 0));`,
        documentation: `Set the first gradient stop of an element to #${color.hex}. Use with via-{color} and to-{color} classes.`
      }
    )
  })

  gradientColorStops.push(
    {
      label:         'via-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        '--tw-gradient-stops: var(--tw-gradient-from), transparent, var(--tw-gradient-to, rgba(0, 0, 0, 0));',
      documentation: 'Set the middle gradient stop of an element to transparent. Use with from-{color} and to-{color} classes.'
    },
    {
      label:         'via-current',
      detail:        '--tw-gradient-stops: var(--tw-gradient-from), currentColor, var(--tw-gradient-to, rgba(255, 255, 255, 0));',
      documentation: 'Set the middle gradient stop of an element to the currentColor. Use with from-{color} and to-{color} classes.'
    }
  )

  config.colors.forEach(color => {
    gradientColorStops.push(
      {
        label:         `via-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `--tw-gradient-stops: var(--tw-gradient-from), #${color.hex}, var(--tw-gradient-to, rgba(${color.rgb}, 0));`,
        documentation: `Set the middle gradient stop of an element to #${color.hex}. Use with from-{color} and to-{color} classes.`
      }
    )
  })

  gradientColorStops.push(
    {
      label:         'to-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        '-tw-gradient-to: transparent;',
      documentation: 'Set the last gradient stop of an element to transparent. Use with from-{color} and via-{color} classes.'
    },
    {
      label:         'to-current',
      detail:        '--tw-gradient-to: currentColor;',
      documentation: 'Set the last gradient stop of an element to the currentColor. Use with from-{color} and via-{color} classes.'
    }
  )

  config.colors.forEach(color => {
    gradientColorStops.push(
      {
        label:         `to-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `--tw-gradient-to: #${color.hex};`,
        documentation: `Set the last gradient stop of an element to #${color.hex}. Use with from-{color} and via-{color} classes.`
      }
    )
  })

  return {
    backgrounds: {
      backgroundAttachment: backgroundAttachment,
      backgroundClip:       backgroundClip,
      backgroundColor:      backgroundColor,
      backgroundOrigin:     backgroundOrigin,
      backgroundPosition:   backgroundPosition,
      backgroundRepeat:     backgroundRepeat,
      backgroundSize:       backgroundSize,
      backgroundImage:      backgroundImage,
      gradientColorStops:   gradientColorStops
    }
  }
}
