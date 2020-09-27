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
*/
const CONSTANTS = require('../Scripts/constants.js');

container = [
  {
    label:"container",
    detail:"width: 100%;",
    documentation:"Sets the max-width of an element to 100%."
  },
  {
    label:"sm:container",
    detail:"max-width: " + CONSTANTS.SM_BREAKPOINT + "px;",
    documentation:"Sets the max-width of an element to the small breakpoint (" + CONSTANTS.SM_BREAKPOINT + "px)."
  },
  {
    label:"md:container",
    detail:"max-width: " + CONSTANTS.MD_BREAKPOINT + "px;",
    documentation:"Sets the max-width of an element to the medium breakpoint (" + CONSTANTS.MD_BREAKPOINT + "px)."
  },
  {
    label:"lg:container",
    detail:"max-width: " + CONSTANTS.LG_BREAKPOINT + "px;",
    documentation:"Sets the max-width of an element to the large breakpoint (" + CONSTANTS.LG_BREAKPOINT + "px)."
  },
  {
    label:"xl:container",
    detail:"max-width: " + CONSTANTS.XL_BREAKPOINT + "px;",
    documentation:"Sets the max-width of an element to the extra large breakpoint (" + CONSTANTS.XL_BREAKPOINT + "px)."
  }
]

var boxSizing = [
  {
    label:"box-border",
    detail:"box-sizing: border-box;",
    documentation:"Sets element's box-sizing to border-box, telling the browser to include the borders and padding in a specified height or width."
  },
  {
    label:"box-content",
    detail:"box-sizing: content-box;",
    documentation:"Sets element's box-sizing to content-box, telling browser to add borders and padding on top of a specified width or height.",
    
  }
];

var display = [
  {
    label:"block",
    detail:"display: block;",
    documentation:"Creates a block-level element."
  },
  {
    label:"inline-block",
    detail:"display: inline-block;",
    documentation:"Creates a inline block-level element."
  },
  {
    label:"inline",
    detail:"display: inline;",
    documentation:"Creates an inline element."
  },
  {
    label:"flex",
    detail:"display: flex;",
    documentation:"Creates a block-level flex container."
  },
  {
    label:"inline-flex",
    detail:"display: inline-flex;",
    documentation:"Creates an inline flex container."
  },
  {
    label:"table",
    detail:"display: table;",
    documentation:"Creats an element that behaves like a table element."
  },
  {
    label:"table-caption",
    detail:"display: table-caption;",
    documentation:"Creats an element that behaves like a table-caption element."
  },
  {
    label:"table-cell",
    detail:"display: table-cell;",
    documentation:"Creats an element that behaves like a table-cell element."
  },
  {
    label:"table-column",
    detail:"display: table-column;",
    documentation:"Creats an element that behaves like a table-column element."
  },
  {
    label:"table-column-group",
    detail:"display: table-column-group;",
    documentation:"Creats an element that behaves like a table-column-group element."
  },
  {
    label:"table-footer-group",
    detail:"display: table-block;",
    documentation:"Creats an element that behaves like a table-footer-group element."
  },
  {
    label:"table-header-group",
    detail:"display: table-header-group;",
    documentation:"Creats an element that behaves like a table-header-group element."
  },
  {
    label:"table-row-group",
    detail:"display: table-row-group;",
    documentation:"Creats an element that behaves like a table-row-group element."
  },
  {
    label:"table-row",
    detail:"display: table-row;",
    documentation:"Creats an element that behaves like a table-row element."
  },
  {
    label:"flow-root",
    detail:"display: flow-root;",
    documentation:"Creates a inline-block level element."
  },
  {
    label:"grid",
    detail:"display: grid;",
    documentation:"Creates a grid container."
  },
  {
    label:"inline-grid",
    detail:"display: inline-grid;",
    documentation:"Creates an inline grid container."
  },
  {
    label:"contents",
    detail:"display: contents;",
    documentation:"Creates a \"phantom\" container whose children act like direct children of the parent."
  },
  {
    label:"hidden",
    detail:"display: none;",
    documentation:"Sets an element's display property to none and removes it from the paye layout -- Compare to .invisible class to set visbility."
  },
];

var classes = [];

// Combines all sections of classes into classes array prior to
// exporting for autocompletion.
classes = classes.concat(
  container,
  boxSizing,
  display
);

exports.classes = classes;