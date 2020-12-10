console.clear();
const FUNCTIONS = require('../Scripts/functions.js');

exports.activate = function() {

}

exports.deactivate = function() {

}

class CompletionProvider {
  constructor() {
    let version = FUNCTIONS.getVersion();
    
    this.imports = [];
    
    this.imports.push(require(`../Definitions/${version}/layout.js`));
    this.imports.push(require(`../Definitions/${version}/flexbox.js`));
    this.imports.push(require(`../Definitions/${version}/grid.js`));
    this.imports.push(require(`../Definitions/${version}/box-alignment.js`));
    this.imports.push(require(`../Definitions/${version}/spacing.js`));
    this.imports.push(require(`../Definitions/${version}/sizing.js`));
    this.imports.push(require(`../Definitions/${version}/typography.js`));
    this.imports.push(require(`../Definitions/${version}/backgrounds.js`));
    this.imports.push(require(`../Definitions/${version}/borders.js`));
    this.imports.push(require(`../Definitions/${version}/tables.js`));
    this.imports.push(require(`../Definitions/${version}/effects.js`));
    this.imports.push(require(`../Definitions/${version}/transitions-and-animation.js`));
    this.imports.push(require(`../Definitions/${version}/transforms.js`));
    this.imports.push(require(`../Definitions/${version}/interactivity.js`));
    this.imports.push(require(`../Definitions/${version}/svg.js`));
    this.imports.push(require(`../Definitions/${version}/accessibility.js`));
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


