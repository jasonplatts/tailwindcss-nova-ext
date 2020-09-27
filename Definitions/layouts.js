/*

Completion Item Properties

detail
An additional label for the item that is displayed alongside it, such as its type name.

documentation
A user-visible documentation string displayed at the bottom of the completions panel when the item is highlighted.

filterText
The text used when filtering the item. If null, label will be used.

insertText
The text used when inserting the item into the editor. If null, label will be used.

range
A Range value that describes the textual range within the editor that should be replaced when the item is chosen. If null, the word preceding the cursor will be replaced.

commitChars
A Charset object that specify the character set that, if typed while the item is highlighted, will accept the completion before inserting the typed character.

tokenize
Whether the text inserted by the completion should be tokenized. If true, then occurrences such as the format $[value] will be replaced by editor tokens containing the name value, where value may be any string that contains any characters other than $, [ and ]. By default this property is false.

respVariants
This is a custom extension property indicating if the item has responsive variants (i.e. Variants for the different breakpoints.).
*/
const EXT_FUNCTIONS = require('../Scripts/ext_functions.js');

var containerClasses = [
  {
    label:"container",
    documentation: "Sets the max-width of an element to 100%."
  },
  {
    label:"sm:container",
    documentation:"Responsive variant: Sets the max-width of an element to the small breakpoint (" + EXT_FUNCTIONS.SM_BREAKPOINT + "px)."
  },
  {
    label:"md:container",
    documentation:"Responsive variant: Sets the max-width of an element to the medium breakpoint (" + EXT_FUNCTIONS.MD_BREAKPOINT + "px)."
  },
  {
    label:"lg:container",
    documentation:"Responsive variant: Sets the max-width of an element to the large breakpoint (" + EXT_FUNCTIONS.LG_BREAKPOINT + "px)."
  },
  {
    label:"xl:container",
    documentation:"Responsive variant: Sets the max-width of an element to the extra large breakpoint (" + EXT_FUNCTIONS.XL_BREAKPOINT + "px)."
  }
]

// Adds responsive variants.
containerClasses = EXT_FUNCTIONS.addResponsiveVariants(containerClasses);

// Defines the detail for each item layoutContainerClasses.
containerClasses = EXT_FUNCTIONS.addDetailPropertyToGroup(containerClasses,
  "Layout Container Class");

var boxSizingClasses = [
  {
    label:"box-border",
    documentation:"Sets element's box-sizing to border-box, telling the browser to include the borders and padding in a specified height or width.",
    respVariants: true
  },
  {
    label:"box-content",
    documentation:"Sets element's box-sizing to content-box, telling browser to add borders and padding on top of a specified width or height.",
    respVariants: true
  }
];

// Adds responsive variants.
boxSizingClasses = EXT_FUNCTIONS.addResponsiveVariants(boxSizingClasses);

// Defines the detail for each item layoutContainerClasses.
boxSizingClasses = EXT_FUNCTIONS.addDetailPropertyToGroup(boxSizingClasses,
  "Layout Box-Sizing Class");

var displayClasses = [
  {
    label:"block",
    documentation:"Creates a block level element.",
    respVariants: true
  }
];

// Combines all sections of classes into classes array prior to exporting to main.js for autocompletion.

var classes = [];
classes = classes.concat(containerClasses, boxSizingClasses);

exports.classes = classes;