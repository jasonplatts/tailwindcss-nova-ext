const { CompletionProvider } = require("classes/CompletionProvider.js");

exports.activate = function() {
  let fileTypes = [ "html", "html+erb", "haml", "php", "blade", "twig",
  "vue", "js", "jsx", "ts", "tsx", "svelte", "liquid"];
  
  fileTypes.forEach(fileType => {
    nova.assistants.registerCompletionAssistant(fileType, new CompletionProvider());
  });
}

exports.deactivate = function() {

}

// FIXME: Detect config change and load relevant version definitions
