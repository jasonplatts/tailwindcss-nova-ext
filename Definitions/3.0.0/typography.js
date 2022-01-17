'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        FONT FAMILY CLASSES        */

  let fontFamily = [
    {
      label:         'font-sans',
      detail:        'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      documentation: 'Apply a sans-serif font family.'
    },
    {
      label:         'font-serif',
      detail:        'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;',
      documentation: 'Apply a serif font family.'
    },
    {
      label:         'font-mono',
      detail:        'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
      documentation: 'Apply a monospaced font family.'
    }
  ]

  /*        FONT SIZE CLASSES        */

  let fontSize = []

  for(let i = 0; i < config.scales.FONT_SIZES.length; i++) {
    fontSize.push(
      {
        label:         `text-${config.scales.FONT_SIZES[i].name}`,
        detail:        `font-size: ${config.scales.FONT_SIZES[i].size}; line-height: ${config.scales.FONT_SIZES[i].lineHeight};`,
        documentation: `Set the font size of an element to ${config.scales.FONT_SIZES[i].size} and the line-height to ${config.scales.FONT_SIZES[i].lineHeight}.`
      }
    )
  }

  /*        FONT SMOOTHING CLASSES        */

  let fontSmoothing = [
    {
      label:         'antialiased',
      detail:'         -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;',
      documentation:'R ender text using grayscale antialiasing.'
    },
    {
      label:'subpixel-antialiased',
      detail:'-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;',
      documentation:'Render text using subpixel antialiasing.'
    }
  ]

  /*        FONT STYLE CLASSES        */

  let fontStyle = [
    {
      label:         'italic',
      detail:        'font-style: italic;',
      documentation: 'Set text to italic.'
    },
    {
      label:         'not-italic',
      detail:        'font-style: normal;',
      documentation: 'Set text to display normally. Typically used to reset italic text at different breakpoints.'
    }
  ]

  /*        FONT WEIGHT CLASSES        */

  let fontWeight = []

  for(let i = 0; i < config.scales.FONT_WEIGHTS.length; i++) {
    fontWeight.push(
      {
        label:         `font-${config.scales.FONT_WEIGHTS[i].name}`,
        detail:        `font-weight: ${config.scales.FONT_WEIGHTS[i].value};`,
        documentation: `Set font weight to ${config.scales.FONT_WEIGHTS[i].name}.`
      }
    )
  }

  /*        FONT VARIANT NUMERIC CLASSES       */

  let fontVariantNumeric = [
    {
      label:         'normal-nums',
      detail:        'font-variant-numeric: normal;',
      documentation: 'Reset numeric font variants. Typically used to reset a font feature at a particular breakpoint.'
    },
    {
      label:         'ordinal',
      detail:        'font-variant-numeric: ordinal;',
      documentation: 'Enable special glyphs for ordinal markers, such as a superscript \'st\' after a number.'
    },
    {
      label:         'slashed-zero',
      detail:        'font-variant-numeric: slashed-zero;',
      documentation: 'Force a 0 with a slash. Useful when a clear distinction is needed between o and 0.'
    },
    {
      label:         'lining-nums',
      detail:        'font-variant-numeric: lining-nums;',
      documentation: 'Use numeric glyphs that are aligned by their baseline. Corresponds to the lnum OpenType feature. Default for most fonts.'
    },
    {
      label:         'oldstyle-nums',
      detail:        'font-variant-numeric: oldstyle-nums;',
      documentation: 'Use numeric glyphs where some numbers have descenders. Corresponds to the onum OpenType feature.'
    },
    {
      label:         'proportional-nums',
      detail:        'font-variant-numeric: proportional-nums;',
      documentation: 'Use numeric glyphs that have proportional widths. Corresponds to the pnum OpenType feature.'
    },
    {
      label:         'tabular-nums',
      detail:        'font-variant-numeric: tabular-nums;',
      documentation: 'Use numeric glyphs that have uniform/tabular widths. Corresponds to the tnum OpenType feature.'
    },
    {
      label:         'diagonal-fractions',
      detail:        'font-variant-numeric: diagonal-fractions;',
      documentation: 'Replace numbers separated by a slash with common diagonal fractions. Corresponds to the frac OpenType feature.'
    },
    {
      label:         'stacked-fractions',
      detail:        'font-variant-numeric: stacked-fractions;',
      documentation: 'Replace numbers separated by a slash with common stacked fractions. Corresponds to the frac OpenType feature, but not frequently supported.'
    }
  ]

  /*        LETTER SPACING CLASSES        */

  let letterSpacing = []

  for(let i = 0; i < config.scales.FONT_TRACKING_OPTIONS.length; i++) {
    letterSpacing.push(
      {
        label:         `tracking-${config.scales.FONT_TRACKING_OPTIONS[i].name}`,
        detail:        `letter-spacing: ${config.scales.FONT_TRACKING_OPTIONS[i].value};`,
        documentation: `Set the letter spacing of an element to ${config.scales.FONT_TRACKING_OPTIONS[i].value}.`
      }
    )
  }

  /*        LINE HEIGHT CLASSES        */

  let lineHeights = []

  for(let i = 0; i < config.scales.FONT_RELATIVE_LINE_HEIGHTS.length; i++) {
    lineHeights.push(
      {
        label:         `leading-${config.scales.FONT_RELATIVE_LINE_HEIGHTS[i].name}`,
        detail:        `line-height: ${config.scales.FONT_RELATIVE_LINE_HEIGHTS[i].value}rem;`,
        documentation: `Set a relative element line height of ${config.scales.FONT_RELATIVE_LINE_HEIGHTS[i].value} rem.`
      }
    )
  }

  for(let i = 0; i < config.scales.FONT_FIXED_LINE_HEIGHTS.length; i++) {
    lineHeights.push(
      {
        label:         `leading-${config.scales.FONT_FIXED_LINE_HEIGHTS[i].name}`,
        detail:        `line-height: ${config.scales.FONT_FIXED_LINE_HEIGHTS[i].value};`,
        documentation: `Set a fixed element line height of ${config.scales.FONT_FIXED_LINE_HEIGHTS[i].value}.`
      }
    )
  }

  /*        LIST STYLE CLASSES        */

  let listStyleTypes = [
    {
      label:         'list-none',
      detail:        'list-style-type: none;',
      documentation: 'Remove any list styling.'
    },
    {
      label:         'list-disc',
      detail:        'list-style-type: disc;',
      documentation: 'Create a bulleted list.'
    },
    {
      label:         'list-decimal',
      detail:        'list-style-type: decimal;',
      documentation: 'Create a numbered list.'
    }
  ]

  /*        LIST STYLE POSITION CLASSES        */

  let listStylePositions = [
    {
      label:         'list-inside',
      detail:        'list-style-position: inside;',
      documentation: 'Set the position of the list markers inside the list element.'
    },
    {
      label:         'list-outside',
      detail:        'list-style-position: outside;',
      documentation: 'Set the position of the list markers outside the list element.'
    }
  ]

  /*        TEXT ALIGN CLASSES        */

  let textAlign = [
    {
      label:         'text-left',
      detail:        'text-align: left;',
      documentation: 'Set the text alignment of an element to the left.'
    },
    {
      label:         'text-center',
      detail:        'text-align: center;',
      documentation: 'Set the text alignment of an element to the center.'
    },
    {
      label:         'text-right',
      detail:        'text-align: right;',
      documentation: 'Set the text alignment of an element to the right.'
    },
    {
      label:         'text-justify',
      detail:        'text-align: justify;',
      documentation: 'Set the text alignment of an element to justified.'
    }
  ]

  /*        TEXT COLOR CLASSES        */

  let textColor = []

  textColor.push(
    {
      label:         'text-transparent',
      color:         new Color('rgb', [0, 0, 0, 0]),
      detail:        'color: transparent;',
      documentation: 'Set the text color of an element to transparent.'
    },
    {
      label:         'text-current',
      detail:        'color: currentColor;',
      documentation: 'Set the text color of an element to the currentColor.'
    }
  )

  config.colors.forEach(color => {
    textColor.push(
      {
        label:         `text-${color.name}`,
        color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
        detail:        `--tw-text-opacity: 1; color: rgba(${color.rgb}, var(--tw-text-opacity));`,
        documentation: `Set the text color of an element to #${color.hex}.`
      }
    )
  })

  /*        TEXT DECORATION CLASSES        */

  let textDecoration = [
    {
      label:         'underline',
      detail:        'text-decoration-line: underline;',
      documentation: 'Set the text decoration to underline.'
    },
    {
      label:         'overline',
      detail:        'text-decoration-line: overline;',
      documentation: 'Set the text decoration to overline.'
    },
    {
      label:         'line-through',
      detail:        'text-decoration-line: line-through;',
      documentation: 'Set the text decoration to line-through so that it appears to be striked out.'
    },
    {
      label:         'no-underline',
      detail:        'text-decoration-line: none;',
      documentation: 'Removes the text decoration (underline and/or line-through).'
    }
  ]

  /*        TEXT DECORATION COLOR CLASSES        */

    let textDecorationColor = []

    textDecorationColor.push(
      {
        label:         'decoration-inherit',
        detail:        'text-decoration-color: inherit;',
        documentation: 'Set the text decoration color of an element to its default value.'
      },
      {
        label:         'decoration-current',
        detail:        'text-decoration-color: currentColor;',
        documentation: 'Set the text decoration color of an element to the currentColor.'
      },
      {
        label:         'decoration-transparent',
        color:         new Color('rgb', [0, 0, 0, 0]),
        detail:        'text-decoration-color: transparent;',
        documentation: 'Set the text decoration color of an element to transparent.'
      }
    )

    config.colors.forEach(color => {
      textDecorationColor.push(
        {
          label:         `decoration-${color.name}`,
          color:         FUNCTIONS.convertHexToRgbColorObject(color.hex),
          detail:        `text-decoration-color: #${color.hex};`,
          documentation: `Set the text decoration color of an element to #${color.hex}.`
        }
      )
    })

  /*        TEXT DECORATION STYLE CLASSES        */

  const TEXT_DECORATION_STYLES = ['solid', 'double', 'dotted', 'dashed', 'wavy']

  let textDecorationStyle = []

  TEXT_DECORATION_STYLES.forEach(style => {
    textDecorationStyle.push(
      {
        label:         `decoration-${style}`,
        detail:        `text-decoration-style: ${style};`,
        documentation: `Set an element\'s text decoration style to ${style}.`
      }
    )
  })

  /*        TEXT DECORATION THICKNESS CLASSES        */

  let textDecorationThickness = []

  textDecorationThickness.push(
    {
      label:         'decoration-auto',
      detail:        'text-decoration-thickness: auto;',
      documentation: 'Lets the browser determine an appropriate thickness for the text decoration line.'
    },
    {
      label:         'decoration-from-font',
      detail:        'text-decoration-thickness: from-font;',
      documentation: 'Uses the preferred thickness specified by the font file. If the font does not include this information, the browser will behave as if auto is set.'
    }
  )

  config.scales.TEXT_DECORATION_THICKNESSES.forEach(thickness => {
    textDecorationThickness.push(
      {
        label:         `decoration-${thickness.name}`,
        detail:        `text-decoration-thickness: ${thickness.value};`,
        documentation: `Set an element\'s text decoration thickness to ${thickness.value}.`
      }
    )
  })

 /*        TEXT UNDERLINE OFFSET CLASSES        */

  let textUnderlineOffset = []

  textUnderlineOffset.push(
    {
      label:         'underline-offset-auto',
      detail:        'text-underline-offset: auto;',
      documentation: 'Lets the browser determine the offset of a text underline.'
    }
  )

  config.scales.TEXT_UNDERLINE_OFFSETS.forEach(offset => {
    textUnderlineOffset.push(
      {
        label:         `underline-offset-${offset.name}`,
        detail:        `text-underline-offset: ${offset.value};`,
        documentation: `Set an element\'s text underline offset to ${offset.value}.`
      }
    )
  })

  /*        TEXT TRANSFORM CLASSES        */

  let textTransform = [
    {
      label:         'uppercase',
      detail:        'text-transform: uppercase;',
      documentation: 'Set an element\'s text to uppercase.'
    },
    {
      label:         'lowercase',
      detail:        'text-transform: lowercase;',
      documentation: 'Set an element\'s text to lowercase.'
    },
    {
      label:         'capitalize',
      detail:        'text-transform: capitalize;',
      documentation: 'Set an element\'s text to capitalized.'
    },
    {
      label:         'normal-case',
      detail:        'text-transform: none;',
      documentation: 'Preserve the original casing. Typically used to reset capitalization at different breakpoints.'
    }
  ]

  /*        TEXT OVERFLOW CLASSES        */

  let textOverflow = [
    {
      label:         'truncate',
      detail:        'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
      documentation: 'Set overflowing text within an element to truncate with an ellipsis (…) if needed.'
    },
    {
      label:         'text-ellipsis',
      detail:        'text-overflow: ellipsis;',
      documentation: 'Set overflowing text within an element to truncate with an ellipsis (…) if needed.'
    },
    {
      label:         'text-clip',
      detail:        'text-overflow: clip;',
      documentation: 'Set overflowing text to truncate at the limit of the content area.'
    }
  ]

  /*        TEXT INDENT CLASSES        */

  let textIndent = []

  config.scales.DEFAULT_SPACING_SCALE.forEach(scale => {
    textIndent.push(
      {
        label:         `indent-${scale.name}`,
        detail:        `text-indent: ${scale.value};`,
        documentation: `Set the amount of empty space shown before a block of text to ${scale.value}.`,
        allowNegation: true,
        completionItemKind: `style_pseudo_class`
      }
    )
  })

  /*        VERTICAL ALIGN CLASSES        */

  let verticalAlign = [
    {
      label:         'align-baseline',
      detail:        'vertical-align: baseline;',
      documentation: 'Align the baseline of an element with the baseline of its parent.'
    },
    {
      label:         'align-top',
      detail:        'vertical-align: top;',
      documentation: 'Align the top of an element and its descendants with the top of the entire line.'
    },
    {
      label:         'align-middle',
      detail:        'vertical-align: middle;',
      documentation: 'Align the middle of an element with the baseline plus half the x-height of the parent.'
    },
    {
      label:         'align-bottom',
      detail:        'vertical-align: bottom;',
      documentation: 'Align the bottom of an element and its descendants with the bottom of the entire line.'
    },
    {
      label:         'align-text-top',
      detail:        'vertical-align: text-top;',
      documentation: 'Align the top of an element with the top of the parent element\'s font.'
    },
    {
      label:         'align-text-bottom',
      detail:        'vertical-align: text-bottom;',
      documentation: 'Align the bottom of an element with the bottom of the parent element\'s font.'
    },
    {
      label:         'align-sub',
      detail:        'vertical-align: sub;',
      documentation: 'Align the baseline of the element with the subscript-baseline of its parent.'
    },
    {
      label:         'align-super',
      detail:        'vertical-align: super;',
      documentation: 'Align the baseline of the element with the superscript-baseline of its parent.'
    }
  ]

  /*        WHITESPACE CLASSES        */

  let whitespace = [
    {
      label:         'whitespace-normal',
      detail:        'white-space: normal;',
      documentation: 'Set element text to wrap normally within an element. Newlines and spaces will be collapsed.'
    },
    {
      label:         'whitespace-nowrap',
      detail:        'white-space: nowrap;',
      documentation: 'Prevent text from wrapping within an element. Newlines and spaces will be collapsed.'
    },
    {
      label:         'whitespace-pre',
      detail:        'white-space: pre;',
      documentation: 'Preserve newlines and spaces within an element. Text will not be wrapped.'
    },
    {
      label:         'whitespace-pre-line',
      detail:        'white-space: pre-line;',
      documentation: 'Preserve newlines, but not spaces within an element. Text will be wrapped normally.'
    },
    {
      label:         'whitespace-pre-wrap',
      detail:        'white-space: pre-wrap;',
      documentation: 'Preserve newlines and spaces within an element. Text will be wrapped normally.'
    }
  ]

  /*        WORD BREAK CLASSES        */

  let wordBreak = [
    {
      label:         'break-normal',
      detail:        'overflow-wrap: normal; word-break: normal;',
      documentation: 'Set text within an element to only add line breaks at normal word break points.'
    },
    {
      label:         'break-words',
      detail:        'overflow-wrap: break-word;',
      documentation: 'Set text within an element to add line breaks mid-word if needed.'
    },
    {
      label:         'break-all',
      detail:        'word-break: break-all;',
      documentation: 'Set text within an element to add line break whenever necessary, without trying to preserve whole words.'
    }
  ]

  /*        CONTENT CLASSES        */

  let content = [
    {
      label:         'content-none',
      detail:        'content: none;',
      documentation: 'Set the content of the pseudo-element, if applied, to nothing.'
    }
  ]

  return {
    typography: {
      fontFamily:              fontFamily,
      fontSize:                fontSize,
      fontSmoothing:           fontSmoothing,
      fontStyle:               fontStyle,
      fontWeight:              fontWeight,
      fontVariantNumeric:      fontVariantNumeric,
      letterSpacing:           letterSpacing,
      lineHeights:             lineHeights,
      listStyleTypes:          listStyleTypes,
      listStylePositions:      listStylePositions,
      textAlign:               textAlign,
      textColor:               textColor,
      textDecoration:          textDecoration,
      textDecorationColor:     textDecorationColor,
      textDecorationStyle:     textDecorationStyle,
      textDecorationThickness: textDecorationThickness,
      textUnderlineOffset:     textUnderlineOffset,
      textTransform:           textTransform,
      textOverflow:            textOverflow,
      textIndent:              textIndent,
      verticalAlign:           verticalAlign,
      whitespace:              whitespace,
      wordBreak:               wordBreak,
      content:                 content
    }
  }
}
