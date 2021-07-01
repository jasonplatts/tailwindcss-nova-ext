'use strict'

const FUNCTIONS = require('./functions.js')

/*
  Class handles the retrieval of default and user preference configurations
*/
exports.Configuration = class Configuration {
  async load() {
    await this.updatePreVersion3Settings()

    this._groupBy               = 'file'
    this._tags                  = await this.loadTags()
    this._caseSensitiveMatching = await this.loadCaseSensitiveMatching()
    this._excludedNames         = await this.loadExcludedNames()
    this._excludedPaths         = await this.loadExcludedPaths()
    this._excludedExtensions    = await this.loadExcludedExtensions()

    return this
  }

  static get DEFAULT_TAGS() {
    return ['todo', 'fixme']
  }

  static get PREFERENCE_TAGS() {
    return [
      'broken', 'bug', 'debug', 'deprecated', 'example', 'error',
      'err', 'fail', 'fatal', 'fix', 'hack', 'idea', 'info', 'note', 'optimize', 'question',
      'refactor', 'remove', 'review', 'task', 'trace', 'update', 'warn', 'warning'
    ]
  }

  static get DEFAULT_EXCLUDED_NAMES() {
    return ['node_modules', 'tmp', '.git', 'vendor', '.nova', '.gitignore', 'env', 'venv']
  }

  static get DEFAULT_EXCLUDED_EXTENSIONS() {
    return ['.json', '.map', '.md']
  }

  get groupBy() {
    return this._groupBy
  }

  async loadTailwindConfig() {

  }

  async searchForConfigFile() {

  }
}
