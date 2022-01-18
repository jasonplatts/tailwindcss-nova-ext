'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        ACCENT COLOR CLASSES        */

    let accentColor = [
      {
        label:         'accent-inherit',
        detail:        'accent-color: inherit;',
        documentation: 'Set the accent color of an element to that of the parent element. This is helpful for styling elements like checkboxes and radio groups.'
      },
      {
        label:         'accent-current',
        detail:        'accent-color: currentColor;',
        documentation: 'Set the accent color of an element to the currentColor. This is helpful for styling elements like checkboxes and radio groups.'
      },
      {
        label:         'accent-transparent',
        color:         new Color('rgb', [0, 0, 0, 0]),
        detail:        'accent-color: transparent;',
        documentation: 'Set the accent color of an element to transparent. This is helpful for styling elements like checkboxes and radio groups.'
      }
    ]

    config.colors.forEach(color => {
      accentColor.push(
        {
          label:         `accent-${color.name}`,
          color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
          detail:        `accent-color: rgb(${color.rgb});`,
          documentation: `Set the accent color of an element to #${color.hex}. This is helpful for styling elements like checkboxes and radio groups.`
        }
      )
    })

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

  /*        CARET COLOR CLASSES        */

  let caretColor = [
    {
      label:         'caret-inherit',
      detail:        'caret-color: inherit;',
      documentation: 'Set the color of the text input cursor of an element to that of the parent element.'
    },
    {
      label:         'caret-current',
      detail:        'caret-color: currentColor;',
      documentation: 'Set the color of the text input cursor of an element to the currentColor.'
    },
    {
      label:         'caret-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'caret-color: transparent;',
      documentation: 'Set the color of the text input cursor of an element to transparent.'
    }
  ]

  config.colors.forEach(color => {
    caretColor.push(
      {
        label:         `caret-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `caret-color: rgb(${color.rgb});`,
        documentation: `Set the color of the text input cursor of an element to #${color.hex}.`
      }
    )
  })

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

  /*        SCROLL BEHAVIOR CLASSES        */

  let scrollBehavior = [
    {
      label:         'scroll-auto',
      detail:        'scroll-behavior: auto;',
      documentation: 'Enable the browser default scroll behavior within an element.'
    },
    {
      label:         'scroll-smooth',
      detail:        'scroll-behavior: smooth;',
      documentation: 'Enable smooth scrolling within an element.'
    }
  ]

  /*        SCROLL MARGIN CLASSES        */

  let scrollMargin = []

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    scrollMargin.push(
      {
        label:         `scroll-m-${scale.name}`,
        detail:        `scroll-margin: ${scale.value};`,
        documentation: `Set the scroll offset around each side of items within a snap container to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `scroll-mx-${scale.name}`,
        detail:        `scroll-margin-left: ${scale.value}; scroll-margin-right: ${scale.value};`,
        documentation: `Set the scroll offset on the left and right sides of items within a snap container to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `scroll-my-${scale.name}`,
        detail:        `scroll-margin-top: ${scale.value}; scroll-margin-bottom: ${scale.value};`,
        documentation: `Set the scroll offset on the top and bottom sides of items within a snap container to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `scroll-mt-${scale.name}`,
        detail:        `scroll-margin-top: ${scale.value};`,
        documentation: `Set the scroll offset on the top of items within a snap container to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `scroll-mr-${scale.name}`,
        detail:        `scroll-margin-right: ${scale.value};`,
        documentation: `Set the scroll offset on the right of items within a snap container to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `scroll-mb-${scale.name}`,
        detail:        `scroll-margin-bottom: ${scale.value};`,
        documentation: `Set the scroll offset on the bottom of items within a snap container to ${scale.value}.`,
        allowNegation: true
      },
      {
        label:         `scroll-ml-${scale.name}`,
        detail:        `scroll-margin-left: ${scale.value};`,
        documentation: `Set the scroll offset on the left of items within a snap container to ${scale.value}.`,
        allowNegation: true
      }
    )
  })

  /*        SCROLL PADDING CLASSES        */

  let scrollPadding = []

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    scrollPadding.push(
      {
        label:         `scroll-p-${scale.name}`,
        detail:        `scroll-padding: ${scale.value};`,
        documentation: `Set the scroll offset around each side of an element within a snap container to ${scale.value}.`
      },
      {
        label:         `scroll-px-${scale.name}`,
        detail:        `scroll-padding-left: ${scale.value}; scroll-padding-right: ${scale.value};`,
        documentation: `Set the scroll offset on the left and right sides of an element within a snap container to ${scale.value}.`
      },
      {
        label:         `scroll-py-${scale.name}`,
        detail:        `scroll-padding-top: ${scale.value}; scroll-padding-bottom: ${scale.value};`,
        documentation: `Set the scroll offset on the top and bottom sides of an element within a snap container to ${scale.value}.`
      },
      {
        label:         `scroll-pt-${scale.name}`,
        detail:        `scroll-padding-top: ${scale.value};`,
        documentation: `Set the scroll offset on the top of an element within a snap container to ${scale.value}.`
      },
      {
        label:         `scroll-pr-${scale.name}`,
        detail:        `scroll-padding-right: ${scale.value};`,
        documentation: `Set the scroll offset on the right of an element within a snap container to ${scale.value}.`
      },
      {
        label:         `scroll-pb-${scale.name}`,
        detail:        `scroll-padding-bottom: ${scale.value};`,
        documentation: `Set the scroll offset on the bottom of an element within a snap container to ${scale.value}.`
      },
      {
        label:         `scroll-pl-${scale.name}`,
        detail:        `scroll-padding-left: ${scale.value};`,
        documentation: `Set the scroll offset on the left of an element within a snap container to ${scale.value}.`
      }
    )
  })

  /*        SCROLL SNAP ALIGN CLASSES        */

  let scrollSnapAlign = [
    {
      label:         'snap-start',
      detail:        'scroll-snap-align: start;',
      documentation: 'Set an element to snap to its start when being scrolled inside a snap container.'
    },
    {
      label:         'snap-end',
      detail:        'scroll-snap-align: end;',
      documentation: 'Set an element to snap to its end when being scrolled inside a snap container.'
    },
    {
      label:         'snap-center',
      detail:        'scroll-snap-align: center;',
      documentation: 'Set an element to snap to its center when being scrolled inside a snap container.'
    },
    {
      label:         'snap-align-none',
      detail:        'scroll-snap-align: none;',
      documentation: 'Remove scroll snap alignment of an element.'
    }
  ]

  /*        SCROLL SNAP STOP CLASSES        */

  let scrollSnapStop = [
    {
      label:         'snap-normal',
      detail:        'scroll-snap-stop: normal;',
      documentation: `Use the 'snap-normal' utility to allow a snap container to skip past possible scroll snap positions.`
    },
    {
      label:         'snap-always',
      detail:        'scroll-snap-stop: always;',
      documentation: `Use the 'snap-always' utility together with the 'snap-mandatory' utility to force a snap container to always stop on an element before scrolling to the next item.`
    }
  ]

  /*        SCROLL SNAP TYPE CLASSES        */

  let scrollSnapType = [
    {
      label:         'snap-none',
      detail:        'scroll-snap-type: none;',
      documentation: `Use the 'snap-normal' utility to allow a snap container to skip past possible scroll snap positions.`
    },
    {
      label:         'snap-x',
      detail:        'scroll-snap-type: x var(--tw-scroll-snap-strictness);',
      documentation: `Enable horizontal scroll snapping within an element. For scroll snapping to work, it is also necessary to set the scroll snap alignment on the children within the element.`
    },
    {
      label:         'snap-y',
      detail:        'scroll-snap-type: y var(--tw-scroll-snap-strictness);',
      documentation: `Enable vertical scroll snapping within an element. For scroll snapping to work, it is also necessary to set the scroll snap alignment on the children within the element.`
    },
    {
      label:         'snap-both',
      detail:        'scroll-snap-type: both var(--tw-scroll-snap-strictness);',
      documentation: `Enable horizontal and vertical scroll snapping within an element. For scroll snapping to work, it is also necessary to set the scroll snap alignment on the children within the element.`
    },
    {
      label:         'snap-mandatory',
      detail:        '--tw-scroll-snap-strictness: mandatory;',
      documentation: `Force a snap container to always come to rest on a snap point.`
    },
    {
      label:         'snap-proximity',
      detail:        '--tw-scroll-snap-strictness: proximity;',
      documentation: `Make a snap container come to rest on snap points that are close in proximity. This is the browser default.`
    }
  ]

  /*        TOUCH ACTION CLASSES        */

  let touchAction = [
    {
      label:         'touch-auto',
      detail:        'touch-action: auto;',
      documentation: `Set an element's touchscreen behavior to auto, which is the browser default.`
    },
    {
      label:         'touch-none',
      detail:        'touch-action: none;',
      documentation: `Remove an element's touchscreen behavior, such as panning and zooming.`
    },
    {
      label:         'touch-pan-x',
      detail:        'touch-action: pan-x;',
      documentation: `Allow an element to be panned on the x axis on a touchscreen.`
    },
    {
      label:         'touch-pan-left',
      detail:        'touch-action: pan-left;',
      documentation: `Allow an element to be panned to the left on a touchscreen.`
    },
    {
      label:         'touch-pan-right',
      detail:        'touch-action: pan-right;',
      documentation: `Allow an element to be panned to the right on a touchscreen.`
    },
    {
      label:         'touch-pan-y',
      detail:        'touch-action: pan-y;',
      documentation: `Allow an element to be panned on the y axis on a touchscreen.`
    },
    {
      label:         'touch-pan-up',
      detail:        'touch-action: pan-up;',
      documentation: `Allow an element to be panned up on a touchscreen.`
    },
    {
      label:         'touch-pan-down',
      detail:        'touch-action: pan-down;',
      documentation: `Allow an element to be panned down on a touchscreen.`
    },
    {
      label:         'touch-pinch-zoom',
      detail:        'touch-action: pinch-zoom;',
      documentation: `Allow an element to be pinched (zoomed) on a touchscreen.`
    },
    {
      label:         'touch-manipulation',
      detail:        'touch-action: manipulation;',
      documentation: `Enable panning and pinch-zoom behavior, but disable non-standard behavior, such as double-tap to zoom.`
    }
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
    }
  ]

  /*        WILL CHANGE CLASSES        */

  let willChange = [
    {
      label:         'will-change-auto',
      detail:        'will-change: auto;',
      documentation: 'Remove any will-change property from an element.'
    },
    {
      label:         'will-change-scroll',
      detail:        'will-change: scroll-position;',
      documentation: 'Optimize an element to scroll in the near future, by instructing the browsers to prepare for the animation before it begins. Use only when dealing with a known performance issue.'
    },
    {
      label:         'will-change-contents',
      detail:        'will-change: contents;',
      documentation: 'Optimize an element to change content in the near future, by instructing the browsers to prepare for the animation or change before it begins. Use only when dealing with a known performance issue.'
    },
    {
      label:         'will-change-transform',
      detail:        'will-change: transform;',
      documentation: 'Optimize an element to transform in the near future, by instructing the browsers to prepare for the animation before it begins. Use only when dealing with a known performance issue.'
    }
  ]

  return {
    interactivity: {
      accentColor:     accentColor,
      appearance:      appearance,
      cursor:          cursor,
      caretColor:      caretColor,
      pointerEvents:   pointerEvents,
      resize:          resize,
      scrollBehavior:  scrollBehavior,
      scrollMargin:    scrollMargin,
      scrollPadding:   scrollPadding,
      scrollSnapAlign: scrollSnapAlign,
      scrollSnapStop:  scrollSnapStop,
      scrollSnapType:  scrollSnapType,
      touchAction:     touchAction,
      userSelect:      userSelect,
      willChange:      willChange
    }
  }
}
