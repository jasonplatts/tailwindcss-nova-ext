
exports.activate = function() {

}

exports.deactivate = function() {

}


class CompletionProvider {
  constructor() {
    this.imports = [];
    
    this.imports.push(require('../Definitions/layouts.js'));
  }
  
  provideCompletionItems(editor, context) {
    let items = [];
    
    for (let fileCount = 0; fileCount < this.imports.length; fileCount++) {
      for (let i = 0; i < this.imports[fileCount].classes.length; i++) {
        // console.log(this.imports[fileCount].classes[i].label);
        let importObject = this.imports[fileCount].classes[i];
        
        // Label and Kind passed when CompletionItem object is instantiated.
        let item = new CompletionItem(importObject.label, CompletionItemKind.StyleClass);
        
        console.log(importObject.label);
        // All other attributes are set on item instance.
        item.detail        = importObject.detail;
        // console.log(item.detail);
        item.documentation = importObject.documentation;
        item.filterText = importObject.filterText !== null ? importObject.filterText : importObject.label;
        item.insertText = importObject.insertText !== null ? importObject.insertText : importObject.label;
        // item.range      = importObject.range == null ? ;
        // item.commitChars   = importObject.commitChars;
        // item.tokenize      = importObject.tokenize; 
        
        items.push(item);
      }
    }
    
    return items;
  }
}

nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

