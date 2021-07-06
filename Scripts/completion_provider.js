'use strict'

const FUNCTIONS = require('./functions.js')

exports.CompletionProvider = class CompletionProvider {
  constructor(version, definition_files) {
    this._version          = version
    this._definition_files = definition_files
    this._imports          = []
    this._items            = []
  }

  async importDefinitions() {
    this._definition_files.forEach(definition => {
      this._imports.push(require(`../Definitions/${this._version}/${definition}`))
    })

    return true
  }

  async loadCompletionItems() {
    for (let fileCount = 0; fileCount < this._imports.length; fileCount++) {
      for (let i = 0; i < this._imports[fileCount].classes.length; i++) {
        let definitionObject = this._imports[fileCount].classes[i]

        let item = null

        if (definitionObject.color !== undefined) {
          item = new CompletionItem(definitionObject.label, CompletionItemKind.Color)

          item.color = definitionObject.color
        } else {
          item = new CompletionItem(definitionObject.label, CompletionItemKind.StyleClass)
        }

        if (definitionObject.detail !== undefined) {
          item.detail = FUNCTIONS.truncateString(definitionObject.detail, 30)
        }

        if (definitionObject.documentation !== undefined) {
          item.documentation = FUNCTIONS.truncateString(definitionObject.documentation, 128)
        }

        this._items = [...this._items, item]
      }
    }

    return true
  }

  provideCompletionItems(editor, context) {
    let currentWordRange = FUNCTIONS.getRangeOfCurrentWord(editor, context)

    this._items.forEach(item => {
      item.range = currentWordRange
    })

    return this._items
  }
}
