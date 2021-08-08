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
    if (this._preventCompletions(context)) {
      return
    } else {
      return this._items
    }
  }

  _preventCompletions(context) {
    const rootScope = context.selectors.pop()
    let invalidContext = false
    // console.log('root', rootScope)

    // console.log('Text', context.text)
    // console.log('Line', context.line)
    // console.log('Ident. chars', context.identifiedChars)
    // console.log('position', context.position)
    // console.log('reason', context.reason)
    // console.log('trigg char', context.triggerCharacter)
    // console.log('CONTEXT SELECTORS[0]', context.selectors[0].classes)
    // let temp = context.selectors[2]?.string
    // console.log('CONTEXT SELECTORS[0]', temp)
    // console.log('CONTEXT SELECTORS[0]', context.selectors[2].classes)
    // console.log('CONTEXT SELECTORS[0]', context?.selectors[1].string)
    // console.log('CONTEXT SELECTORS[0]', context?.selectors[2].string)

    // console.log('Selector Classes', rootScope.classes)
    // console.log('Selector String', rootScope.string)
    // console.log('Selector Match SCSS', rootScope.matches('scss'))
    // console.log('Selector Match Sass', rootScope.matches('sass'))
    // console.log('Selector Match HTML', rootScope.matches('html'))

    if (rootScope) {
      if (rootScope.matches('css') || rootScope.matches('scss') || rootScope.matches('sass')) {
        //console.log('Rootscope matches css, scss, or sass.')
      }

      if (this._invalidVueContext(rootScope, context.line)) {
        invalidContext = true
      }
    }

    //console.log('invalid context', invalidContext)
    return invalidContext
  }

  /*
    Evaluates if the completion position is within a valid context in Vue.
  */
  _invalidVueContext(scopeSelector, line) {
    let invalid = false

    if (scopeSelector.matches('vue.html.embedded.script')) { invalid = true }
    if (scopeSelector.matches('vue.html.embedded.style') && !line.includes('@apply')) { invalid = true }

    return invalid
  }

  /*
    Evaluates if the completion position is within a valid context in Vue.
  */
//   _invalidVueContext(scopeSelector, line) {
//     let invalid = false
//
//     if (scopeSelector.matches('vue.html.embedded.script')) { invalid = true }
//     if (scopeSelector.matches('vue.html.embedded.style') && !line.includes('@apply')) { invalid = true }
//
//     return invalid
//   }
}
