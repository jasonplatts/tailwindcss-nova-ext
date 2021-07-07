'use strict'

const FUNCTIONS    = require('./functions.js')
const { ListItem } = require('./list_item.js')

exports.List = class List {
  constructor(version, definitions) {
    this._version     = version
    this._definitions = definitions
    this._items       = []
  }

  async loadDefinitions() {
    this._definitions.forEach(definitionFile => {
      for (const [categoryName, category] of Object.entries(definitionFile)) {
        let categoryItem = new ListItem(FUNCTIONS.camelCaseToUpperCase(categoryName))

        categoryItem.collapsibleState = TreeItemCollapsibleState.Collapsed
        categoryItem.image            = 'sidebar-category'

        for (const [subCategoryName, subCategory] of Object.entries(category)) {
          let subCategoryItem = new ListItem(subCategoryName)

          subCategoryItem.collapsibleState = TreeItemCollapsibleState.Collapsed
          subCategoryItem.image            = 'sidebar-subcategory'

          categoryItem.children.push(subCategoryItem)

          subCategory.forEach(utilityClass => {
            let utilityClassItem = new ListItem(utilityClass.label)

            if (utilityClass.color !== undefined) {
              utilityClassItem.color = utilityClass.color
            } else {
              utilityClassItem.image = '__symbol.style-class'
            }

            utilityClassItem.descriptiveText = utilityClass.detail
            utilityClassItem.tooltip         = utilityClass.documentation

            subCategoryItem.children.push(utilityClassItem)
          })
        }

        this._items = [...this._items, categoryItem]
      }
    })

    return
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
