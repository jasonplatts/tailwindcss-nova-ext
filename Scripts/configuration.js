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

  getVersion() {
    let version = nova.workspace.config.get('tailwindcss.workspace.version')

    if (version == null) {
      let definitionArray = nova.fs.listdir(nova.extension.path + '/Definitions')
      version = definitionArray.sort(function(a, b) {return b-a})[0]
    }

    return version
  }

  getVersionDefinitionFiles() {
    let path = nova.extension.path + '/Definitions/' + this.getVersion()
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
