'use strict'

const SCALES    = require('./includes/scales.js')

/*        BREAKPOINT CLASSES        */

let responsiveDesign = []

for(let i = 0; i < SCALES.SCREENS.length; i++) {
  responsiveDesign.push(
    {
      label:         `${SCALES.SCREENS[i].name}:`,
      detail:        `@media (min-width: ${SCALES.SCREENS[i].value} { … }`,
      documentation: `Prefix any utility with ${SCALES.SCREENS[i].name}: for it to take effect at a ${SCALES.SCREENS[i].value} breakpoint.`
    }
  )
}

/*        HOVER, FOCUS, & OTHER STATES CLASSES        */

let hoverFocusOtherStates = [
  {
    label:         'hover:',
    detail:        'hover',
    documentation: 'Add the `hover:` prefix to only apply a utility on hover.'
  },
  {
    label:         'focus:',
    detail:        'focus',
    documentation: 'Add the `focus:` prefix to only apply a utility on focus.'
  },
  {
    label:         'active:',
    detail:        'active',
    documentation: 'Add the `active:` prefix to only apply a utility when an element is active.'
  },
  {
    label:         'group-hover:',
    detail:        'group-hover',
    documentation: 'To style specific child elements, add the `group-hover:` prefix to the utility on the child and the `group` class on the parent.'
  },
  {
    label:         'group-focus:',
    detail:        'group-focus',
    documentation: 'To style specific child elements, add the `group-focus:` prefix to the utility on the child and the `group` class on the parent.'
  },
  {
    label:         'focus-within:',
    detail:        'focus-within',
    documentation: 'Add the \'focus-within:` prefix to only apply a utility when a child element has focus.'
  },
  {
    label:         'focus-visible:',
    detail:        'focus-visible',
    documentation: 'Add the \'focus-visible:\' prefix to only apply a utility when an element has focus, but only if the user is using the keyboard.'
  },
  {
    label:         'motion-safe:',
    detail:        '@media (prefers-reduced-motion) { … }',
    documentation: 'Add the \'motion-safe:\' prefix to only apply a utility when the \'prefers-reduced-motion\' media feature matches `no-preference`.'
  },
  {
    label:         'motion-reduce:',
    detail:        '@media (prefers-reduced-motion) { … }',
    documentation: 'Add the \'motion-reduce:\' prefix to only apply a utility when the \'prefers-reduced-motion\' media feature matches `reduce`.'
  },
  {
    label:         'disabled:',
    detail:        'disabled',
    documentation: 'Add the \'disabled:\' prefix to only apply a utility when an element is disabled.'
  },
  {
    label:         'visited:',
    detail:        'visited',
    documentation: 'Add the \'visited:\' prefix to only apply a utility when a link has been visited.'
  },
  {
    label:         'checked:',
    detail:        'checked',
    documentation: 'Add the \'checked:\' prefix to only apply a radio or checkbox is currently checked.'
  },
  {
    label:         'first:',
    detail:        'first-child',
    documentation: 'Add the \'first:\' prefix to only apply a utility when it is the first-child of its parent. Useful for loop generated elements.'
  },
  {
    label:         'last:',
    detail:        'last-child',
    documentation: 'Add the \'last:\' prefix to only apply a utility when it is the last-child of its parent. Useful for loop generated elements.'
  },
  {
    label:         'odd:',
    detail:        'nth-child(odd)',
    documentation: 'Add the \'odd:\' prefix to only apply a utility when it is an odd-child of its parent. Useful for loop generated elements.'
  },
  {
    label:         'even:',
    detail:        'nth-child(even)',
    documentation: 'Add the \'even:\' prefix to only apply a utility when it is an even-child of its parent. Useful for loop generated elements.'
  }
]

/*        DARK CLASSES        */

let darkMode = [
  {
    label:         'dark:',
    detail:        '@media (prefers-color-scheme: dark) { … }',
    documentation: 'Add the \'dark:\' prefix to apply a utility when dark mode is enabled on the user\'s operating system.'
  }
]

exports.coreConcepts = {
  responsiveDesign:      responsiveDesign,
  hoverFocusOtherStates: hoverFocusOtherStates,
  darkMode:              darkMode
}
