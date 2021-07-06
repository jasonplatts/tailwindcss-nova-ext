'use strict'

const FUNCTIONS = require('./functions.js')

/*
  Class handles the retrieval of default and user preference configurations
*/
exports.Configuration = class Configuration {
  static get SUPPORTED_FILE_TYPES() {
    return [
      'html', 'html+erb', 'html+eex', 'haml', 'php', 'blade', 'twig',
      'vue', 'js', 'jsx', 'ts', 'tsx', 'svelte', 'liquid', 'jade', 'pug'
    ]
  }

  static get VERSION() {
    return '2.x'
  }

  getVersionDefinitionFiles() {
    let path        = nova.extension.path + '/Definitions/' + Configuration.VERSION
    let definitions = nova.fs.listdir(path)

    definitions = definitions.filter((definition) => {
      if (nova.fs.stat(path + '/' + definition).isFile()) {
        return definition
      }
    })

    return definitions
  }

  async loadTailwindConfig() {

  }

  async searchForConfigFile() {

  }
}
