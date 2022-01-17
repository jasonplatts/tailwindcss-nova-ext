'use strict'

exports.twClasses = function twClasses(config) {
  /*        HOVER, FOCUS, & OTHER STATES CLASSES        */

  let hoverFocusOtherStates = [
    {
      label:              'hover:',
      detail:             ':hover',
      documentation:      'Style an element when the user hovers over it with the mouse cursor using the `hover` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'focus:',
      detail:             ':focus',
      documentation:      'Style an element when it has focus the `focus` modifier',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'focus-within:',
      detail:             ':focus-within',
      documentation:      'Style an element when it or one of its descendants has focus using the `focus-within` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'focus-visible:',
      detail:             ':focus-visible',
      documentation:      'Style an element when it has been focused using the keyboard using the `focus-visible` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'active:',
      detail:             ':active',
      documentation:      'Style an element when it is being pressed using the `active` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'visited:',
      detail:             ':visited',
      documentation:      'Style a link when it has already been visited using the `visited` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'target:',
      detail:             ':target',
      documentation:      'Style an element if its ID matches the current URL fragment using the `target` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'first:',
      detail:             ':first-child',
      documentation:      'Style an element if it’s the first child using the `first` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'last:',
      detail:             ':last-child',
      documentation:      'Style an element if it’s the last child using the `last` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'only:',
      detail:             ':only-child',
      documentation:      'Style an element if it’s the only child using the `only` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'odd:',
      detail:             ':nth-child(odd)',
      documentation:      'Style an element if it’s an oddly numbered child using the `odd` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'even:',
      detail:             ':nth-child(even)',
      documentation:      'Style an element if it’s an oddly numbered child using the `odd` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'first-of-type:',
      detail:             ':first-of-type',
      documentation:      'Style an element if it’s the first child of its type using the `first-of-type` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'last-of-type:',
      detail:             ':last-of-type',
      documentation:      'Style an element if it’s the last child of its type using the `last-of-type` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'only-of-type:',
      detail:             ':only-of-type',
      documentation:      'Style an element if it’s the only child of its type using the `only-of-type` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'empty:',
      detail:             ':empty',
      documentation:      'Style an element if it has no content using the `empty` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'disabled:',
      detail:             ':disabled',
      documentation:      'Style an input when it’s disabled using the `disabled` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'checked:',
      detail:             ':checked',
      documentation:      'Style a checkbox or radio button when it’s checked using the `checked` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'indeterminate:',
      detail:             ':indeterminate',
      documentation:      'Style a checkbox or radio button in an indeterminate state using the `indeterminate` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'default:',
      detail:             ':default',
      documentation:      'Style an option, checkbox or radio button that was the default value when the page initially loaded using the `default` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'required:',
      detail:             ':required',
      documentation:      'Style an input when it’s required using the `required` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'valid:',
      detail:             ':valid',
      documentation:      'Style an input when it’s valid using the `valid` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'invalid:',
      detail:             ':invalid',
      documentation:      'Style an input when it’s invalid using the `invalid` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'in-range:',
      detail:             ':in-range',
      documentation:      'Style an input when it’s value is within a specified range limit using the `in-range` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'out-of-range:',
      detail:             ':out-of-range',
      documentation:      'Style an input when it’s value is outside of a specified range limit using the `out-of-range` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'placeholder-shown:',
      detail:             ':placeholder-shown',
      documentation:      'Style an input when the placeholder is shown using the `placeholder-shown` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'autofill:',
      detail:             ':autofill',
      documentation:      'Style an input when it has been autofilled by the browser using the `autofill` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'read-only:',
      detail:             ':read-only',
      documentation:      'Style an input when it is read-only using the `read-only` modifier.',
      completionItemKind: `style_pseudo_class`
    },
    {
      label:              'before:',
      detail:             '::before',
      documentation:      'Style the ::before pseudo-element using the before modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'after:',
      detail:             '::after',
      documentation:      'Style the ::after pseudo-element using the after modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'first-letter:',
      detail:             '::first-letter',
      documentation:      'Style the first-letter in a block of content using the `first-letter` modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'first-line:',
      detail:             '::first-line',
      documentation:      'Style the first line in a block of content using the `first-line` modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'marker:',
      detail:             '::marker',
      documentation:      'Style the counters or bullets in lists using the `marker` modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'selection:',
      detail:             '::selection',
      documentation:      'Style the active text selection using the `selection` modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'file:',
      detail:             '::file-selector-button',
      documentation:      'Style the button in file inputs using the `file` modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'placeholder:',
      detail:             '::placeholder',
      documentation:      'Style the placeholder text of any input or textarea using the `placeholder` modifier.',
      completionItemKind: `style_pseudo_element`
    },
    {
      label:              'portrait:',
      detail:             '@media (orientation: portrait)',
      documentation:      'Use the `portrait` modifier to conditionally add styles when the viewport is in a vertical orientation.',
      completionItemKind: `style_directive`
    },
    {
      label:              'landscape:',
      detail:             '@media (orientation: landscape)',
      documentation:      'Use the `landscape` modifier to conditionally add styles when the viewport is in a horizontal orientation.',
      completionItemKind: `style_directive`
    },
    {
      label:              'motion-safe:',
      detail:             '@media (prefers-reduced-motion: no-preference)',
      documentation:      'Use the `motion-safe` modifier to conditionally add styles when the user has not requested reduced motion.',
      completionItemKind: `style_directive`
    },
    {
      label:              'motion-reduce:',
      detail:             '@media (prefers-reduced-motion: reduce)',
      documentation:      'Use the `motion-reduce` modifier to conditionally add styles when the user has requested reduced motion.',
      completionItemKind: `style_directive`
    },
    {
      label:              'print:',
      detail:             '@media print',
      documentation:      'Use the `print` modifier to conditionally add styles that only apply when the document is being printed.',
      completionItemKind: `style_directive`
    },
    {
      label:              'rtl:',
      detail:             '[dir=“rtl”]',
      documentation:      'Use the `rtl` modifier to conditionally add styles in right-to-left mode when building multi-directional layouts.',
      completionItemKind: `style_ruleset`
    },
    {
      label:              'ltr:',
      detail:             '[dir=“ltr”]',
      documentation:      'Use the `ltr` modifiers to conditionally add styles in left-to-right mode when building multi-directional layouts.',
      completionItemKind: `style_ruleset`
    },
    {
      label:              'open:',
      detail:             '[open]',
      documentation:      'Use the `open` modifier to conditionally add styles when a `<details>` or `<dialog>` element is in an open state.',
      completionItemKind: `style_ruleset`
    },
  ]

  /*        BREAKPOINT CLASSES        */

    let responsiveDesign = []

    for(let i = 0; i < config.scales.SCREENS.length; i++) {
      responsiveDesign.push(
        {
          label:              `${config.scales.SCREENS[i].name}:`,
          detail:             `@media (min-width: ${config.scales.SCREENS[i].value} { … }`,
          documentation:      `Prefix any utility with ${config.scales.SCREENS[i].name}: for it to take effect at a ${config.scales.SCREENS[i].value} breakpoint.`,
          completionItemKind: `style_directive`
        }
      )
    }

  /*        DARK CLASSES        */

  let darkMode = [
    {
      label:              'dark:',
      detail:             '@media (prefers-color-scheme: dark) { … }',
      documentation:      'Add the \'dark:\' prefix to apply a utility when dark mode is enabled on the user\'s operating system.',
      completionItemKind: `style_directive`
    }
  ]

  /*        FUNCTIONS & DIRECTIVES        */

  let functionsAndDirectives = [
    {
      label:              '@tailwind',
      detail:             '',
      documentation:      `Use the '@tailwind' directive to insert Tailwind's 'base', 'components', 'utilities' and 'variants' styles into your CSS.`,
      completionItemKind: `style_directive`
    },
    {
      label:              '@layer',
      detail:             '',
      documentation:      `Use the '@layer' directive to tell Tailwind which 'bucket' a set of custom styles belong to. Valid layers are 'base', 'components', and 'utilities'.`,
      completionItemKind: `style_directive`
    },
    {
      label:              '@apply',
      detail:             '',
      documentation:      `Use '@apply' to inline any existing utility classes into your own custom CSS.`,
      completionItemKind: `style_directive`
    },
    {
      label:              'theme()',
      insertText:         "theme(${0})",
      insertTextFormat:   'snippet',
      detail:             '',
      documentation:      `Use the 'theme()' function to access your Tailwind config values using dot notation.`,
      completionItemKind: `function`
    },
    {
      label:              'screen()',
      insertText:         "screen(${0})",
      insertTextFormat:   'snippet',
      detail:             '',
      documentation:      `The 'screen' function allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.`,
      completionItemKind: `function`
    }
  ]


  return {
    coreConcepts: {
      hoverFocusOtherStates:  hoverFocusOtherStates,
      responsiveDesign:       responsiveDesign,
      darkMode:               darkMode,
      functionsAndDirectives: functionsAndDirectives
    }
  }
}
