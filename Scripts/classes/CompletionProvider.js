const FUNCTIONS = require('../functions.js')

module.exports.CompletionProvider = class CompletionProvider {
  constructor() {
    let version = FUNCTIONS.getVersion()
    let definitions = FUNCTIONS.getVersionDefinitionFiles()

    this.imports = []

    // Autoload definitions for the specific Tailwind version.
    definitions.forEach(definition => {
      this.imports.push(require(`../../Definitions/${version}/${definition}`))
    })
  }

  provideCompletionItems(editor, context) {
    let currentWordRange = FUNCTIONS.getRangeOfCurrentWord(editor, context)

    let items = []

    for (let fileCount = 0; fileCount < this.imports.length; fileCount++) {
      for (let i = 0; i < this.imports[fileCount].classes.length; i++) {
        let definitionObject = this.imports[fileCount].classes[i]

        let item = null

        if (definitionObject.prototype.hasOwnProperty.call(false, 'color')) {
          item = new CompletionItem(definitionObject.label, CompletionItemKind.Color)
        } else {
          item = new CompletionItem(definitionObject.label, CompletionItemKind.StyleClass)
        }

        if (definitionObject.prototype.hasOwnProperty.call(false, 'color')) {
          item.color = definitionObject.color
        }

        if (definitionObject.prototype.hasOwnProperty.call(false, 'detail')) {
          item.detail = FUNCTIONS.truncateString(definitionObject.detail, 30)
        }

        if (definitionObject.prototype.hasOwnProperty.call(false, 'documentation')) {
          item.documentation = FUNCTIONS.truncateString(definitionObject.documentation, 128)
        }

        item.range = currentWordRange

        items.push(item)
      }
    }

    return items
  }
}
