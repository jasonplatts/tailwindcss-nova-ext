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
    this.imports.push(require('../Definitions/spacing.js'));
    this.imports.push(require('../Definitions/sizing.js'));
    this.imports.push(require('../Definitions/typography.js'));
    this.imports.push(require('../Definitions/backgrounds.js'));
    this.imports.push(require('../Definitions/borders.js'));
    this.imports.push(require('../Definitions/tables.js'));
    this.imports.push(require('../Definitions/effects.js'));
    this.imports.push(require('../Definitions/transitions-and-animation.js'));
    this.imports.push(require('../Definitions/transforms.js'));
    this.imports.push(require('../Definitions/interactivity.js'));
    this.imports.push(require('../Definitions/svg.js'));
    this.imports.push(require('../Definitions/accessibility.js'));
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


