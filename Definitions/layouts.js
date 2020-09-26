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

const smBreakPoint = 640;
const mdBreakPoint = 768;
const lgBreakPoint = 1024;
const xlBreakPoint = 1280;
const defaultDetail = "Layout Class";
const defaultToken = false;

function defineItem() {
  
}

var classes = [
  {
    label:"container",
    kind: "Class",
    detail: defaultDetail,
    documentation: "Sets the max-width of an element to 100%.", 
    filterText: null,
    insertText: null,
    range: null,
    commitChars: null,
    tokenize: defaultToken 
  },
  {
    label:"sm:container",
    kind: "Class",
    detail: defaultDetail,
    documentation:"Responsive variant: Sets the max-width of an element to the small breakpoint (" + smBreakPoint + "px).", 
    filterText: null,
    insertText: null,
    range: null,
    commitChars: null,
    tokenize: defaultToken 
  },
  {
    label:"md:container",
    kind:"Class",
    detail:"Layout Class",
    documentation:"Responsive variant: Sets the max-width of an element to the medium breakpoint (" + mdBreakPoint + "px).", 
    filterText: null,
    insertText: null,
    range: null,
    commitChars: null,
    tokenize: defaultToken 
  },
  {
    label:"lg:container",
    kind:"Class",
    detail:"Layout Class",
    documentation:"Responsive variant: Sets the max-width of an element to the medium breakpoint (" + mdBreakPoint + "px).", 
    filterText: null,
    insertText: null,
    range: null,
    commitChars: null,
    tokenize: defaultToken 
  },
];

var directives = [
  
];

var functions = [
  
];

exports.classes = classes;
exports.directives = directives;
exports.functions = functions;