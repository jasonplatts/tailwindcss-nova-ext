'use strict'

const SCALES = require('./includes/scales.js')

/*        TRANSITION PROPERTY CLASSES        */

let transitionProperty = [
  {
    label:         'transition-none',
    detail:        'transition-property: none;',
    documentation: 'Remove all of an element\'s transition properties.'
  },
  {
    label:         'transition-all',
    detail:        'transition-property: all;',
    documentation: 'Set all of an element\'s properties to transition.'
  },
  {
    label:         'transition',
    detail:        'transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;',
    documentation: 'Set an element\'s background-color, border-color, color, fill, stroke, opacity, box-shadow, and transform properties to transition.'
  },
  {
    label:         'transition-colors',
    detail:        'transition-property: background-color, border-color, color, fill, stroke;',
    documentation: 'Set an element\'s background-color, border-color, color, fill, and stroke properties to transition.'
  },
  {
    label:         'transition-opacity',
    detail:        'transition-property: opacity;',
    documentation: 'Set an element\'s opacity property to transition.'
  },
  {
    label:         'transition-shadow',
    detail:        'transition-property: box-shadow;',
    documentation: 'Set an element\'s box shadow property to transition.'
  },
  {
    label:         'transition-transform',
    detail:        'transition-property: transform;',
    documentation: 'Set an element\'s transform properties to transition.'
  }
]

/*        TRANSITION DURATION CLASSES        */

let transitionDuration = []

SCALES.TRANSITION_DURATION_SCALE.forEach(scale => {
  transitionDuration.push(
    {
      label:         `duration-${scale.name}`,
      detail:        `transition-duration: ${scale.value};`,
      documentation: `Set an element's transition-duration to ${scale.value}. The transition duration is the length of time that the animation takes to complete.`
    }
  )
})

/*        TRANSITION TIMING FUNCTION CLASSES        */

let transitionTimingFunction = [
  {
    label:         'ease-linear',
    detail:        'transition-timing-function: linear;',
    documentation: 'Set an element\'s easing curve to linear, causing transitions to occur at an even speed.'
  },
  {
    label:         'ease-in',
    detail:        'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    documentation: 'Set an element\'s easing curve to ease-in, causing transitions to start slowly and become faster as they complete.'
  },
  {
    label:         'ease-out',
    detail:        'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    documentation: 'Set an element\'s easing curve to ease-out, causing transitions to start fast and become slower as they complete.'
  },
  {
    label:         'ease-in-out',
    detail:        'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
    documentation: 'Set an element\'s easing curve to ease-in-out, causing transitions to start slowly, speed up, then slow down again as they complete.'
  }
]

/*        TRANSITION DELAY CLASSES        */

let transitionDelay = []

SCALES.TRANSITION_DELAY_SCALE.forEach(scale => {
  transitionDelay.push(
    {
      label:         `delay-${scale.name}`,
      detail:        `transition-delay: ${scale.value};`,
      documentation: `Set an element's transition-delay to ${scale.value}. The 'transition delay is the amount of time that elapse before any applied transitions begin.`
    }
  )
})

/*        ANIMATION CLASSES        */

let animation = [
  {
    label:         'animate-none',
    detail:        'animation: none;',
    documentation: 'Remove all of an element\'s CSS animations.'
  },
  {
    label:         'animate-spin',
    detail:        'animation: spin 1s linear infinite; @keyframes spin { from { transform: rotate(0deg); } to {transform: rotate(360deg); } }',
    documentation: 'Add a linear spin animation to an element, such as a loading indicator.'
  },
  {
    label:         'animate-ping',
    detail:        'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }',
    documentation: 'Set an element to scale and fade like a radar ping or ripple of water. Useful for things like notification badges.'
  },
  {
    label:         'animate-pulse',
    detail:        'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }',
    documentation: 'Set an element to gently fade in and out. Useful for things like skeleton loaders.'
  },
  {
    label:         'animate-bounce',
    detail:        'animation: bounce 1s infinite; @keyframes bounce { 0%, 100% { transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animationTimingFunction: cubic-bezier(0, 0, 0.2, 1); } }',
    documentation: 'Set an element to bounce up and down. Useful for things like \'sroll down\' indicators.'
  }
]

exports.transitionsAndAnimation = {
  transitionProperty:       transitionProperty,
  transitionDuration:       transitionDuration,
  transitionTimingFunction: transitionTimingFunction,
  transitionDelay:          transitionDelay,
  animation:                animation
}
