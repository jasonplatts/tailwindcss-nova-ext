
exports.activate = function() {

}

exports.deactivate = function() {

}

class CompletionProvider {
  constructor() {
    this.imports = [];
    
    this.imports.push(require('../Definitions/layout.js'));
    this.imports.push(require('../Definitions/backgrounds.js'));
  }
  
  provideCompletionItems(editor, context) {
    let items = [];
    
    let myText = editor.getTextInRange(new Range(0, editor.document.length));
    
    // Gets index of previous space.
    // let lastSpaceIndex = myText.lastIndexOf(' ', context.position);
    // console.log(myText)
    // console.log(myText.substr(myText.lastIndexOf(' '), context.position));
    // console.log("last w, position, doc l: ",lastSpaceIndex + ", " + context.position + ", " + myText.length);
    // console.log(myText.substr(lastSpaceIndex, parseInt(context.position)));
    
    for (let fileCount = 0; fileCount < this.imports.length; fileCount++) {
      for (let i = 0; i < this.imports[fileCount].classes.length; i++) {
        let definitionObject = this.imports[fileCount].classes[i];
        
        // Label and kind are passed to the CompletionItem object when instantiated.
        if (definitionObject.hasOwnProperty('color')) {
          var item = new CompletionItem(definitionObject.label, CompletionItemKind.Color);
        } else {
          var item = new CompletionItem(definitionObject.label, CompletionItemKind.StyleClass);
        }
        
        
        if (definitionObject.hasOwnProperty('color')) { item.color = definitionObject.color };
        if (definitionObject.hasOwnProperty('detail')) { item.detail = definitionObject.detail };
        if (definitionObject.hasOwnProperty('documentation')) { item.documentation = definitionObject.documentation };
        if (definitionObject.hasOwnProperty('filterText')) { item.filterText = definitionObject.filterText };
        if (definitionObject.hasOwnProperty('insertText')) { item.insertText = definitionObject.insertText };
        if (definitionObject.hasOwnProperty('range')) { item.range = definitionObject.range };
        if (definitionObject.hasOwnProperty('commitChars')) { item.commitChars = definitionObject.commitChars };
        if (definitionObject.hasOwnProperty('tokenize')) { item.tokenize = definitionObject.tokenize };
        
        items.push(item);
      }
    }
    
    return items;
  }
}

nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

