
exports.activate = function() {

}

exports.deactivate = function() {

}

class CompletionProvider {
  constructor() {
    this.imports = [];
    
    this.imports.push(require('../Definitions/layout.js'));
    this.imports.push(require('../Definitions/flexbox.js'));
    this.imports.push(require('../Definitions/grid.js'));
    this.imports.push(require('../Definitions/box-alignment.js'));
    this.imports.push(require('../Definitions/backgrounds.js'));
  }
  
  provideCompletionItems(editor, context) {
    const FUNCTIONS = require('../Scripts/functions.js');
    let currentWordRange = FUNCTIONS.getRangeOfCurrentWord(editor, context);
    
    let items = [];
    
    for (let fileCount = 0; fileCount < this.imports.length; fileCount++) {
      for (let i = 0; i < this.imports[fileCount].classes.length; i++) {
        let definitionObject = this.imports[fileCount].classes[i];
        
        if (definitionObject.hasOwnProperty('color')) {
          var item = new CompletionItem(definitionObject.label, CompletionItemKind.Color);
        } else {
          var item = new CompletionItem(definitionObject.label, CompletionItemKind.StyleClass);
        }
        
        if (definitionObject.hasOwnProperty('color')) { item.color = definitionObject.color; };
        // TODO: Truncate long detail and documentation strings.
        if (definitionObject.hasOwnProperty('detail')) { item.detail = definitionObject.detail; };
        if (definitionObject.hasOwnProperty('documentation')) { item.documentation = definitionObject.documentation; };
        
        // TODO: Account for completions of first class attribute entries and responsive class entries.
        item.range = currentWordRange;
        
        items.push(item);
      }
    }
    
    return items;
  }
}

nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

