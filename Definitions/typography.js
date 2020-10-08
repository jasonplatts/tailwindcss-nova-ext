const COLORS    = require('../Scripts/colors.js');
const FUNCTIONS = require('../Scripts/functions.js');

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

const FONT_SIZES = [
  { name:"xs",   value:"0.75" },
  { name:"sm",   value:"0.875" },
  { name:"base", value:"1" },
  { name:"lg",   value:"1.125" },
  { name:"xl",   value:"1.25" },
  { name:"2xl",  value:"1.5" },
  { name:"3xl",  value:"1.875" },
  { name:"4xl",  value:"2.25" },
  { name:"5xl",  value:"3" },
  { name:"6xl",  value:"4" }
];

let fontSize = [];

for(i = 0; i < FONT_SIZES.length; i++) {  
  fontSize.push(
    {
      label:"text-" + FONT_SIZES[i].name,
      detail:"font-size: " + FONT_SIZES[i].value + "rem;",
      documentation:"Set the text color of an element to #" + FONT_SIZES[i].value + "."
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

const FONT_WEIGHTS = [
  { name:"hairline",  value:"100" },
  { name:"thin",      value:"200" },
  { name:"light",     value:"300" },
  { name:"normal",    value:"400" },
  { name:"medium",    value:"500" },
  { name:"semibold",  value:"600" },
  { name:"bold",      value:"700" },
  { name:"extrabold", value:"800" },
  { name:"black",     value:"900" }
];

let fontWeight = [];

for(i = 0; i < FONT_WEIGHTS.length; i++) {  
  fontWeight.push(
    {
      label:"font-" + FONT_WEIGHTS[i].name,
      detail:"font-weight: " + FONT_WEIGHTS[i].value + ";",
      documentation:"Set font weight to " + FONT_WEIGHTS[i].name + "."
    }
  );
}

/*        FONT VARIANT NUMERIC CLASSES       */

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

/*        LETTER SPACING CLASSES        */

const FONT_TRACKING_OPTIONS = [
  {name:"tighter", value:"-0.05"},
  {name:"tight",   value:"-0.025"},
  {name:"wide",    value:"0.025"},
  {name:"wider",   value:"0.05"},
  {name:"widest",  value:"0.1"}
];

let letterSpacing = [];

letterSpacing.push(
  {
    label:"tracking-normal",
    detail:"letter-spacing: 0;",
    documentation:"Set the letter spacing of an element to 0."
  }  
); 

for(i = 0; i < FONT_TRACKING_OPTIONS.length; i++) {
  letterSpacing.push(
    {
      label:"tracking-" + FONT_TRACKING_OPTIONS[i].name,
      detail:"letter-spacing: " + FONT_TRACKING_OPTIONS[i].value + "em;",
      documentation:"Set the letter spacing of an element to " + FONT_TRACKING_OPTIONS[i].value + "em."
    }
  );
}

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
  letterSpacing,
  textColor
);

exports.classes = classes;