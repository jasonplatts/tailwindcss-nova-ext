'use strict'

exports.twClasses = function twClasses(config) {
  /*        FILTER CLASSES        */

  let filter = [
    {
      label:         'filter-none',
      detail:        'filter: none;',
      documentation: 'Disable any filters applied to an element.'
    }
  ]

  /*        BLUR CLASSES        */

  let blur = []

  config.scales.BLUR_SCALE.forEach(scale => {
    blur.push(
      {
        label:         `blur${scale.name}`,
        detail:        `filter: blur(${scale.value});`,
        documentation: 'Add a blur filter to an element.'
      }
    )
  })

  /*        BRIGHTNESS CLASSES        */

  let brightness = []

  config.scales.BRIGHTNESS_SCALE.forEach(scale => {
    brightness.push(
      {
        label:         `brightness-${scale.name}`,
        detail:        `filter: brightness(${scale.value});`,
        documentation: `Set an element's brightness to ${scale.value}.`
      }
    )
  })

  /*        CONTRAST CLASSES        */

  let contrast = []

  config.scales.BRIGHTNESS_SCALE.forEach(scale => {
    contrast.push(
      {
        label:         `contrast-${scale.name}`,
        detail:        `filter: contrast(${scale.value});`,
        documentation: `Set an element's contrast to ${scale.value}.`
      }
    )
  })

  /*        DROP SHADOW CLASSES        */

  let dropShadow = [
    {
      label:         'drop-shadow-sm',
      detail:        'filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));',
      documentation: 'Add a small drop shadow to an element.'
    },
    {
      label:         'drop-shadow',
      detail:        'filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));',
      documentation: 'Add a regular drop shadow to an element.'
    },
    {
      label:         'drop-shadow-md',
      detail:        'filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
      documentation: 'Add a medium drop shadow to an element.'
    },
    {
      label:         'drop-shadow-lg',
      detail:        'filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));',
      documentation: 'Add a large drop shadow to an element.'
    },
    {
      label:         'drop-shadow-xl',
      detail:        'filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));',
      documentation: 'Add an extra large drop shadow to an element.'
    },
    {
      label:         'drop-shadow-2xl',
      detail:        'filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));',
      documentation: 'Add an extra extra large drop shadow to an element.'
    },
    {
      label:         'drop-shadow-none',
      detail:        'filter: drop-shadow(0 0 #0000);',
      documentation: 'Remove the drop shadow effect from an element.'
    }
  ]

  /*        GRAYSCALE CLASSES        */

  let grayscale = [
    {
      label:         'grayscale-0',
      detail:        'filter: grayscale(0);',
      documentation: 'Remove the grayscale effect, rendering an element in full color.'
    },
    {
      label:         'grayscale',
      detail:        'filter: grayscale(1);',
      documentation: 'Render an element in complete grayscale.'
    }
  ]

  /*        HUE ROTATE CLASSES        */

  let hueRotate = []

  config.scales.HUE_SCALE.forEach(scale => {
    hueRotate.push(
      {
        label:         `hue-rotate-${scale.name}`,
        detail:        `filter: hue-rotate(${scale.value});`,
        documentation: `Set an element's hue-rotate filter to ${scale.value}.`,
        allowNegation: true
      }
    )
  })

  /*        INVERT CLASSES        */

  let invert = [
    {
      label:         'invert-0',
      detail:        'filter: invert(0);',
      documentation: 'Remove the invert effect, rendering an element in normal color.'
    },
    {
      label:         'invert',
      detail:        'filter: invert(100%);',
      documentation: 'Render an element in inverted colors.'
    }
  ]

  /*        SATURATE CLASSES        */

  let saturate = []

  config.scales.SATURATE_SCALE.forEach(scale => {

  })
  saturate.push(
    {
      label:         'saturate-0',
      detail:        'filter: saturate(0);',
      documentation: 'Set an element\'s saturation to 0, producing a completely unsaturated effect.'
    },
    {
      label:         'saturate-50',
      detail:        'filter: saturate(.5);',
      documentation: 'Decrease an element\'s saturation by a factor of .5, producing a desaturated effect.'
    },
    {
      label:         'saturate-100',
      detail:        'filter: saturate(1);',
      documentation: 'Set an element\'s saturation to normal, removing any saturation effect.'
    },
    {
      label:         'saturate-150',
      detail:        'filter: saturate(1.5);',
      documentation: 'Increase an element\'s saturation by a factor of 1.5, producing a slightly saturated effect.'
    },
    {
      label:         'saturate-200',
      detail:        'filter: saturate(2);',
      documentation: 'Increase an element\'s saturation by a factor of 2, doubling its saturation.'
    }
  )

  /*        SEPIA CLASSES        */

  let sepia = [
    {
      label:         'sepia-0',
      detail:        'filter: sepia(0);',
      documentation: 'Remove the sepia effect, rendering an element in full color.'
    },
    {
      label:         'sepia',
      detail:        'filter: sepia(100%);',
      documentation: 'Render an element in sepia.'
    }
  ]

  /*        BACKDROP FILTER CLASSES        */

  let backdropFilter = [
    {
      label:         'backdrop-filter-none',
      detail:        'backdrop-filter: none;',
      documentation: 'Disables any backdrop filters applied to an element.'
    }
  ]

  /*        BACKDROP BLUR CLASSES        */

  let backdropBlur = []

  config.scales.BLUR_SCALE.forEach(scale => {
    backdropBlur.push(
      {
        label:         `backdrop-blur${scale.name}`,
        detail:        `backdrop-filter: blur(${scale.value});`,
        documentation: 'Add a backdrop blur filter to an element.'
      }
    )
  })

  /*        BACKDROP BRIGHTNESS CLASSES        */

  let backdropBrightness = []

  config.scales.BRIGHTNESS_SCALE.forEach(scale => {
    backdropBrightness.push(
      {
        label:         `backdrop-brightness-${scale.name}`,
        detail:        `backdrop-filter: brightness(${scale.value});`,
        documentation: `Set an element's backdrop brightness to ${scale.value}.`
      }
    )
  })

  /*        BACKDROP CONTRAST CLASSES        */

  let backdropContrast = []

  config.scales.CONTRAST_SCALE.forEach(scale => {
    backdropContrast.push(
      {
        label:         `backdrop-contrast-${scale.name}`,
        detail:        `backdrop-filter: contrast(${scale.value});`,
        documentation: `Set an element's backdrop contrast to ${scale.value}.`
      }
    )
  })

  /*        BACKDROP GRAYSCALE CLASSES        */

  let backdropGrayscale = [
    {
      label:         'backdrop-grayscale-0',
      detail:        'backdrop-filter: grayscale(0);',
      documentation: 'Remove the backdrop grayscale effect, rendering an element backdrop in full color.'
    },
    {
      label:         'backdrop-grayscale',
      detail:        'backdrop-filter: grayscale(100%);',
      documentation: 'Render an element\'s backdrop in complete grayscale.'
    }
  ]

  /*        BACKDROP HUE ROTATE CLASSES        */

  let backdropHueRotate = []

  config.scales.HUE_SCALE.forEach(scale => {
    backdropHueRotate.push(
      {
        label:         `backdrop-hue-rotate-${scale.name}`,
        detail:        `backdrop-filter: hue-rotate(${scale.value});`,
        documentation: `Increase an element's backdrop hue ${scale.value}.`,
        allowNegation: true
      }
    )
  })

  /*        BACKDROP INVERT CLASSES        */

  let backdropInvert = [
    {
      label:         'backdrop-invert-0',
      detail:        'backdrop-filter: invert(0);',
      documentation: 'Remove the invert effect, rendering an element\'s backdrop in normal color.'
    },
    {
      label:         'backdrop-invert',
      detail:        'backdrop-filter: invert(100%);',
      documentation: 'Render an element\'s backdrop in inverted colors.'
    }
  ]

  /*        BACKDROP OPACITY CLASSES        */

  let backdropOpacity = []

  config.scales.DEFAULT_OPACITY_SCALE.forEach(scale => {
    backdropOpacity.push(
      {
        label:         `backdrop-opacity-${scale.name}`,
        detail:        `backdrop-filter: opacity(${scale.value});`,
        documentation: `Set the opacity of an element's backdrop to ${scale.value}.`
      }
    )
  })

  /*        BACKDROP SATURATE CLASSES        */

  let backdropSaturate = []

  backdropSaturate.push(
    {
      label:         'backdrop-saturate-0',
      detail:        'backdrop-filter: saturate(0);',
      documentation: 'Set an element\'s backdrop saturation to 0, producing a completely unsaturated effect.'
    },
    {
      label:         'backdrop-saturate-50',
      detail:        'backdrop-filter: saturate(.5);',
      documentation: 'Decrease an element\'s backdrop saturation by a factor of .5, producing a desaturated effect.'
    },
    {
      label:         'backdrop-saturate-100',
      detail:        'backdrop-filter: saturate(1);',
      documentation: 'Set an element\'s satu backdropration to normal, removing any saturation effect.'
    },
    {
      label:         'backdrop-saturate-150',
      detail:        'backdrop-filter: saturate(1.5);',
      documentation: 'Increase an element\'s backdrop saturation by a factor of 1.5, producing a slightly saturated effect.'
    },
    {
      label:         'backdrop-saturate-200',
      detail:        'backdrop-filter: saturate(2);',
      documentation: 'Increase an element\'s backdrop saturation by a factor of 2, doubling its saturation.'
    }
  )

  /*        BACKDROP SEPIA CLASSES        */

  let backdropSepia = [
    {
      label:         'backdrop-sepia-0',
      detail:        'backdrop-filter: sepia(0);',
      documentation: 'Remove the sepia effect, rendering an element\'s backdrop in full color.'
    },
    {
      label:         'backdrop-sepia',
      detail:        'backdrop-filter: sepia(1);',
      documentation: 'Render an element\'s backdrop in sepia.'
    }
  ]

  return {
    filters: {
      filter:             filter,
      blur:               blur,
      brightness:         brightness,
      contrast:           contrast,
      dropShadow:         dropShadow,
      grayscale:          grayscale,
      hueRotate:          hueRotate,
      invert:             invert,
      saturate:           saturate,
      sepia:              sepia,
      backdropFilter:     backdropFilter,
      backdropBlur:       backdropBlur,
      backdropBrightness: backdropBrightness,
      backdropContrast:   backdropContrast,
      backdropGrayscale:  backdropGrayscale,
      backdropHueRotate:  backdropHueRotate,
      backdropInvert:     backdropInvert,
      backdropOpacity:    backdropOpacity,
      backdropSaturate:   backdropSaturate,
      backdropSepia:      backdropSepia
    }
  }
}
