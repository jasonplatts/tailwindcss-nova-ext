
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
        let importObject = this.imports[fileCount].classes[i];
        
        // Label and kind are passed to the CompletionItem object when instantiated.
        let item = new CompletionItem(importObject.label, CompletionItemKind.StyleClass);
        
        // All other attributes are set on item instance.
        if (importObject.hasOwnProperty('detail')) { item.detail = importObject.detail };
        if (importObject.hasOwnProperty('documentation')) { item.documentation = importObject.documentation };
        if (importObject.hasOwnProperty('filterText')) { item.filterText = importObject.filterText };
        if (importObject.hasOwnProperty('insertText')) { item.insertText = importObject.insertText };
        if (importObject.hasOwnProperty('range')) { item.range = importObject.range };
        if (importObject.hasOwnProperty('commitChars')) { item.commitChars = importObject.commitChars };
        if (importObject.hasOwnProperty('tokenize')) { item.tokenize = importObject.tokenize };
        
        items.push(item);
      }
    }
    
    return items;
  }
}

nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

