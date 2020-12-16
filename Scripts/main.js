console.clear();
const FUNCTIONS = require('../Scripts/functions.js');

// TODO: Add config support. Eg: Add prefers-reduced-motion motion-safe and motion-reduce variants when enabled in tailwind config.
// FIXME: Detect config change and load relevant version definitions

exports.activate = function() {

}

exports.deactivate = function() {

}

class CompletionProvider {
  constructor() {
    let version = FUNCTIONS.getVersion();
    let definitions = FUNCTIONS.getVersionDefinitionFiles();
    
    this.imports = [];
    
    // Autoload definitions for the specific Tailwind version.
    definitions.forEach(definition => {
      this.imports.push(require(`../Definitions/${version}/${definition}`));
    });
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

let fileTypes = [ "html", "html+erb", "haml", "php", "blade", "twig",
"vue", "js", "jsx", "ts", "tsx", "svelte", "liquid"];

fileTypes.forEach(type => {
  nova.assistants.registerCompletionAssistant(type, new CompletionProvider());
});


