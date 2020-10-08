const COLORS = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');
const CONSTANTS = require('../Scripts/constants.js');

/*        FONT FAMILY CLASSES        */

let fontFamily = [
  {
    label:"font-sans",
    detail:"font-family: font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";",
    documentation:"Apply a sans-serif font family."
  },
  {
    label:"font-serif",
    detail:"font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;",
    documentation:"Apply a serif font family."
  },
  {
    label:"font-mono",
    detail:"font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;",
    documentation:"Apply a monospaced font family."
  }
];

/*        FONT SIZE CLASSES        */

let fontSize = [];

for(i = 0; i < CONSTANTS.FONT_SIZES.length; i++) {  
  fontSize.push(
    {
      label:"text-" + CONSTANTS.FONT_SIZES[i].name,
      detail:"font-size: " + CONSTANTS.FONT_SIZES[i].value + "rem;",
      documentation:"Set the text color of an element to #" + CONSTANTS.FONT_SIZES[i].value + "."
    }
  );
}

/*        FONT SMOOTHING CLASSES        */

let fontSmoothing = [
  {
    label:"antialiased",
    detail:"-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
    documentation:"Render text using grayscale antialiasing."
  },
  {
    label:"subpixel-antialiased",
    detail:"-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
    documentation:"Render text using subpixel antialiasing."
  }
];

/*        FONT STYLE CLASSES        */

let fontStyle = [
  {
    label:"italic",
    detail:"font-style: italic;",
    documentation:"Set text to italic."
  },
  {
    label:"not-italic",
    detail:"font-style: normal;",
    documentation:"Set text to display normally. Typically used to reset italic text at different breakpoints."
  }
];

/*        FONT WEIGHT CLASSES        */

let fontWeight = [];

for(i = 0; i < CONSTANTS.FONT_WEIGHTS.length; i++) {  
  fontWeight.push(
    {
      label:"font-" + CONSTANTS.FONT_WEIGHTS[i].name,
      detail:"font-weight: " + CONSTANTS.FONT_WEIGHTS[i].value + ";",
      documentation:"Set font weight to " + CONSTANTS.FONT_WEIGHTS[i].name + "."
    }
  );
}

/*        FONT VARIANT NUMERIC        */

let fontVariantNumeric = [
  {
    label:"normal-nums",
    detail:"font-variant-numeric: normal;",
    documentation:"Reset numeric font variants. Typically used to reset a font feature at a particular breakpoint."
  },
  {
    label:"ordinal",
    detail:"font-variant-numeric: ordinal;",
    documentation:"Enable special glyphs for ordinal markers, such as a superscript \"st\" after a number."
  },
  {
    label:"slashed-zero",
    detail:"font-variant-numeric: slashed-zero;",
    documentation:"Force a 0 with a slash. Useful when a clear distinction is needed between o and 0."
  },
  {
    label:"lining-nums",
    detail:"font-variant-numeric: lining-nums;",
    documentation:"Use numeric glyphs that are aligned by their baseline. Corresponds to the lnum OpenType feature. Default for most fonts."
  },
  {
    label:"oldstyle-nums",
    detail:"font-variant-numeric: oldstyle-nums;",
    documentation:"Use numeric glyphs where some numbers have descenders. Corresponds to the onum OpenType feature."
  },
  {
    label:"proportional-nums",
    detail:"font-variant-numeric: proportional-nums;",
    documentation:"Use numeric glyphs that have proportional widths. Corresponds to the pnum OpenType feature."
  },
  {
    label:"tabular-nums",
    detail:"font-variant-numeric: tabular-nums;",
    documentation:"Use numeric glyphs that have uniform/tabular widths. Corresponds to the tnum OpenType feature."
  },
  {
    label:"diagonal-fractions",
    detail:"font-variant-numeric: diagonal-fractions;",
    documentation:"Replace numbers separated by a slash with common diagonal fractions. Corresponds to the frac OpenType feature."
  },
  {
    label:"stacked-fractions",
    detail:"font-variant-numeric: stacked-fractions;",
    documentation:"Replace numbers separated by a slash with common stacked fractions. Corresponds to the frac OpenType feature, but not frequently supported."
  }
];

/*        TEXT COLOR CLASSES        */

let textColor = [];

textColor.push(
  {
    label:"text-transparent",
    color: new Color("rgb", [0, 0, 0, 0]),
    detail:"color: transparent;",
    documentation:"Set the text color of an element to transparent."
  },
  {
    label:"text-current",
    detail:"color: currentColor;",
    documentation:"Set the text color of an element to the currentColor."
  }
);

for(i = 0; i < COLORS.COLORS.length; i++) {  
  textColor.push(
    {
      label:"text-" + COLORS.COLORS[i].class,
      color: FUNCTIONS.convertHexToRgbColorObject(COLORS.COLORS[i].value),
      detail:"color: #" + COLORS.COLORS[i].value + ";",
      documentation:"Set the text color of an element to #" + COLORS.COLORS[i].value + "."
    }
  );
}

let classes = [];

classes = classes.concat(
  fontFamily,
  fontSize,
  fontSmoothing,
  fontStyle,
  fontWeight,
  fontVariantNumeric,
  textColor
);

exports.classes = classes;