const FUNCTIONS = require('../functions.js');

module.exports.CompletionProvider = class CompletionProvider {
  constructor() {
    let version = FUNCTIONS.getVersion();
    let definitions = FUNCTIONS.getVersionDefinitionFiles();
    
    this.imports = [];
    
    // Autoload definitions for the specific Tailwind version.
    definitions.forEach(definition => {
      this.imports.push(require(`../../Definitions/${version}/${definition}`));
    });
    
    console.clear();
    console.log("Current Tailwind Version", version);
  }
  
  provideCompletionItems(editor, context) {
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
        
        if (definitionObject.hasOwnProperty('color')) {
          item.color = definitionObject.color;
        };
        
        if (definitionObject.hasOwnProperty('detail')) {
          item.detail = FUNCTIONS.truncateString(definitionObject.detail, 32);
        };
        
        if (definitionObject.hasOwnProperty('documentation')) { 
          item.documentation = FUNCTIONS.truncateString(definitionObject.documentation, 128);
        };
        
        item.range = currentWordRange;
        
        items.push(item);
      }
    }
    
    return items;
  }
}