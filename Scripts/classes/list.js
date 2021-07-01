'use strict'

const FUNCTIONS           = require('../functions.js')
// const { Configuration }   = require('./configuration.js')
const { ListItem }        = require('./list_item.js')

exports.List = class List {
  constructor(version, definition) {
    this._version = '2.0'
    this._definition = 'backgrounds'
    this._config = null
    this._items  = []
  }

  async loadDefinitions() {
    let definition = require(`../../Definitions/${this._version}/${this._definition}`)
    // console.log('obj', JSON.stringify(this.obj))
    console.log('obj', definition.classes[0].label)
    let item = new ListItem(definition.classes[0].label)
    item.descriptiveText = 'test'
    this._items = [...this._items, item]
    console.log(this.items[0].name)

    return true
  }

  convertDefinitionToDataProviderItem() {

  }


  get config() {
    return this._config
  }

  get items() {
    return this._items
  }

  async updateOnChange() {

  }
}
