/*        HOVER, FOCUS, & OTHER STATES CLASSES        */

let hoverFocusOtherStates = [
  {
    label:'hover:',
    detail:'hover:',
    documentation:'Add the `hover:` prefix to only apply a utility on hover.'
  },
  {
    label:'focus:',
    detail:'focus:',
    documentation:'Add the `focus:` prefix to only apply a utility on focus.'
  },
  {
    label:'active:',
    detail:'active:',
    documentation:'Add the `active:` prefix to only apply a utility when an element is active.'
  },
  {
    label:'group-hover:',
    detail:'group-hover:',
    documentation:'To style specific child elements, add the `group-hover:` prefix to the utility on the child and the `group` class on the parent.'
  },
  {
    label:'group-focus:',
    detail:'group-focus:',
    documentation:'To style specific child elements, add the `group-focus:` prefix to the utility on the child and the `group` class on the parent.'
  },
  {
    label:'focus-within:',
    detail:'focus-within:',
    documentation:'Add the \'focus-within:` prefix to only apply a utility when a child element has focus.'
  },
  {
    label:'focus-visible:',
    detail:'focus-visible:',
    documentation:'Add the \'focus-visible:\' prefix to only apply a utility when an element has focus, but only if the user is using the keyboard.'
  },
  {
    label:'motion-safe:',
    detail:'motion-safe:',
    documentation:'Add the \'motion-safe:\' prefix to only apply a utility when the \'prefers-reduced-motion\' media feature matches `no-preference`.'
  },
  {
    label:'motion-reduce:',
    detail:'motion-reduce:',
    documentation:'Add the \'motion-reduce:\' prefix to only apply a utility when the \'prefers-reduced-motion\' media feature matches `reduce`.'
  },
  {
    label:'disabled:',
    detail:'disabled:',
    documentation:'Add the \'disabled:\' prefix to only apply a utility when an element is disabled.'
  },
  {
    label:'visited:',
    detail:'visited:',
    documentation:'Add the \'visited:\' prefix to only apply a utility when a link has been visited.'
  },
  {
    label:'checked:',
    detail:'checked:',
    documentation:'Add the \'checked:\' prefix to only apply a radio or checkbox is currently checked.'
  },
  {
    label:'first:',
    detail:'first:',
    documentation:'Add the \'first:\' prefix to only apply a utility when it is the first-child of its parent. Useful for loop generated elements.'
  },
  {
    label:'last:',
    detail:'last:',
    documentation:'Add the \'last:\' prefix to only apply a utility when it is the last-child of its parent. Useful for loop generated elements.'
  },
  {
    label:'odd:',
    detail:'odd:',
    documentation:'Add the \'odd:\' prefix to only apply a utility when it is an odd-child of its parent. Useful for loop generated elements.'
  },
  {
    label:'even:',
    detail:'even:',
    documentation:'Add the \'even:\' prefix to only apply a utility when it is an even-child of its parent. Useful for loop generated elements.'
  }
]

/*        DARK CLASSES        */

let darkMode = [
  {
    label:'dark:',
    detail:'dark:',
    documentation:'Add the \'dark:\' prefix to apply a utility when dark mode is enabled on the user\'s operating system.'
  }
]

exports.coreConcepts = {
  hoverFocusOtherStates: hoverFocusOtherStates,
  darkMode:              darkMode
}
