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

const SM_BREAKPOINT = 640;
const MD_BREAKPOINT = 768;
const LG_BREAKPOINT = 1024;
const XL_BREAKPOINT = 1280;

var classes = [
  {
    label:"container",
    documentation: "Sets the max-width of an element to 100%."
  },
  {
    label:"sm:container",
    documentation:"Responsive variant: Sets the max-width of an element to the small breakpoint (" + SM_BREAKPOINT + "px)."
  },
  {
    label:"md:container",
    documentation:"Responsive variant: Sets the max-width of an element to the medium breakpoint (" + MD_BREAKPOINT + "px)."
  },
  {
    label:"lg:container",
    documentation:"Responsive variant: Sets the max-width of an element to the large breakpoint (" + LG_BREAKPOINT + "px)."
  },
  {
    label:"xl:container",
    documentation:"Responsive variant: Sets the max-width of an element to the extra large breakpoint (" + XL_BREAKPOINT + "px)."
  },
  {
    label:"box-border",
    documentation:"Sets element's box-sizing to border-box, telling the browser to include the borders and padding in a specified height or width.",
    respVariants: true
  },
  {
    label:"box-content",
    documentation:"Sets element's box-sizing to content-box, telling browser to add borders and padding on top of a specified width or height."
  },
];

classes = classes.map(function(item) {
  item.detail = "Layout Classes";
  return item;
});

function addResponsiveVariants(items) {
  const breakpoints = ["sm", "md", "lg", "xl"];
  let newItems = [];
  
  for(iCount = 0; iCount < items.length; iCount++) {
    if (items[iCount].hasOwnProperty('respVariants') && items[iCount].respVariants == true) {
      for(vCount = 0; vCount < breakpoints.length; vCount++) {
        let newItem = Object.assign({},items[iCount]);
        
        if (newItem.hasOwnProperty('label')) {
          newItem.label = breakpoints[vCount] + ":" + newItem.label;
        };
        
        if (newItem.hasOwnProperty('filterText')) {
          newItem.filterText = breakpoints[vCount] + ":" + newItem.filterText;
        };
        
        if (newItem.hasOwnProperty('insertText')) {
          newItem.insertText = breakpoints[vCount] + ":" + newItem.insertText;
        };
        
        newItems.push(newItem);
      }
    }
  }

  items = items.concat(newItems);
  
  return items;
}

classes = addResponsiveVariants(classes);

var directives = [
  
];

var functions = [
  
];

exports.classes = classes;
exports.directives = directives;
exports.functions = functions;