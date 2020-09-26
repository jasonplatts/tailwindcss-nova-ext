
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


class CompletionProvider {
    constructor() {
        
    }
    
    provideCompletionItems(editor, context) {
        // The text immediately preceding the cursor
        let text = context.text;
        
        let tags = ["foo", "bar", "baz"];
        let items = [];
        
        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];
            
            let item = new CompletionItem(tag, CompletionItemKind.Tag);
            
            item.documentation = "This is my extension for TailwindCSS."
            // The text to be inserted in the editor
            item.insertText = "<" + tag + ">$[]</" + tag + ">";
            
            // Tokenize placeholders such as "$[]"
            item.tokenize = true;
            
            items.push(item);
        }
        
        return items;
    }
}


nova.assistants.registerCompletionAssistant("html", new CompletionProvider());

