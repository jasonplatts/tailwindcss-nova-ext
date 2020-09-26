
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


class CompletionProvider {
  constructor() {
    
    this.layout = require ('../Definitions/layout.js');
    //console.log("con");
  }
  
  provideCompletionItems(editor, context) {
    // The text immediately preceding the cursor
    //let text = context.text;
    
    // console.log(this.layout.classes[1].label);
    
    let items = [];
    
    for (let i = 0; i < this.layout.classes.length; i++) {
        let cssClass = this.layout.classes[i];
        
        let item = new CompletionItem(cssClass.label, CompletionItemKind.StyleClass);
        
        item.detail = "Layout Class"
        item.documentation = "A component for fixing an element's width to the current breakpoint."
        // The text to be inserted in the editor
        //item.insertText = "<" + tag + ">$[]</" + tag + ">";
        item.insertText = cssClass.label
        
        // Tokenize placeholders such as "$[]"
        item.tokenize = true;
        
        items.push(item);
    }
    
    return items;
  }
}


nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

