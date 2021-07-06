'use strict'

const FUNCTIONS    = require('./functions.js')
const { ListItem } = require('./list_item.js')

exports.List = class List {
  constructor(version, definition_files) {
    this._version          = '2.0'
    this._definition_files = definition_files
    this._items            = []
  }

  async importDefinitions() {
    this._definition_files.forEach(definition => {
      let definitionObject = require(`../Definitions/${this._version}/${definition}`)
      let item             = new ListItem(definition)

      item.collapsibleState = TreeItemCollapsibleState.Collapsed
      item.image = 'sidebar-category'

      definitionObject.classes.forEach(definition => {
        let subItem = new ListItem(definition.label)

        if (definition.color !== undefined) {
          subItem.color = definition.color
        } else {
          subItem.image = '__symbol.style-class'
        }

        subItem.descriptiveText = definition.detail
        subItem.tooltip         = definition.documentation

        item.children = [...item.children, subItem]
      })

      this._items = [...this._items, item]
    })

    return true
  }

  async loadDefinitions() {
    await this.importDefinitions()

    return true
  }

  async loadTailwindConfigDefinitions() {
    //     let tailwindConfigFile = nova.fs.open('/Volumes/Macintosh HD/Users/jasonplatts/Sites/nova-extensions/completions/tailwindcss.novaextension/Sample Files/tailwind.config.js')
    //     let contents = tailwindConfigFile.readlines()
    //     tailwindConfigFile.close()
    //
    //     let newString = ''
    //
    //     contents.forEach((line) => {
    //       if (!line.includes('require(')) {
    //         newString = newString + line
    //       }
    //     })
    //
    //     let temp = eval(newString)
    //     // let temp = JSON.stringify(contents)
    //     console.log('contents', temp.theme.extend.colors['rails-blue'][900])
  }

  get items() {
    return this._items
  }
}
