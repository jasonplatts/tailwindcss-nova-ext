const { CompletionProvider } = require("classes/CompletionProvider.js");
const FUNCTIONS = require('./functions.js');
const SUPPORTED_FILE_TYPES = [ "html", "html+erb", "haml", "php", "blade", "twig",
"vue", "js", "jsx", "ts", "tsx", "svelte", "liquid"];
let registeredCompletionAssistants = [];

exports.activate = function() {
  registerCompletionAssistants();  
  
  nova.workspace.config.observe("tailwindcss.workspace.version", reloadCompletionAssistants);
}

function registerCompletionAssistants() {
  console.clear();
  console.log("Current Tailwind Version", FUNCTIONS.getVersion());
  
  SUPPORTED_FILE_TYPES.forEach(fileType => {
    registeredCompletionAssistants.push(
      nova.assistants.registerCompletionAssistant(fileType, new CompletionProvider())
    );
  });
}

function unregisterCompletionAssistants() {
  registeredCompletionAssistants.forEach(assistant => { assistant.dispose(); });
  registeredCompletionAssistants = [];
}

function reloadCompletionAssistants() {
  unregisterCompletionAssistants();
  registerCompletionAssistants();
}

// FIXME: Detect config change and load relevant version definitions
