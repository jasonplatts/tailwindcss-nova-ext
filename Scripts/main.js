
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
    
    // TRYING TO:
    // Replace entered text with entire label
    // SO:
    // Need range of all entered text so far so can replace it with entire label
    // WHICH IS:
    // Document text range(?,context.position)
    // ? IS:
    // Document index of preceding space
    // HOW DO WE GET THAT?
    // get a string of word before cursor.
    console.clear();
    console.log("position:",context.position);
    // Gets last Character Entered
    console.log("text:",context.text);

    var lineWordArray = context.line.split(" ");
    console.log("lineWordArray:",lineWordArray);
    console.log("wordCountinline:",lineWordArray.length);
    
    if (lineWordArray.length > 0) {
      var lastWordBeforeCursor = lineWordArray[lineWordArray.length - 1];
    };
    
    console.log("lastwordbeforecursor:",lastWordBeforeCursor);
    
    // REPLACE THIS RANGE WITH LABEL
    let myRange = new Range(context.position - lastWordBeforeCursor.length, context.position);
    console.log("myrangeindocument(lastchar):", editor.document.getTextInRange(myRange));
    
    
    for (let fileCount = 0; fileCount < this.imports.length; fileCount++) {
      for (let i = 0; i < this.imports[fileCount].classes.length; i++) {
        let definitionObject = this.imports[fileCount].classes[i];
        
        // Label and kind are passed to the CompletionItem object when instantiated.
        if (definitionObject.hasOwnProperty('color')) {
          var item = new CompletionItem(definitionObject.label, CompletionItemKind.Color);
        } else {
          var item = new CompletionItem(definitionObject.label, CompletionItemKind.StyleClass);
        }
        
        if (definitionObject.hasOwnProperty('color')) { item.color = definitionObject.color; };
        if (definitionObject.hasOwnProperty('detail')) { item.detail = definitionObject.detail; };
        if (definitionObject.hasOwnProperty('documentation')) { item.documentation = definitionObject.documentation; };
        if (definitionObject.hasOwnProperty('filterText')) { item.filterText = definitionObject.filterText; };
        if (definitionObject.hasOwnProperty('insertText')) { item.insertText = definitionObject.insertText; };
        if (definitionObject.hasOwnProperty('insertTextFormat')) {
          item.insertTextFormat = definitionObject.insertTextFormat;
        };
        if (definitionObject.hasOwnProperty('range')) { item.range = definitionObject.range; };
        if (definitionObject.hasOwnProperty('commitChars')) { item.commitChars = definitionObject.commitChars; };
        
        items.push(item);
      }
    }
    
    return items;
  }
}

nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

