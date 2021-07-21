'use strict'

const FUNCTIONS = require('./functions.js')

exports.CompletionProvider = class CompletionProvider {
  constructor(version, config) {
    this._config      = config
    this._version     = version
    this._definitions = config.definitions
    this._items       = []
  }

  async loadCompletionItems() {
    this._definitions.forEach(definitionFile => {
      let twClasses = definitionFile.twClasses(this._config)

      for (const [categoryName, categoryClasses] of Object.entries(twClasses)) {
        for (const [subCategoryName, subCategory] of Object.entries(categoryClasses)) {
          subCategory.forEach(utilityClass => {
            let item = null

            if (utilityClass.color !== undefined) {
              item = new CompletionItem(utilityClass.label, CompletionItemKind.Color)

              item.color = utilityClass.color
            } else {
              item = new CompletionItem(utilityClass.label, CompletionItemKind.StyleClass)
            }

            if (utilityClass.detail !== undefined) {
              item.detail = FUNCTIONS.truncateString(utilityClass.detail, 30)
            }

            if (utilityClass.documentation !== undefined) {
              item.documentation = FUNCTIONS.truncateString(utilityClass.documentation, 128)
            }

            this._items = [...this._items, item]
          })
        }
      }
    })

    return true
  }

  provideCompletionItems(editor, context) {
    let currentWordRange = FUNCTIONS.getRangeOfCurrentWord(editor, context)

    if (this.bypassSpecialCase(context)) { return }

    this._items.forEach(item => {
      item.range = currentWordRange
    })

    return this._items
  }

  bypassSpecialCase(context) {
    const rootScope = context.selectors.pop()
    console.log('root', rootScope)

    if (rootScope?.matches('vue.html.embedded.script')) {
      return true
    }
    if (rootScope?.matches('vue.html.embedded.style') && !context.line.includes('@apply')) {
      return true
    }

    return false
  }
}
