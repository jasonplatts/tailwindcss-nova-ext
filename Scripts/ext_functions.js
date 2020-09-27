const BREAKPOINTS = ["sm", "md", "lg", "xl"];
const SM_BREAKPOINT = 640;
const MD_BREAKPOINT = 768;
const LG_BREAKPOINT = 1024;
const XL_BREAKPOINT = 1280;

var addDetailPropertyToGroup = function(items, detail) {
  items = items.map(function(item) {
    item.detail = detail;
    return item;
  });
  
  return items;
}

var addResponsiveVariants = function(items) {
  let newItems = [];
  
  for(iCount = 0; iCount < items.length; iCount++) {
    if (items[iCount].hasOwnProperty('respVariants') && items[iCount].respVariants == true) {
      for(vCount = 0; vCount < BREAKPOINTS.length; vCount++) {
        let newItem = Object.assign({},items[iCount]);
        
        if (newItem.hasOwnProperty('label')) {
          newItem.label = BREAKPOINTS[vCount] + ":" + newItem.label;
        };
        
        if (newItem.hasOwnProperty('filterText')) {
          newItem.filterText = BREAKPOINTS[vCount] + ":" + newItem.filterText;
        };
        
        if (newItem.hasOwnProperty('insertText')) {
          newItem.insertText = BREAKPOINTS[vCount] + ":" + newItem.insertText;
        };
        
        newItems.push(newItem);
      }
    }
  }

  items = items.concat(newItems);
  
  return items;
}

exports.addDetailPropertyToGroup = addDetailPropertyToGroup;
exports.addResponsiveVariants = addResponsiveVariants;
exports.SM_BREAKPOINT = SM_BREAKPOINT
exports.MD_BREAKPOINT = MD_BREAKPOINT
exports.LG_BREAKPOINT = LG_BREAKPOINT
exports.XL_BREAKPOINT = XL_BREAKPOINT

