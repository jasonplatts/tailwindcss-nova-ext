'use strict'

exports.twClasses = function twClasses(config) {
  /*        HOVER, FOCUS, & OTHER STATES CLASSES        */

  let hoverFocusOtherStates = [
    {
      label:         'hover:',
      detail:        ':hover',
      documentation: 'Style an element when the user hovers over it with the mouse cursor using the `hover` modifier.'
    },
    {
      label:         'focus:',
      detail:        ':focus',
      documentation: 'Style an element when it has focus the `focus` modifier'
    },
    {
      label:         'focus-within:',
      detail:        ':focus-within',
      documentation: 'Style an element when it or one of its descendants has focus using the `focus-within` modifier.'
    },
    {
      label:         'focus-visible:',
      detail:        ':focus-visible',
      documentation: 'Style an element when it has been focused using the keyboard using the `focus-visible` modifier.'
    },
    {
      label:         'active:',
      detail:        ':active',
      documentation: 'Style an element when it is being pressed using the `active` modifier.'
    },
    {
      label:         'visited:',
      detail:        ':visited',
      documentation: 'Style a link when it has already been visited using the `visited` modifier.'
    },
    {
      label:         'target:',
      detail:        ':target',
      documentation: 'Style an element if its ID matches the current URL fragment using the `target` modifier.'
    },
    {
      label:         'first:',
      detail:        ':first-child',
      documentation: 'Style an element if it’s the first child using the `first` modifier.'
    },
    {
      label:         'last:',
      detail:        ':last-child',
      documentation: 'Style an element if it’s the last child using the `last` modifier.'
    },
    {
      label:         'only:',
      detail:        ':only-child',
      documentation: 'Style an element if it’s the only child using the `only` modifier.'
    },
    {
      label:         'odd:',
      detail:        ':nth-child(odd)',
      documentation: 'Style an element if it’s an oddly numbered child using the `odd` modifier.'
    },
    {
      label:         'even:',
      detail:        ':nth-child(even)',
      documentation: 'Style an element if it’s an oddly numbered child using the `odd` modifier.'
    },
    {
      label:         'first-of-type:',
      detail:        ':first-of-type',
      documentation: 'Style an element if it’s the first child of its type using the `first-of-type` modifier.'
    },
    {
      label:         'last-of-type:',
      detail:        ':last-of-type',
      documentation: 'Style an element if it’s the last child of its type using the `last-of-type` modifier.'
    },
    {
      label:         'only-of-type:',
      detail:        ':only-of-type',
      documentation: 'Style an element if it’s the only child of its type using the `only-of-type` modifier.'
    },
    {
      label:         'empty:',
      detail:        ':empty',
      documentation: 'Style an element if it has no content using the `empty` modifier.'
    },
    {
      label:         'disabled:',
      detail:        ':disabled',
      documentation: 'Style an input when it’s disabled using the `disabled` modifier.'
    },
    {
      label:         'checked:',
      detail:        ':checked',
      documentation: 'Style a checkbox or radio button when it’s checked using the `checked` modifier.'
    },
    {
      label:         'indeterminate:',
      detail:        ':indeterminate',
      documentation: 'Style a checkbox or radio button in an indeterminate state using the `indeterminate` modifier.'
    },
    {
      label:         'default:',
      detail:        ':default',
      documentation: 'Style an option, checkbox or radio button that was the default value when the page initially loaded using the `default` modifier.'
    },
    {
      label:         'required:',
      detail:        ':required',
      documentation: 'Style an input when it’s required using the `required` modifier.'
    },
    {
      label:         'valid:',
      detail:        ':valid',
      documentation: 'Style an input when it’s valid using the `valid` modifier.'
    },
    {
      label:         'invalid:',
      detail:        ':invalid',
      documentation: 'Style an input when it’s invalid using the `invalid` modifier.'
    },
    {
      label:         'in-range:',
      detail:        ':in-range',
      documentation: 'Style an input when it’s value is within a specified range limit using the `in-range` modifier.'
    },
    {
      label:         'out-of-range:',
      detail:        ':out-of-range',
      documentation: 'Style an input when it’s value is outside of a specified range limit using the `out-of-range` modifier.'
    },
    {
      label:         'placeholder-shown:',
      detail:        ':placeholder-shown',
      documentation: 'Style an input when the placeholder is shown using the `placeholder-shown` modifier.'
    },
    {
      label:         'autofill:',
      detail:        ':autofill',
      documentation: 'Style an input when it has been autofilled by the browser using the `autofill` modifier.'
    },
    {
      label:         'read-only:',
      detail:        ':read-only',
      documentation: 'Style an input when it is read-only using the `read-only` modifier.'
    },
    {
      label:         'open:',
      detail:        '[open]',
      documentation: 'Use the `open` modifier to conditionally add styles when a `<details>` or `<dialog>` element is in an open state.'
    },
    {
      label:         'before:',
      detail:        '::before',
      documentation: 'Style the ::before pseudo-element using the before modifier.'
    },
    {
      label:         'after:',
      detail:        '::after',
      documentation: 'Style the ::after pseudo-element using the after modifier.'
    },
    {
      label:         'first-letter:',
      detail:        '::first-letter',
      documentation: 'Style the first-letter in a block of content using the `first-letter` modifier.'
    },
    {
      label:         'first-line:',
      detail:        '::first-line',
      documentation: 'Style the first line in a block of content using the `first-line` modifier.'
    },
    {
      label:         'marker:',
      detail:        '::marker',
      documentation: 'Style the counters or bullets in lists using the `marker` modifier.'
    },
    {
      label:         'selection:',
      detail:        '::selection',
      documentation: 'Style the active text selection using the `selection` modifier.'
    },
    {
      label:         'file:',
      detail:        '::file-selector-button',
      documentation: 'Style the button in file inputs using the `file` modifier.'
    },
    {
      label:         'placeholder:',
      detail:        '::placeholder',
      documentation: 'Style the placeholder text of any input or textarea using the `placeholder` modifier.'
    },
    {
      label:         'portrait:',
      detail:        '@media (orientation: portrait)',
      documentation: 'Use the `portrait` modifier to conditionally add styles when the viewport is in a vertical orientation.'
    },
    {
      label:         'landscape:',
      detail:        '@media (orientation: landscape)',
      documentation: 'Use the `landscape` modifier to conditionally add styles when the viewport is in a horizontal orientation.'
    },
    {
      label:         'motion-safe:',
      detail:        '@media (prefers-reduced-motion: no-preference)',
      documentation: 'Use the `motion-safe` modifier to conditionally add styles when the user has not requested reduced motion.'
    },
    {
      label:         'motion-reduce:',
      detail:        '@media (prefers-reduced-motion: reduce)',
      documentation: 'Use the `motion-reduce` modifier to conditionally add styles when the user has requested reduced motion.'
    },
    {
      label:         'print:',
      detail:        '@media print',
      documentation: 'Use the `print` modifier to conditionally add styles that only apply when the document is being printed.'
    },
    {
      label:         'rtl:',
      detail:        '[dir=“rtl”]',
      documentation: 'Use the `rtl` modifier to conditionally add styles in right-to-left mode when building multi-directional layouts.'
    },
    {
      label:         'ltr:',
      detail:        '[dir=“ltr”]',
      documentation: 'Use the `ltr` modifiers to conditionally add styles in left-to-right mode when building multi-directional layouts.'
    },
  ]

  /*        BREAKPOINT CLASSES        */

    let responsiveDesign = []

    for(let i = 0; i < config.scales.SCREENS.length; i++) {
      responsiveDesign.push(
        {
          label:         `${config.scales.SCREENS[i].name}:`,
          detail:        `@media (min-width: ${config.scales.SCREENS[i].value} { … }`,
          documentation: `Prefix any utility with ${config.scales.SCREENS[i].name}: for it to take effect at a ${config.scales.SCREENS[i].value} breakpoint.`
        }
      )
    }

  /*        DARK CLASSES        */

  let darkMode = [
    {
      label:         'dark:',
      detail:        '@media (prefers-color-scheme: dark) { … }',
      documentation: 'Add the \'dark:\' prefix to apply a utility when dark mode is enabled on the user\'s operating system.'
    }
  ]

  return {
    coreConcepts: {
      hoverFocusOtherStates: hoverFocusOtherStates,
      responsiveDesign:      responsiveDesign,
      darkMode:              darkMode
    }
  }
}
