'use strict'

const SCALES = require('./includes/scales.js')

/*        FILTER CLASSES        */

let filter = [
  {
    label:         'filter',
    detail:        'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);',
    documentation: 'Add to an element to enable filter utilities, such as \'blur\' or \'grayscale\'.'
  },
  {
    label:         'filter-none',
    detail:        'filter: none;',
    documentation: 'Disable any filters applied to an element.'
  }
]

/*        BLUR CLASSES        */

let blur = []

SCALES.BLUR_SCALE.forEach(scale => {
  blur.push(
    {
      label:         `blur${scale.name}`,
      detail:        `--tw-blur: blur(${scale.value});`,
      documentation: 'Add a blur filter to an element. *Requires that the \'filter\' class also be applied.'
    }
  )
})

/*        BRIGHTNESS CLASSES        */

let brightness = []

SCALES.BRIGHTNESS_SCALE.forEach(scale => {
  brightness.push(
    {
      label:         `brightness-${scale.name}`,
      detail:        `--tw-brightness: brightness(${scale.value});`,
      documentation: `Set an element\'s brightness to ${scale.value}. *Requires that the 'filter' class also be applied.`
    }
  )
})

/*        CONTRAST CLASSES        */

let contrast = []

SCALES.BRIGHTNESS_SCALE.forEach(scale => {
  contrast.push(
    {
      label:         `contrast-${scale.name}`,
      detail:        `--tw-contrast: contrast(${scale.value});`,
      documentation: `Set an element\'s contrast to ${scale.value}. *Requires that the 'filter' class also be applied.`
    }
  )
})

/*        DROP SHADOW CLASSES        */

let dropShadow = [
  {
    label:         'drop-shadow-sm',
    detail:        '--tw-drop-shadow: drop-shadow(0 1px 1px rgba(0,0,0,0.05));',
    documentation: 'Add a small drop shadow to an element. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'drop-shadow',
    detail:        '--tw-drop-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));',
    documentation: 'Add a regular drop shadow to an element. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'drop-shadow-md',
    detail:        '--tw-drop-shadow: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));',
    documentation: 'Add a medium drop shadow to an element. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'drop-shadow-lg',
    detail:        '--tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));',
    documentation: 'Add a large drop shadow to an element. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'drop-shadow-xl',
    detail:        '--tw-drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));',
    documentation: 'Add an extra large drop shadow to an element. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'drop-shadow-2xl',
    detail:        '--tw-drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));',
    documentation: 'Add an extra extra large drop shadow to an element. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'drop-shadow-none',
    detail:        '--tw-drop-shadow: drop-shadow(0 0 #0000);',
    documentation: 'Remove the drop shadow effect from an element.'
  }
]

/*        GRAYSCALE CLASSES        */

let grayscale = [
  {
    label:         'grayscale-0',
    detail:        '--tw-grayscale: grayscale(0);',
    documentation: 'Remove the grayscale effect, rendering an element in full color. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'grayscale',
    detail:        '--tw-grayscale: grayscale(1);',
    documentation: 'Render an element in complete grayscale. *Requires that the \'filter\' class also be applied.'
  }
]

/*        HUE ROTATE CLASSES        */

let hueRotate = []

SCALES.HUE_NEGATIVE_SCALE.forEach(scale => {
  hueRotate.push(
    {
      label:         `-hue-rotate-${scale.name}`,
      detail:        `--tw-hue-rotate: hue-rotate(${scale.value});`,
      documentation: `Decrease an element's hue ${scale.value}. *Requires that the \'filter\' class also be applied.`
    }
  )
})

hueRotate.push(
  {
    label:         'hue-rotate-0',
    detail:        '--tw-hue-rotate: hue-rotate(0deg);',
    documentation: 'Sets an element\'s hue value to 0deg, removing any hue effect. *Requires that the \'filter\' class also be applied.'
  }
)

SCALES.HUE_POSITIVE_SCALE.forEach(scale => {
  hueRotate.push(
    {
      label:         `hue-rotate-${scale.name}`,
      detail:        `--tw-hue-rotate: hue-rotate(${scale.value});`,
      documentation: `Increase an element's hue ${scale.value}. *Requires that the \'filter\' class also be applied.`
    }
  )
})

/*        INVERT CLASSES        */

let invert = [
  {
    label:         'invert-0',
    detail:        '--tw-invert: invert(0);',
    documentation: 'Remove the invert effect, rendering an element in normal color. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'invert',
    detail:        '--tw-invert: invert(1);',
    documentation: 'Render an element in inverted colors. *Requires that the \'filter\' class also be applied.'
  }
]

/*        SATURATE CLASSES        */

let saturate = []

saturate.push(
  {
    label:         'saturate-0',
    detail:        '--tw-saturate: saturate(0);',
    documentation: 'Set an element\'s saturation to 0, producing a completely unsaturated effect. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'saturate-50',
    detail:        '--tw-saturate: saturate(.5);',
    documentation: 'Decrease an element\'s saturation by a factor of .5, producing a desaturated effect. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'saturate-100',
    detail:        '--tw-saturate: saturate(1);',
    documentation: 'Set an element\'s saturation to normal, removing any saturation effect. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'saturate-150',
    detail:        '--tw-saturate: saturate(1.5);',
    documentation: 'Increase an element\'s saturation by a factor of 1.5, producing a slightly saturated effect. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'saturate-200',
    detail:        '--tw-saturate: saturate(2);',
    documentation: 'Increase an element\'s saturation by a factor of 2, doubling its saturation. *Requires that the \'filter\' class also be applied.'
  }
)

/*        SEPIA CLASSES        */

let sepia = [
  {
    label:         'sepia-0',
    detail:        '--tw-sepia: sepia(0);',
    documentation: 'Remove the sepia effect, rendering an element in full color. *Requires that the \'filter\' class also be applied.'
  },
  {
    label:         'sepia',
    detail:        '--tw-sepia: sepia(1);',
    documentation: 'Render an element in sepia. *Requires that the \'filter\' class also be applied.'
  }
]

/*        BACKDROP FILTER CLASSES        */

let backdropFilter = [
  {
    label:         'backdrop-filter',
    detail:        'backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);',
    documentation: 'Add to an element to enable backdrop filter utilities, such as \'backdrop-blur\' or \'backdrop-grayscale\'. Backdrop filter effects apply to the area behind the targeted element.'
  },
  {
    label:         'backdrop-filter-none',
    detail:        'backdrop-filter: none;',
    documentation: 'Disables any backdrop filters applied to an element.'
  }
]

/*        BACKDROP BLUR CLASSES        */

let backdropBlur = []

SCALES.BLUR_SCALE.forEach(scale => {
  backdropBlur.push(
    {
      label:         `backdrop-blur${scale.name}`,
      detail:        `--tw-backdrop-blur: blur(${scale.value});`,
      documentation: 'Add a backdrop blur filter to an element. *Requires that the \'backdrop-filter\' class also be applied.'
    }
  )
})

/*        BACKDROP BRIGHTNESS CLASSES        */

let backdropBrightness = []

SCALES.BRIGHTNESS_SCALE.forEach(scale => {
  backdropBrightness.push(
    {
      label:         `backdrop-brightness-${scale.name}`,
      detail:        `--tw-backdrop-brightness: brightness(${scale.value});`,
      documentation: `Set an element\'s backdrop brightness to ${scale.value}. *Requires that the 'backdrop-filter' class also be applied.`
    }
  )
})

/*        BACKDROP CONTRAST CLASSES        */

let backdropContrast = []

SCALES.BRIGHTNESS_SCALE.forEach(scale => {
  backdropContrast.push(
    {
      label:         `backdrop-contrast-${scale.name}`,
      detail:        `--tw-backdrop-contrast: contrast(${scale.value});`,
      documentation: `Set an element\'s backdrop contrast to ${scale.value}. *Requires that the 'backdrop-filter' class also be applied.`
    }
  )
})

/*        BACKDROP GRAYSCALE CLASSES        */

let backdropGrayscale = [
  {
    label:         'backdrop-grayscale-0',
    detail:        '--tw-backdrop-grayscale: grayscale(0);',
    documentation: 'Remove the backdrop grayscale effect, rendering an element backdrop in full color. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-grayscale',
    detail:        '--tw-backdrop-grayscale: grayscale(1);',
    documentation: 'Render an element\'s backdrop in complete grayscale. *Requires that the \'backdrop-filter\' class also be applied.'
  }
]

/*        BACKDROP HUE ROTATE CLASSES        */

let backdropHueRotate = []

SCALES.HUE_NEGATIVE_SCALE.forEach(scale => {
  backdropHueRotate.push(
    {
      label:         `-backdrop-hue-rotate-${scale.name}`,
      detail:        `--tw-backdrop-hue-rotate: hue-rotate(${scale.value});`,
      documentation: `Decrease an element's backdrop hue ${scale.value}. *Requires that the \'backdrop-filter\' class also be applied.`
    }
  )
})

backdropHueRotate.push(
  {
    label:         'backdrop-hue-rotate-0',
    detail:        '--tw-backdrop-hue-rotate: hue-rotate(0deg);',
    documentation: 'Sets an element\'s backdrop hue-rotate value to 0deg, removing any hue effect. *Requires that the \'backdrop-filter\' class also be applied.'
  }
)

SCALES.HUE_POSITIVE_SCALE.forEach(scale => {
  backdropHueRotate.push(
    {
      label:         `backdrop-hue-rotate-${scale.name}`,
      detail:        `--tw-backdrop-hue-rotate: hue-rotate(${scale.value});`,
      documentation: `Increase an element's backdrop hue ${scale.value}. *Requires that the \'backdrop-filter\' class also be applied.`
    }
  )
})

/*        BACKDROP INVERT CLASSES        */

let backdropInvert = [
  {
    label:         'backdrop-invert-0',
    detail:        '--tw-backdrop-invert: invert(0);',
    documentation: 'Remove the invert effect, rendering an element\'s backdrop in normal color. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-invert',
    detail:        '--tw-backdrop-invert: invert(1);',
    documentation: 'Render an element\'s backdrop in inverted colors. *Requires that the \'backdrop-filter\' class also be applied.'
  }
]

/*        BACKDROP OPACITY CLASSES        */

let backdropOpacity = []

SCALES.DEFAULT_OPACITY_SCALE.forEach(scale => {
  backdropOpacity.push(
    {
      label:         `backdrop-opacity-${scale.name}`,
      detail:        `--tw-backdrop-opacity: opacity(${scale.value});`,
      documentation: `Set the opacity of an element's backdrop to ${scale.value}. *Requires that the \'backdrop-filter\' class also be applied.`
    }
  )
})

/*        BACKDROP SATURATE CLASSES        */

let backdropSaturate = []

backdropSaturate.push(
  {
    label:         'backdrop-saturate-0',
    detail:        '--tw-backdrop-saturate: saturate(0);',
    documentation: 'Set an element\'s backdrop saturation to 0, producing a completely unsaturated effect. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-saturate-50',
    detail:        '--tw-backdrop-saturate: saturate(.5);',
    documentation: 'Decrease an element\'s backdrop saturation by a factor of .5, producing a desaturated effect. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-saturate-100',
    detail:        '--tw-backdrop-saturate: saturate(1);',
    documentation: 'Set an element\'s satu backdropration to normal, removing any saturation effect. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-saturate-150',
    detail:        '--tw-backdrop-saturate: saturate(1.5);',
    documentation: 'Increase an element\'s backdrop saturation by a factor of 1.5, producing a slightly saturated effect. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-saturate-200',
    detail:        '--tw-backdrop-saturate: saturate(2);',
    documentation: 'Increase an element\'s backdrop saturation by a factor of 2, doubling its saturation. *Requires that the \'backdrop-filter\' class also be applied.'
  }
)

/*        BACKDROP SEPIA CLASSES        */

let backdropSepia = [
  {
    label:         'backdrop-sepia-0',
    detail:        '--tw-backdrop-sepia: sepia(0);',
    documentation: 'Remove the sepia effect, rendering an element\'s backdrop in full color. *Requires that the \'backdrop-filter\' class also be applied.'
  },
  {
    label:         'backdrop-sepia',
    detail:        '--tw-backdrop-sepia: sepia(1);',
    documentation: 'Render an element\'s backdrop in sepia. *Requires that the \'backdrop-filter\' class also be applied.'
  }
]

exports.filters = {
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
