'use strict'

/*        APPEARANCE CLASSES        */

let appearance = [
  {
    label:         'appearance-none',
    detail:        'appearance: none;',
    documentation: 'Resets any browser specific styling on an element. Often used when creating custom form components.'
  },
]

/*        CURSOR CLASSES        */

let cursor = [
  {
    label:         'cursor-auto',
    detail:        'cursor: auto;',
    documentation: 'Allow the browser to change the cursor based on the current context, such as the text cursor when hovering over text.'
  },
  {
    label:         'cursor-default',
    detail:        'cursor: default;',
    documentation: 'Set the cursor to the platform-dependent default cursor, which is usually an arrow.'
  },
  {
    label:         'cursor-pointer',
    detail:        'cursor: pointer;',
    documentation: 'Set the cursor to indicate an interactive element, which is usually a pointing hand.'
  },
  {
    label:         'cursor-wait',
    detail:        'cursor: wait;',
    documentation: 'Set the cursor to indicate something is happening in the background, which is usually an hourglass or watch.'
  },
  {
    label:         'cursor-text',
    detail:        'cursor: text;',
    documentation: 'Set the cursor to indicate the text can be selected, which is usually an I-beam.'
  },
  {
    label:         'cursor-move',
    detail:        'cursor: move;',
    documentation: 'Set the cursor to indicate something can be moved.'
  },
  {
    label:         'cursor-help',
    detail:        'cursor: help;',
    documentation: 'Set the cursor to a question mark.'
  },
  {
    label:         'cursor-not-allowed',
    detail:        'cursor: not-allowed;',
    documentation: 'Set the cursor to indicate something can not be interacted with or clicked.'
  }
]

/*        OUTLINE CLASSES        */

let outline = [
  {
    label:         'outline-none',
    detail:        'outline: 2px solid transparent; outline-offset: 2px;',
    documentation: 'Hide the default browser outline on focused elements. Custom focus styling should be applied for accessibility.'
  },
  {
    label:         'outline-white',
    detail:        'outline: 2px dotted white; outline-offset: 2px;',
    documentation: 'Add a white 2px dotted border around an element. Useful as an accessible general purpose custom focus style.'
  },
  {
    label:         'outline-black',
    detail:        'outline: 2px dotted black; outline-offset: 2px;',
    documentation: 'Add a black 2px dotted border around an element. Useful as an accessible general purpose custom focus style.'
  }
]

/*        POINTER EVENTS CLASSES        */

let pointerEvents = [
  {
    label:         'pointer-events-none',
    detail:        'pointer-events: none;',
    documentation: 'Make an element ignore pointer events. Events still trigger on child elements and pass-through those below target.'
  },
  {
    label:         'pointer-events-auto',
    detail:        'pointer-events: auto;',
    documentation: 'Revert to the default browser behavior for pointer events (like :hover and click).'
  }
]

/*        RESIZE CLASSES        */

let resize = [
  {
    label:         'resize-none',
    detail:        'resize: none;',
    documentation: 'Prevent an element from being resizable.'
  },
  {
    label:         'resize-y',
    detail:        'resize: vertical;',
    documentation: 'Make an element vertically resizeable.'
  },
  {
    label:         'resize-x',
    detail:        'resize: horizontal;',
    documentation: 'Make an element horizontally resizeable.'
  },
  {
    label:         'resize',
    detail:        'resize: both;',
    documentation: 'Make an element horizontally and vertically resizeable.'
  },
]

/*        USER SELECT CLASSES        */

let userSelect = [
  {
    label:         'select-none',
    detail:        'user-select: none;',
    documentation: 'Prevent selecting text in an element and its children.'
  },
  {
    label:         'select-text',
    detail:        'user-select: text;',
    documentation: 'Allow selecting text in an element and its children.'
  },
  {
    label:         'select-all',
    detail:        'user-select: all;',
    documentation: 'Automatically select all the text in an element when a user clicks.'
  },
  {
    label:         'select-auto',
    detail:        'user-select: auto;',
    documentation: 'Use the default browser behavior for selecting text. Useful for undoing other classes at different breakpoints.'
  },
]

exports.interactivity = {
  appearance:    appearance,
  cursor:        cursor,
  outline:       outline,
  pointerEvents: pointerEvents,
  resize:        resize,
  userSelect:    userSelect
}
