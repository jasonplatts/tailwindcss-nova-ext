'use strict'

const FUNCTIONS = require('./functions.js')

exports.CompletionProvider = class CompletionProvider {
  constructor(version, config) {
    this._config      = config
    this._version     = version
    this._definitions = config.definitions
    this._items       = []
  }

//on|off switch for the extension
static _toggle = false


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
              item = new CompletionItem(utilityClass.label, this._getCompletionItemKind(utilityClass.completionItemKind))
            }

            if (utilityClass.insertText !== undefined) {
              item.insertText = utilityClass.insertText
            }

            if (utilityClass.insertTextFormat !== undefined) {
              item.insertTextFormat = InsertTextFormat.Snippet;
            }

            if (utilityClass.detail !== undefined) {
              item.detail = FUNCTIONS.truncateString(utilityClass.detail, 30)
            }

            if (utilityClass.documentation !== undefined) {
              item.documentation = FUNCTIONS.truncateString(utilityClass.documentation, 128)
            }

            this._items = [...this._items, item]

            // Includes a negated class when specified, such as for the Tailwind class '-indent-1'.
            if (utilityClass.allowNegation === true) {
              let negatedItem = new CompletionItem(`-${utilityClass.label}`, this._getCompletionItemKind(utilityClass.completionItemKind))
              this._items = [...this._items, negatedItem]
            }
          })
        }
      }
    })

    return true
  }

  provideCompletionItems(editor, context) {
    if (this._preventCompletions(context)) {
      // console.log('stop')
      return
    } else {
      // console.log('go')
      return this._items
    }
  }

  _getCompletionItemKind(completionItemKindString) {
    let completionItemKind = undefined

    if (completionItemKindString !== null && completionItemKindString !== undefined) {
      switch(completionItemKindString) {
        case 'style_pseudo_class':
          completionItemKind = CompletionItemKind.StylePseudoClass
          break
        case 'style_pseudo_element':
          completionItemKind = CompletionItemKind.StylePseudoElement
          break
        case 'style_directive':
          completionItemKind = CompletionItemKind.StyleDirective
          break
        case 'style_ruleset':
          completionItemKind = CompletionItemKind.StyleRuleset
          break
        case 'function':
          completionItemKind = CompletionItemKind.Function
          break
        default:
          completionItemKind = CompletionItemKind.StyleClass
          break
      }
    } else {
      completionItemKind = CompletionItemKind.StyleClass
    }

    return completionItemKind
  }
  
  // tailwind.toggle command
  static toggle() { this._toggle = !this._toggle}
  
  _preventCompletions(context) {
    
    if(CompletionProvider._toggle){ return true }
    
    if (context.selectors.length > 0) {
      // console.log(context.selectors[0].string)
      // console.log(context.selectors[1].string)
      // console.log(context.selectors[2].string)
      // console.log(context.selectors[0].matches('html'))

      // Allow completions if context selectors is a HTML class attribute value.
      if (context.selectors[0].matches('html.tag.attribute.class.value.double-quoted')) { return false }

      if (context.selectors[0].matches('css')) { return false }

      // Allow completions in other files if contained within single quotes or double quotes.
      // This, for example, enables completions in Rails ERB files when passing a class option to the link_to method.
      if (context.selectors[0].classes.includes('single-quoted')) { return false }
      if (context.selectors[0].classes.includes('double-quoted')) { return false }

      // Prevent completions in an invalid Vue context.
      if (this._invalidVueContext(context)) { return true }

      return true
    } else {
      return true
    }
  }

  /*
    Evaluates if the completion position is within a valid context in Vue.
  */
  _invalidVueContext(context) {
    let rootScope = context.selectors.pop()

    if (rootScope.matches('vue.html.embedded.script')) { return true }
    if (rootScope.matches('vue.html.embedded.style') && !context.line.includes('@apply')) { return true }

    return false
  }
}
