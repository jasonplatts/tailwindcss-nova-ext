'use strict'

const FUNCTIONS = require('./functions.js')

/*
  Class handles the retrieval of default and user preference configurations
*/
exports.Configuration = class Configuration {
  constructor() {
    this._definition_files = []
    this._definitions      = []
  }
  static get SUPPORTED_FILE_TYPES() {
    return [
      'html', 'html+erb', 'html+eex', 'haml', 'php', 'blade', 'twig',
      'vue', 'js', 'jsx', 'ts', 'tsx', 'svelte', 'liquid', 'jade', 'pug'
    ]
  }

  static get VERSION() {
    return '2.x'
  }

  get defintions() {
    return this._definitions
  }

  async loadDefinitions() {
    await this.getVersionDefinitionFiles()

    this._definition_files.forEach(definition => {
      this._definitions = [...this._definitions, require(`../Definitions/${Configuration.VERSION}/${definition}`)]
    })

    return
  }

  async getVersionDefinitionFiles() {
    let path        = nova.extension.path + '/Definitions/' + Configuration.VERSION
    let definitions = nova.fs.listdir(path)

    definitions = definitions.filter((definition) => {
      if (nova.fs.stat(path + '/' + definition).isFile()) {
        return definition
      }
    })

    this._definition_files = definitions

    return
  }

  async loadTailwindConfig() {

  }

  async searchForConfigFile() {

  }
}
